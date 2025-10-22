import express, { Response } from "express";
import bodyParser from "body-parser";
import { router as adminRoutes } from "./routes/admin";
import { router as shopRoutes } from "./routes/shop";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use((_, res: Response) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
