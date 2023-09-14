import React from "react";
import DoctorProfile from './DoctorProfile';


function DoctorsSection({ doctors }){
    return (
        <div className="top-rated-doctors">
            <h2>Top Rated Doctors Near You</h2>
            <div className="doctor-list">
                {doctors.map((doctor, index) => (
                    <DoctorProfile key={index} doctor={doctor} />
                ))}
            </div>
            <div className="pagination">
                <button>&lt; Next Page</button>
                <button>View All</button>
            </div>
        </div>
    );
}

export default DoctorsSection;
