export const createField = async (field) => {
  const { data, error } = await supabase.from("Field").insert(field);
  if (error) {
    throw new Error("Failed to create field");
  }
  return data;
};
