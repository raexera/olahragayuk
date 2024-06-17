import supabase from "../lib/supabase";

export const getSports = async () => {
  const { data, error } = await supabase.from("sport").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getSportById = async (sportId) => {
  const { data, error } = await supabase
    .from("sport")
    .select("*")
    .eq("sportid", sportId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
