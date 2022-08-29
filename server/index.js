import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection_URL = 'mongodb+srv://dhananjay79:helloworld@clouddatabases.ijirpxi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connection_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log('Server is running on port 5000');
        })
    })
    .catch(err => console.log(err));

app.use('/', router);