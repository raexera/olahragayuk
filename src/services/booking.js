import supabase from "../lib/supabase";

const incrementBookingId = async () => {
  const { data, error } = await supabase.from("booking").select("*");

  if (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }

  if (data.length === 0) {
    return 1;
  }

  const lastBooking = data[data.length - 1];
  return lastBooking.bookingid + 1;
};

export const createBooking = async (
  userId,
  fieldId,
  bookingDate,
  startTime,
  endTime,
) => {
  const { data, error } = await supabase.from("booking").insert([
    {
      bookingid: await incrementBookingId(),
      userid: userId,
      fieldid: fieldId,
      bookingdate: bookingDate,
      starttime: startTime,
      endtime: endTime,
    },
  ]);

  if (error) {
    console.error("Error creating booking:", error);
    throw error;
  }

  return data;
};

export const getBookings = async (userId) => {
  const { data, error } = await supabase.from("booking").select("*");

  if (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }

  return data;
};
