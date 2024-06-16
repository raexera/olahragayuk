import supabase from "../lib/supabase";
import { redirect } from "next/navigation";

export const signInWithOAuth = async (provider) => {
  const { error, data } = await supabase.auth.signInWithOAuth({ provider });
  if (error) {
    throw error;
  } else {
    return redirect(data.url);
  }
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getUsers = async () => {
  const { data, error } = await supabase.from("User").select("*");
  if (error) throw error;
  return data;
};

export const getUserById = async (userId) => {
  const { data, error } = await supabase
    .from("User")
    .select("*")
    .eq("UserID", userId)
    .single();
  if (error) throw error;
  return data;
};

export const updateUser = async (userId, updates) => {
  const { data, error } = await supabase
    .from("User")
    .update(updates)
    .eq("UserID", userId);
  if (error) throw error;
  return data;
};

export const deleteUser = async (userId) => {
  const { data, error } = await supabase
    .from("User")
    .delete()
    .eq("UserID", userId);
  if (error) throw error;
  return data;
};
