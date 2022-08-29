import {body, validationResult} from 'express-validator';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// const createToken = (user) => {
//     return jwt.sign({
//         id: user.id,
//         email: user.email,
//         name: user.name
//     }, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRES_IN
//     });
// }

/// Register user validation
export const registerValidation = [
    body('name').exists().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please write a valid email'),
    body('password').isLength({min: 8}).withMessage('Password must be at least 8 characters long'),
];

/// Register a new user
export const register = async (req, res) => {

    if (validationResult(req).isEmpty()) {
        try {
            // Check if user already exists
            const user = await User.findOne({email: req.body.email});
            if (user){
                // User already exists
                return res.status(400).json({
                    message: 'User already exists'
                });
            }
            // Create a new user
            return await createUser(req);

        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }
    else {
        // error message
        return res.status(400).json({message: validationResult(req).array()});
    }
}

/// create user and hash the password
const createUser = async (req) =>{
    bcrypt.hash(req.body.password, 10).then(async function(hash) {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });

        // save the user to the database
        await newUser.save();
        // Send response to the client that user is created
        return res.status(200).json({
            message: 'User created successfully'
        });
    });
}

/// Login request validation
export const loginValidation = [
    body('email').isEmail().withMessage('Please write a valid email'),
    body('password').exists().withMessage('Password is required')
];

/// Login a user
export const login = async (req, res) => {
    // Check the user exist or not
    if (validationResult(req).isEmpty()) {
        try {
            // get that user from database
            const user = await User.findOne({email: req.body.email});
            if (user) {
                // check password is correct or not
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) {
                        return res.status(500).json({
                            message: err.message
                        });
                    }
                    else if (result) {
                        // user is authenticated
                        return res.status(200).json({
                            message: 'User authenticated successfully'
                        });
                    }

                    // password is incorrect
                    return res.status(400).json({
                        message: 'Password is incorrect'
                    });
                });
            }
            else {
                return res.status(404).json({message: 'User not found'});
            }
        } catch (error) {
            // internal error
            return res.status(500).json({message: error.message});
        }
    }
    else {
        // Bad request error
        return res.status(400).json({message: validationResult(req).array()});
    }
}