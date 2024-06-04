export const createField = async (field) => {
  const { data, error } = await supabase.from("Field").insert(field);
  if (error) {
    throw new Error("Failed to create field");
  }
  return data;
};

export const getField = async (id) => {
  const { data, error } = await supabase.from("Field").select("*").eq("id", id);
  if (error) {
    throw new Error("Failed to fetch field");
  }
  return data;
};

export const updateField = async (id, field) => {
  const { data, error } = await supabase
    .from("Field")
    .update(field)
    .eq("id", id);
  if (error) {
    throw new Error("Failed to update field");
  }
  return data;
};

export const deleteField = async (id) => {
  const { data, error } = await supabase.from("Field").delete().eq("id", id);
  if (error) {
    throw new Error("Failed to delete field");
  }
  return data;
};

export const listFields = async () => {
  const { data, error } = await supabase.from("Field").select("*");
  if (error) {
    throw new Error("Failed to list fields");
  }
  return data;
};
