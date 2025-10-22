import express, { NextFunction, Request, Response } from "express";

const app = express();
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.url);
  console.log(res.statusMessage);
  next();
});

app.use((req: Request, res: Response) => {
  res.send('<h1>Hello from Express!</h1>')
});

app.listen(3000);
