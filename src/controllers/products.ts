import { Request, Response } from "express";

export let products: Array<Record<string, any>> = [];

export const getAddProduct = (_: Request, res: Response) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

export const postAddProduct = (req: Request, res: Response) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

export const getProducts = (_: Request, res: Response) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
