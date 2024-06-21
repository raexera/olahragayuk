import supabase from "../lib/supabase";

export const getTournaments = async () => {
  const { data, error } = await supabase.from("tournament").select("*");

  if (error) {
    console.error("Error fetching tournament:", error);
    throw error;
  }

  return data;
};

export const getTournamentById = async (tournamentid) => {
  const { data, error } = await supabase
    .from("tournament")
    .select("*")
    .eq("tournamentid", tournamentid)
    .single();

  if (error) {
    console.error(`Error fetching tournament with ID ${tournamentid}:`, error);
    throw error;
  }

  return data;
};

export const getFilteredTournaments = async (cityid, sportid) => {
  let { data, error } = await supabase.from("tournament").select("*");

  if (cityid && sportid) {
    ({ data, error } = await supabase
      .from("tournament")
      .select("*")
      .eq("cityid", cityid)
      .eq("sportid", sportid));
  } else if (cityid) {
    ({ data, error } = await supabase
      .from("tournament")
      .select("*")
      .eq("cityid", cityid));
  } else if (sportid) {
    ({ data, error } = await supabase
      .from("tournament")
      .select("*")
      .eq("sportid", sportid));
  }

  if (error) {
    console.error("Error fetching filtered tournaments:", error);
    throw error;
  }

  return data;
};
