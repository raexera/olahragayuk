import supabase from "../lib/supabase";

export const getCoaches = async () => {
  const { data, error } = await supabase.from("coach").select("*");

  if (error) {
    console.error("Error fetching coaches:", error);
    throw error;
  }

  return data;
};

export const getCoachById = async (coachid) => {
  const { data, error } = await supabase
    .from("coach")
    .select("*")
    .eq("coachid", coachid)
    .single();

  if (error) {
    console.error(`Error fetching coach with ID ${coachid}:`, error);
    throw error;
  }

  return data;
};

export const getFilteredCoaches = async (cityid, sportid) => {
  let { data, error } = await supabase.from("coach").select("*");

  if (cityid && sportid) {
    ({ data, error } = await supabase
      .from("coach")
      .select("*")
      .eq("cityid", cityid)
      .eq("sportid", sportid));
  } else if (cityid) {
    ({ data, error } = await supabase
      .from("coach")
      .select("*")
      .eq("cityid", cityid));
  } else if (sportid) {
    ({ data, error } = await supabase
      .from("coach")
      .select("*")
      .eq("sportid", sportid));
  }

  if (error) {
    console.error("Error fetching filtered coaches:", error);
    throw error;
  }

  return data;
};
