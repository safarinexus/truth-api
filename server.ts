import dotenv from 'dotenv';
dotenv.config()
import express, { Request, Response } from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {`App started! Listening on Port ${port}`});