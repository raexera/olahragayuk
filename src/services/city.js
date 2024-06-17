import supabase from "../lib/supabase";

export const getCities = async () => {
  const { data, error } = await supabase.from("city").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getCityById = async (cityId) => {
  const { data, error } = await supabase
    .from("city")
    .select("*")
    .eq("cityid", cityId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
