import express, { Request, Response } from "express";
import path from "path";
import { viewsPath } from "../util/path";

export const router = express.Router();

export let products: Array<Record<string, any>> = [];

// /admin/add-product => GET
router.get("/add-product", (_, res: Response) => {
  res.sendFile(path.join(viewsPath, "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req: Request, res: Response) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});
