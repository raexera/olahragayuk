export const createFieldProvider = async (fieldProvider) => {
  const { data, error } = await supabase
    .from("FieldProvider")
    .insert(fieldProvider);
  if (error) {
    throw new Error("Failed to create field provider");
  }
  return data;
};

export const getFieldProvider = async (id) => {
  const { data, error } = await supabase
    .from("FieldProvider")
    .select("*")
    .eq("id", id);
  if (error) {
    throw new Error("Failed to fetch field provider");
  }
  return data;
};

export const updateFieldProvider = async (id, fieldProvider) => {
  const { data, error } = await supabase
    .from("FieldProvider")
    .update(fieldProvider)
    .eq("id", id);
  if (error) {
    throw new Error("Failed to update field provider");
  }
  return data;
};

export const deleteFieldProvider = async (id) => {
  const { data, error } = await supabase
    .from("FieldProvider")
    .delete()
    .eq("id", id);
  if (error) {
    throw new Error("Failed to delete field provider");
  }
  return data;
};

export const listFieldProviders = async () => {
  const { data, error } = await supabase.from("FieldProvider").select("*");
  if (error) {
    throw new Error("Failed to list field providers");
  }
  return data;
};
