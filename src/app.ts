import express, { NextFunction, Request, Response } from "express";

const app = express();
app.use('/', (req:Request, res:Response, next:NextFunction) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req:Request, res:Response) => {
  console.log('In add product route middleware!');
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/', (req:Request, res:Response) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
