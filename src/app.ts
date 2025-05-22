import express, { Application, Request, Response } from 'express';
import cors from 'cors';

export const app:Application = express();


// perser
app.use(express.json());
app.use(cors({origin: ['http://localhost:5000'], credentials: true}));

// app Router here


app.get('/', (req:Request, res:Response) => {
    res.send({status: true, message: 'Server is running.'});
});