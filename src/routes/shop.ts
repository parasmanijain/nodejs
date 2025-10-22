import express, { Response } from "express";
import path from "path";
import { viewsPath } from "../util/path";
import { products } from "./admin";

export const router = express.Router();

router.get("/", (_, res: Response) => {
  console.log("shop.js", products);
  res.sendFile(path.join(viewsPath, "shop.html"));
});
