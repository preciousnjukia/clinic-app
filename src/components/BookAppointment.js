import React, { useState } from "react";
import './BookingAppointment.css';

function BookingAppointment() {
  const [appointmentData, setAppointmentData] = useState({
    fullName: "",
    email: "",
    appointmentDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value,
    });
};

const handleSubmit = (event) => {
  event.preventDefault();

  const { fullName, email, appointmentDate } = appointmentData;

  const appointment = {
    fullName,
    email,
    appointmentDate,
  };

  fetch("/src/appointments.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appointment),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
        alert("Appointment booked successfully!");
    })
    .catch((error) => {
      console.error("Error booking appointment:", error);
      alert("Failed to book the appointment. Please try again later.");
    });
};

return (
  <div>
    <h2>Book Appointment</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={appointmentData.fullName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={appointmentData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Appointment Date:</label>
        <input
          type="date"
          name="appointmentDate"
          value={appointmentData.appointmentDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  </div>
);
}

export default BookingAppointment;


