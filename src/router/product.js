import express from "express";
import { create, getAll, getOne, remove, update } from "../controller/product";

const router = express.Router();

router.get("/product", getAll);
router.get("/product/:id", getOne);
router.post("/product", create);
router.put("/product/:id", update);
router.delete("/product/:id", remove);
export default router;
