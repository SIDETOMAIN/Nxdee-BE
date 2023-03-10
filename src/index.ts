import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.get('/', async (req:Request, res:Response, next:NextFunction) => {
  res.status(200).send('Ok.');
});

app.listen(process.env.SERVER_PORT, () => console.log(`Server listening on ${process.env.SERVER_PORT}`));
