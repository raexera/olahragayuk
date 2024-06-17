import supabase from "../lib/supabase";

export const getSports = async () => {
  const { data, error } = await supabase.from("sport").select("*");

  if (error) {
    console.error("Error fetching sports:", error);
    throw error;
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
    console.error(`Error fetching sport with ID ${sportId}:`, error);
    throw error;
  }

  return data;
};
