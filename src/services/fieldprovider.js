import supabase from "../lib/supabase";

export const getFieldProvider = async () => {
  const { data, error } = await supabase.from("fieldprovider").select("*");

  if (error) {
    console.error("Error fetching fields:", error);
    throw error;
  }

  return data;
};
