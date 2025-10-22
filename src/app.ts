import http from "http";
import express, { NextFunction, Request, Response } from "express";

const app = express();
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.url);
  console.log(res.statusMessage);
  next();
});

const server = http.createServer(app);
server.listen(3000);
