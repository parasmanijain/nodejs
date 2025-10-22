import express, { Response } from "express";
import bodyParser from "body-parser";
import path from "path";
import { router as adminRoutes } from "./routes/admin";
import { router as shopRoutes } from "./routes/shop";
import { viewsPath } from "./util/path";
import { get404 } from "./controllers/error";

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use(get404);

app.listen(3000);
