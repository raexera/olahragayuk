export const createTransaction = async (transaction) => {
  const { data, error } = await supabase
    .from("Transaction")
    .insert(transaction);
  if (error) {
    throw new Error("Failed to create transaction");
  }
  return data;
};
