import supabase from "../lib/supabase";
import { incrementId } from "./utils";

export const createTournament = async (
  tournamentname,
  location,
  startdate,
  enddate,
  description,
  cityid,
  sportid,
) => {
  const { data, error } = await supabase.from("tournament").insert([
    {
      tournamentid: await incrementId("tournament"),
      tournamentname: tournamentname,
      location: location,
      startdate: startdate,
      enddate: enddate,
      description: description,
      cityid: cityid,
      sportid: sportid,
    },
  ]);

  if (error) {
    console.error("Error creating tournament:", error);
    throw error;
  }

  return data;
};

export const getTournaments = async () => {
  const { data, error } = await supabase.from("tournament").select("*");

  if (error) {
    console.error("Error fetching tournaments:", error);
    throw error;
  }

  return data;
};

export const getTournamentById = async (tournamentId) => {
  const { data, error } = await supabase
    .from("tournament")
    .select("*")
    .eq("tournamentid", tournamentId)
    .single();

  if (error) {
    console.error(`Error fetching tournament with ID ${tournamentId}:`, error);
    throw error;
  }

  return data;
};
