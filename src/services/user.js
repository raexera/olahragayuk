export const createUser = async (user) => {
  const { data, error } = await supabase.from("User").insert(user);
  if (error) {
    throw new Error("Failed to create user");
  }
  return data;
};
