import path from 'path';

const isProd = process.env.NODE_ENV === "production";

export const viewsPath = isProd
  ? path.join(__dirname, "../views") // views will be in dist
  : path.join(process.cwd(), "src", "views"); // views in src during dev

