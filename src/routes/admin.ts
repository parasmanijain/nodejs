import express, { Request, Response } from "express";

export const router = express.Router();

router.get("/add-product", (_, res) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.post("/product", (req: Request, res: Response) => {
  console.log(req.body);
  res.redirect("/");
});