import express from 'express';
import {
    register, 
    registerValidation,
    login,
    loginValidation,
} from '../controllers/userController.js';

const router = express.Router();
router.post('/register', registerValidation ,register);
router.post('/login', loginValidation, login)

export default router;