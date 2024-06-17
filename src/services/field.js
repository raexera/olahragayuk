import supabase from "../lib/supabase";

export const getFields = async () => {
  const { data, error } = await supabase.from("field").select("*");

  if (error) {
    console.error("Error fetching fields:", error);
    throw error;
  }

  return data;
};

export const getFieldById = async (fieldid) => {
  const { data, error } = await supabase
    .from("field")
    .select("*")
    .eq("fieldid", fieldid)
    .single();

  if (error) {
    console.error(`Error fetching field with ID ${fieldid}:`, error);
    throw error;
  }

  return data;
};

export const getFilteredFields = async (cityid, sportid) => {
  let { data, error } = await supabase.from("field").select("*");

  if (cityid && sportid) {
    ({ data, error } = await supabase
      .from("field")
      .select("*")
      .eq("cityid", cityid)
      .eq("sportid", sportid));
  } else if (cityid) {
    ({ data, error } = await supabase
      .from("field")
      .select("*")
      .eq("cityid", cityid));
  } else if (sportid) {
    ({ data, error } = await supabase
      .from("field")
      .select("*")
      .eq("sportid", sportid));
  }

  if (error) {
    console.error("Error fetching filtered fields:", error);
    throw error;
  }

  return data;
};
