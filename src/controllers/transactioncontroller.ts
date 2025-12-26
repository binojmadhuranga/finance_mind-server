import { Request, Response } from "express";
import * as transactionService from "../services/transactionservice";

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await transactionService.createTransaction(
      req.user.id,
      req.body
    );
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Failed to create transaction" });
  }
};

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await transactionService.getUserTransactions(
      req.user.id
    );
    res.json(transactions);
  } catch {
    res.status(500).json({ message: "Failed to fetch transactions" });
  }
};
