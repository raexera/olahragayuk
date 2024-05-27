'use client';

import React, { useState } from 'react';
import WhiteArrow from '../../assets/white-arrow';
import "../../globals.css";

// const DateBooking = () => {
//   const [bookingDate, setBookingDate] = useState('');

//   const handleDateChange = (e) => {
//     setBookingDate(e.target.value);
//   };

//   return (
//     <div>
//       <div className="p-3 bg-[#F5F5F5] rounded shadow-md">
//         <input
//           type="date"
//           value={bookingDate}
//           onChange={handleDateChange}
//           className="w-full px-2 py-2 border rounded-md text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#BEE702]"
//         />
//       </div>
//       <div>
//         {bookingDate && (
//           <p className="mt-2 text-[#BEE702]">
//             Selected Date: {new Date(bookingDate).toLocaleDateString()}
//           </p>
//         )}
//       </div>
//     </div>
    
//   )
// }

// const TimeBooking = () => {
//   const [bookingTime, setBookingTime] = useState('');

//   const handleTimeChange = (e) => {
//     setBookingTime(e.target.value);
//   };

//   return (
//     <div>
//       <div className="p-3 bg-[#F5F5F5] rounded shadow-md">
//       <input
//           type="time"
//           value={bookingTime}
//           onChange={handleTimeChange}
//           className="w-full px-2 py-2 border rounded-md text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#BEE702]"
//         />
//       </div>
//       <div>
//         {bookingTime && (
//           <p className="mt-2 text-[#BEE702]">
//             Selected Time: {bookingTime}
//           </p>
//         )}
//       </div>
//     </div>
    
//   )
// }

const DateSelector = ({ bookingDate, handleDateChange }) => {
  return (
    <div className="date-selector">
      <input
        type="date"
        value={bookingDate}
        onChange={handleDateChange}
        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
    </div>
  );
};

const TimeSelector = ({ bookingTime, handleTimeChange, duration, handleDurationChange }) => {
  return (
    <div className="time-selector">
      <input
        type="time"
        value={bookingTime}
        onChange={handleTimeChange}
        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <div className='text-[24px]'>
        <h1>Select Duration</h1>
      </div>
      <select
        value={duration}
        onChange={handleDurationChange}
        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      >
        {[...Array(24)].map((_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1} hour{ i + 1 > 1 ? 's' : ''}</option>
        ))}
      </select>
    </div>
  );
};



const BookingPage = () => {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [duration, setDuration] = useState(1);

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
    const [hours, minutes] = time.split(':').map(Number);
    const endTime = new Date(date);
    endTime.setHours(hours + parseInt(duration), minutes);
    return endTime.toTimeString().slice(0, 5);
  };

  return (
    <div className="w-screen h-screen relative flex items-center justify-center">
      <div className="w-screen h-[90%] mx-[50px] flex flex-row gap-[50px]">
        <div className="left w-[60%] h-full bg-white/10 rounded-lg backdrop-blur-md shadow-md border border-white/30 px-[30px] py-[30px] flex flex-row">
          <div className="arrw pt-[10px]"><WhiteArrow /></div>
          <div className="ml-[40px]">
            <div className="head h-[80px] w-full text-[34px] text-[#BEE702]">
                <h1>Booking</h1>
            </div>
            <div className="body">
              <div className="date">
                <div className='text-[24px]'>
                  <h1>Select Date</h1>
                </div>
                <div>
                  <DateSelector bookingDate={bookingDate} handleDateChange={handleDateChange} />
                </div>
              </div>

              <div className="time">
                <div className='text-[24px]'>
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

              <div className="name mb-[15px]">
                <div className='text-[24px]'>
                  <h1>Orderer Name</h1>
                </div>
                <input type="text" class="w-full px-3 py-2 rounded-md border border-[#141414] focus:outline-none focus:ring-1 focus:ring-[#BEE702] text-[#141414]">
                </input>
              </div>

              <div className="email">
                <div className='text-[24px]'>
                  <h1>Ordered Email</h1>
                </div>
                <input type="email" class="w-full px-3 py-2 rounded-md border border-[#141414] focus:outline-none focus:ring-1 focus:ring-[#BEE702] text-[#141414]">
                </input>
                <div>

                </div>
              </div>
              <div className="phone">
                <div className='text-[24px]'>
                  <h1>Phone Number</h1>
                </div>
                <input type="number" class="appearance-none w-full px-3 py-2 rounded-md border border-[#141414] focus:outline-none focus:ring-1 focus:ring-[#BEE702] text-[#141414]">
                </input>
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
                {bookingDate && bookingTime && (
                  <p className="text-[#F5F5F5]">
                    <span>Selected Date:</span> {bookingDate} <br />
                    <span>Start Time:</span> {bookingTime} <br />
                    <span>Duration:</span> {duration} hour(s) <br />
                    <span>End Time:</span> {calculateEndTime(bookingDate, bookingTime, duration)}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="bttm w-full h-[30%] bg-white/10 rounded-lg backdrop-blur-md shadow-md border border-white/30">

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;