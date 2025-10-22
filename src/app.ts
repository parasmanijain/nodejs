import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (_, res: Response) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req: Request, res: Response) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (_, res: Response) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
