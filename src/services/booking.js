export const createBooking = async (booking) => {
  const { data, error } = await supabase.from("Booking").insert(booking);
  if (error) {
    throw new Error("Failed to create booking");
  }
  return data;
};
