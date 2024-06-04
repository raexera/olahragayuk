import supabase from "@/lib/supabase";

export const getFields = async () => {
  const { data, error } = await supabase.from("Field").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createField = async (field) => {
  const { data, error } = await supabase.from("Field").insert(field);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const updateField = async (id, field) => {
  const { data, error } = await supabase
    .from("Field")
    .update(field)
    .match({ id });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteField = async (id) => {
  const { data, error } = await supabase.from("Field").delete().match({ id });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
