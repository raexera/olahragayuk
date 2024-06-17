import supabase from "../lib/supabase";

export const getCities = async () => {
  const { data, error } = await supabase.from("city").select("*");

  if (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }

  return data;
};

export const getCityById = async (cityid) => {
  const { data, error } = await supabase
    .from("city")
    .select("*")
    .eq("cityid", cityid)
    .single();

  if (error) {
    console.error(`Error fetching city with ID ${cityid}:`, error);
    throw error;
  }

  return data;
};
