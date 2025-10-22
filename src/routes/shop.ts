import express, { Response } from "express";

export const router = express.Router();

router.get('/', (_, res:Response) => {
  res.send('<h1>Hello from Express!</h1>');
});