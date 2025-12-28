import Transaction from "../models/Transaction";

interface CreateTransactionInput {
  amount: number;
  type: "income" | "expense";
  date: string;
  note?: string;
  categoryId: number;
}

interface UpdateTransactionInput {
  amount?: number;
  type?: "income" | "expense";
  date?: string;
  note?: string;
  categoryId?: number;
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


export const updateTransaction = async (
  userId: number,
  transactionId: number,
  data: UpdateTransactionInput
) => {
  const transaction = await Transaction.findOne({
    where: { id: transactionId, userId },
  });

  if (!transaction) {
    throw new Error("Transaction not found");
  }

  await transaction.update(data);

  return transaction;
};


export const deleteTransaction = async (
  userId: number,
  transactionId: number
) => {
  const transaction = await Transaction.findOne({
    where: { id: transactionId, userId },
  });

  if (!transaction) {
    throw new Error("Transaction not found");
  }

  await transaction.destroy();
};