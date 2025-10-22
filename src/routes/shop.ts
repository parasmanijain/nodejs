import express, { Response } from "express";
import path from 'path';

export const router = express.Router();

router.get('/', (_, res:Response) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});