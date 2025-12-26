import Transaction from "../models/Transaction";

interface CreateTransactionInput {
  amount: number;
  type: "income" | "expense";
  date: string;
  note?: string;
  categoryId: number;
}

export const createTransaction = async (
  userId: number,
  data: CreateTransactionInput
) => {
  return await Transaction.create({
    amount: data.amount,
    type: data.type,
    date: data.date,
    note: data.note,
    categoryId: data.categoryId,
    userId,
  });
};

export const getUserTransactions = async (userId: number) => {
  return await Transaction.findAll({
    where: { userId },
    order: [["date", "DESC"]],
  });
};
