import supabase from "@/lib/supabase";

export const getTransactions = async () => {
  const { data, error } = await supabase.from("Transaction").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createTransaction = async (transaction) => {
  const { data, error } = await supabase
    .from("Transaction")
    .insert(transaction);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const updateTransaction = async (id, transaction) => {
  const { data, error } = await supabase
    .from("Transaction")
    .update(transaction)
    .match({ id });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteTransaction = async (id) => {
  const { data, error } = await supabase
    .from("Transaction")
    .delete()
    .match({ id });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
