import supabase from "@/lib/supabase";

export const getUser = async () => {
  const { data, error } = await supabase.from("User").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createUser = async (user) => {
  const { data, error } = await supabase.from("User").insert(user);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const updateUser = async (id, user) => {
  const { data, error } = await supabase
    .from("User")
    .update(user)
    .match({ id });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteUser = async (id) => {
  const { data, error } = await supabase.from("User").delete().match({ id });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
