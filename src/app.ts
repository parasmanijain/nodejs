import express, { Response } from "express";
import bodyParser from "body-parser";
import path from "path";
import { router as adminRoutes } from "./routes/admin";
import { router as shopRoutes } from "./routes/shop";
import { viewsPath } from "./util/path";

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use((_, res:Response) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path:'/' });
});

app.listen(3000);
