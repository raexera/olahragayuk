export const createFieldProvider = async (fieldProvider) => {
  const { data, error } = await supabase
    .from("FieldProvider")
    .insert(fieldProvider);
  if (error) {
    throw new Error("Failed to create field provider");
  }
  return data;
};
