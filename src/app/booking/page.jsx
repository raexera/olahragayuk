"use client";

import React, { useState } from "react";
import WhiteArrow from "../assets/white-arrow";
// import "../globals.css";

const DateSelector = ({ bookingDate, handleDateChange }) => {
  return (
    <div className="date-selector">
      <input
        type="date"
        value={bookingDate}
        onChange={handleDateChange}
        className="w-full px-4 py-2 border rounded-md text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#BEE702] mb-2"
      />
    </div>
  );
};

const TimeSelector = ({
  bookingTime,
  handleTimeChange,
  duration,
  handleDurationChange,
}) => {
  return (
    <div className="time-selector">
      <input
        type="time"
        value={bookingTime}
        onChange={handleTimeChange}
        className="w-full px-4 py-2 border rounded-md text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#BEE702] mb-2"
      />
      <div className="text-[24px]">
        <h1>Select Duration</h1>
      </div>
      <select
        value={duration}
        onChange={handleDurationChange}
        className="w-full px-4 py-2 border rounded-md text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#BEE702] mb-2"
      >
        {[...Array(24)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1} hour{i + 1 > 1 ? "s" : ""}
          </option>
        ))}
      </select>
    </div>
  );
};

const NameBooking = ({ bookingName, handleNameChange }) => {
  return (
    <div className="name-selector">
      <input
        type="text"
        value={bookingName}
        onChange={handleNameChange}
        className="w-full px-4 py-2 border rounded-md text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#BEE702] mb-2"
      />
    </div>
  );
};

const EmailBooking = ({ bookingEmail, handleEmailChange }) => {
  return (
    <div className="email-selector">
      <input
        type="email"
        value={bookingEmail}
        onChange={handleEmailChange}
        className="w-full px-4 py-2 border rounded-md text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#BEE702] mb-2"
      />
    </div>
  );
};

const PhoneBooking = ({ bookingPhone, handlePhoneChange }) => {
  return (
    <div className="phone-selector">
      <input
        type="number"
        value={bookingPhone}
        onChange={handlePhoneChange}
        className="w-full px-4 py-2 border rounded-md text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#BEE702] mb-2"
      />
    </div>
  );
};

const BookingPage = () => {
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [duration, setDuration] = useState(1);
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");

  const handleDateChange = (e) => {
    setBookingDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setBookingTime(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const calculateEndTime = (date, time, duration) => {
    const [hours, minutes] = time.split(":").map(Number);
    const endTime = new Date(date);
    endTime.setHours(hours + parseInt(duration), minutes);
    return endTime.toTimeString().slice(0, 5);
  };

  const handleNameChange = (e) => {
    setBookingName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setBookingEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setBookingPhone(e.target.value);
  };

  return (
    <div className="w-screen h-screen relative flex items-center justify-center pt-[70px]">
      <div className="w-screen h-[90%] mx-[50px] flex flex-row gap-[50px]">
        <div className="left w-[60%] h-full bg-white/10 rounded-lg backdrop-blur-md shadow-md border border-white/30 px-[30px] pt-[30px] pb-[20px] flex flex-row">
          <div className="arrw pt-[10px]">
            <WhiteArrow href="/detail-sewa"/>
          </div>
          <div className="ml-[40px]">
            <div className="head h-[80px] w-full text-[34px] text-[#BEE702]">
              <h1>Booking</h1>
            </div>
            <div className="body flex flex-col justify-between">
              <div className="date">
                <div className="text-[24px]">
                  <h1>Select Date</h1>
                </div>
                <div>
                  <DateSelector
                    bookingDate={bookingDate}
                    handleDateChange={handleDateChange}
                  />
                </div>
              </div>

              <div className="time">
                <div className="text-[24px]">
                  <h1>Select Time</h1>
                </div>
                <div>
                  <TimeSelector
                    bookingTime={bookingTime}
                    handleTimeChange={handleTimeChange}
                    duration={duration}
                    handleDurationChange={handleDurationChange}
                  />
                </div>
              </div>

              <div className="name">
                <div className="text-[24px]">
                  <h1>Orderer Name</h1>
                </div>
                <NameBooking
                  bookingName={bookingName}
                  handleNameChange={handleNameChange}
                />
              </div>

              <div className="email">
                <div className="text-[24px]">
                  <h1>Ordered Email</h1>
                </div>
                <EmailBooking
                  bookingEmail={bookingEmail}
                  handleEmailChange={handleEmailChange}
                />
                <div></div>
              </div>
              <div className="phone">
                <div className="text-[24px]">
                  <h1>Phone Number</h1>
                </div>
                <PhoneBooking
                  bookingPhone={bookingPhone}
                  handlePhoneChange={handlePhoneChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="right w-[40%] h-full flex flex-col gap-[50px] ">
          <div className="top w-full h-[70%] bg-white/10 rounded-lg backdrop-blur-md shadow-md border border-white/30 px-[20px] py-[30px]">
            <div className="head h-[80px] w-full text-[30px] text-[#BEE702]">
              <h1>Booking Details</h1>
            </div>
            <div>
              <div className="summary">
                {bookingDate && (
                  <p className="text-[#F5F5F5]">
                    <span>Selected Date:</span> {bookingDate} <br />
                  </p>
                )}
                {bookingTime && (
                  <p className="text-[#F5F5F5]">
                    <span>Start Time:</span> {bookingTime} <br />
                    <span>Duration:</span> {duration} hour(s) <br />
                    <span>End Time:</span>{" "}
                    {calculateEndTime(bookingDate, bookingTime, duration)}{" "}
                    <br />
                  </p>
                )}
                {bookingName && (
                  <p className="text-[#F5F5F5]">
                    <span>Orderer Name:</span> {bookingName} <br />
                  </p>
                )}
                {bookingEmail && (
                  <p className="text-[#F5F5F5]">
                    <span>Ordered Email:</span> {bookingEmail} <br />
                  </p>
                )}
                {bookingPhone && (
                  <p className="text-[#F5F5F5]">
                    <span>Phone Number:</span> {bookingPhone} <br />
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bttm w-full h-[30%] bg-white/10 rounded-lg backdrop-blur-md shadow-md border border-white/30 p-[20px] flex flex-col justify-between">
            <div className="head w-full text-[24px] text-[#F5F5F5]">
              <h1>Total Amount</h1>
            </div>
            <div className="body">
              <p className="text-[#BEE702] text-[20px]">Rp. 100.000</p>
            </div>
            <div className="bttn">
              <button className="w-full h-[40px] bg-[#BEE702] text-[#141414] rounded-md">
                Proceed to Payment{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
