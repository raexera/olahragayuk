export const createUser = async (user) => {
  const { data, error } = await supabase.from("User").insert(user);
  if (error) {
    throw new Error("Failed to create user");
  }
  return data;
};

export const getUser = async (id) => {
  const { data, error } = await supabase.from("User").select("*").eq("id", id);
  if (error) {
    throw new Error("Failed to fetch user");
  }
  return data;
};

export const updateUser = async (id, user) => {
  const { data, error } = await supabase.from("User").update(user).eq("id", id);
  if (error) {
    throw new Error("Failed to update user");
  }
  return data;
};

export const deleteUser = async (id) => {
  const { data, error } = await supabase.from("User").delete().eq("id", id);
  if (error) {
    throw new Error("Failed to delete user");
  }
  return data;
};

export const listUsers = async () => {
  const { data, error } = await supabase.from("User").select("*");
  if (error) {
    throw new Error("Failed to list users");
  }
  return data;
};
