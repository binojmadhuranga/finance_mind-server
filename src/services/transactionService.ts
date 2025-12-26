import Transaction from "../models/Transaction";

export const createTransaction = async (
  userId: number,
  data: {
    amount: number;
    type: "income" | "expense";
    date: string;
    note?: string;
    categoryId: number;
  }
) => {
  return await Transaction.create({
    ...data,
    userId,
  });
};

export const getUserTransactions = async (userId: number) => {
  return await Transaction.findAll({
    where: { userId },
    order: [["date", "DESC"]],
  });
};
