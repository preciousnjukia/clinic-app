import React, { useState, useEffect} from 'react';
import './DoctorsSection.css';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Deepak Kumar Gupta',
    specialization: 'Ophthalmologist',
    hospital: 'Lions Sightfirst Eye Hospital',
    contact: 'https://www.facebook.com/LionsEyeHospitalLoresho/posts/dr-deepak-kumar-gupta-consultant-ophthalmic-surgeon-specializing-in-lasik-femto-/1623514191166158/',
    image: '/doctors.image/163304472_1623514151166162_864423064070291049_n.jpg',
  },
  {
    id: 2,
    name: 'Dr. Branice Munyasa',
    specialization: 'Dental Surgeon',
    hospital: 'Nextcare Dental Studio',
    contact: 'https://nextcaredentalstudio.co.ke/team-member/dr-branice-munyasa/',
    image: '/doctors.image/1nYrgJjT_400x400.jpg',
  },
  {
    id: 3,
    name: 'Dr. Charlotte Nyambura M',
    specialization: 'Medical Officer',
    hospital: 'The Nairobi Hospital',
    contact: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjTgpCFr6qBAxUOh_0HHYqEBE8QFnoECBYQAQ&url=https%3A%2F%2Fke.linkedin.com%2Fin%2Fdr-charlotte-nyambura-matimu-4098a712b&usg=AOvVaw0U_78dX9j3lQ16ui99LEAp&opi=89978449',
    image: '/doctors.image/1620156066570.jpeg',
  },
  {
    id: 4,
    name: 'Dr. Peter Ogutu',
    specialization: 'Cardiothoracic Surgeon',
    hospital: 'The Agha Khan University Hospital',
    contact: 'https://africainfoline.com/listing/doctors/cardiac-surgeon/nairobi/dr-peter-ogutu-cardiothoracic-surgery-nairobi/',
    image: '/doctors.image/Peter-o.jpeg',
  },
];

const backgroundImages = [
  'public/doctors.image/doctor-medical-background-24834402.webp',
  'public/doctors.image/stethoscope-and-smartphone-on-blue-background-app-health-smartphone-mockup-get-an-online-consultation-from-doctor-by-smartphone-doctor-online-consultation-concept-3d-rendering-free-photo.jpg',
  'public/doctors.image/v870-tang-36_1.jpg',
];

const DoctorsSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 12000);
    
    return () => clearInterval(interval);
  }, []);

  const currentBackground = backgroundImages[backgroundIndex];


  return (
    <div className="doctors-section" style={{ backgroundImage: `url(${currentBackground})` }}>
      <h2>Top Rated Doctors Near You</h2>
      <div className="doctors-container">
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className="doctor-profile">
            <img src={doctor.image} alt={doctor.name} />
            <h3>
            <a href={doctor.contact} target="_blank" rel="noopener noreferrer">
            {doctor.name}
            </a>
            </h3>
            <p>{doctor.specialization}</p>
            <p>{doctor.hospital}</p>
            <a href={doctor.contact} target="_blank" rel="noopener noreferrer">
            <button>Consult Now</button>
            </a>
          </div>
        ))}
      </div>
      <div className="view-all-button">
        <a href="https://yellow.co.ke/index.php/categories/doctors-hospitals-clinics/?page=22">View All</a>
      </div>
    </div>
  );
};

export default DoctorsSection;
