import React, { useState, useEffect } from "react";
import './BookAppointment.css'

function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/src/consultation.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Book Appointment</h2>
      <div>
        <h3>Available Doctors</h3>
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              <strong>{doctor.name}</strong> ({doctor.specialty})
              <br />
              Availability: {doctor.availability}
              <br />
              Location: {doctor.location}
              <br />
              Consultation Fee: {doctor.consultationFee}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BookAppointment;


