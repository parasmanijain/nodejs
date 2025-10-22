import express, { Response } from "express";
import bodyParser from "body-parser";
import path from "path";
import { engine } from "express-handlebars";
import { router as adminRoutes } from "./routes/admin";
import { router as shopRoutes } from "./routes/shop";

const app = express();

app.engine(
  "hbs",
  engine({
    layoutsDir: path.join(__dirname, "views", "layouts"),
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use("/admin", adminRoutes);

// 404 handler
app.use((_, res: Response) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
