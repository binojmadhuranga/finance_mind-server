import { Router } from "express";
import {
  createTransaction,
  getTransactions,
  updateTransaction,
} from "../controllers/transactioncontroller";
import { authMiddleware } from "../middleware/authMiddleware";


const router = Router();

router.post("/", authMiddleware, createTransaction);
router.get("/", authMiddleware, getTransactions);
router.put("/:id", authMiddleware, updateTransaction);

export default router;
