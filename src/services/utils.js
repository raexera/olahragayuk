export const incrementId = async (table) => {
  const { data, error } = await supabase.from(table).select("*");

  if (error) {
    console.error(`Error fetching ${table} IDs:`, error);
    throw error;
  }

  if (data.length === 0) {
    return 1;
  }

  const lastId = data[data.length - 1];
  return lastId.id + 1;
};
