import supabase from "../lib/supabase";

export const createBooking = async (
  userId,
  fieldId,
  bookingDate,
  startTime,
  endTime,
) => {
  const { data, error } = await supabase
    .from("Booking")
    .insert([
      {
        UserID: userId,
        FieldID: fieldId,
        BookingDate: bookingDate,
        StartTime: startTime,
        EndTime: endTime,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error creating booking:", error);
    throw error;
  }

  return data;
};

export const createTransaction = async (
  userId,
  bookingId,
  orderId,
  amount,
  transactionDate,
  paymentMethod,
  status,
) => {
  const { data, error } = await supabase
    .from("Transaction")
    .insert([
      {
        UserID: userId,
        BookingID: bookingId,
        OrderID: orderId,
        Amount: amount,
        TransactionDate: transactionDate,
        PaymentMethod: paymentMethod,
        Status: status,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error creating transaction:", error);
    throw error;
  }

  return data;
};