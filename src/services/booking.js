import supabase from "@/lib/supabase";

export const getBookings = async () => {
  const { data, error } = await supabase.from("Booking").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createBooking = async (booking) => {
  const { data, error } = await supabase.from("Booking").insert(booking);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const updateBooking = async (id, booking) => {
  const { data, error } = await supabase
    .from("Booking")
    .update(booking)
    .match({ id });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteBooking = async (id) => {
  const { data, error } = await supabase.from("Booking").delete().match({ id });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
