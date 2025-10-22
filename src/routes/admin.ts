import express, { Request, Response } from "express";
import path from 'path';

export const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (_, res: Response) => {
   res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
 
});

// /admin/add-product => POST
router.post("/add-product", (req: Request, res: Response) => {
  console.log(req.body);
  res.redirect("/");
});
