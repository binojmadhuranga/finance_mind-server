import { Response } from "express";
import { AuthRequest } from "../types/authRequest";
import * as transactionService from "../services/transactionService";

export const createTransaction = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const transaction = await transactionService.createTransaction(
      req.user.id,
      req.body
    );

    res.status(201).json(transaction);
  } catch {
    res.status(500).json({ message: "Failed to create transaction" });
  }
};

export const getTransactions = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const transactions = await transactionService.getUserTransactions(
      req.user.id
    );

    res.json(transactions);
  } catch {
    res.status(500).json({ message: "Failed to fetch transactions" });
  }
};
