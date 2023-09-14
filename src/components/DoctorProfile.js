import React from "react";


function DoctorProfile({ doctor }) {
    const { name, photo, specialization, hospital, contactLink } = doctor;

    return (
        <div className="doctor-profile">
            <img src={photo} alt={"${name}'s profile"} />
            <h3><a href={contactLink}>{name}</a></h3>
            <p>Specialization: {specialization}</p>
            <p>Hospital: {hospital}</p>
            <button>Consult Now</button>
        </div>
    );
}


export default DoctorProfile;
