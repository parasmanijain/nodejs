import express, { Response } from "express";
import { getCart, getCheckout, getIndex, getProducts } from "../controllers/shop";

export const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/cart', getCart);

router.get('/checkout', getCheckout);