import express, { Request, Response } from "express";
import path from 'path';
import { viewsPath } from "../util/path";

export const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (_, res: Response) => {
  res.sendFile(path.join(viewsPath, "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req: Request, res: Response) => {
  console.log(req.body); // Make sure body-parser is set up in app.js
  res.redirect("/");
});