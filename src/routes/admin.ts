import express, { Request, Response } from "express";

export const router = express.Router();

router.get("/add-product", (_, res: Response) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.post("/add-product", (req: Request, res: Response) => {
  console.log(req.body);
  res.redirect("/");
});
