import express, { Response } from "express";
import path from 'path';
import { viewsPath } from "../util/path";

export const router = express.Router();

router.get('/', (_, res:Response) => {
  res.sendFile(path.join(viewsPath, "shop.html"));
});