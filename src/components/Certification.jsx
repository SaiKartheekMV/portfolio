import { useState, useEffect } from "react";
import "./Certification.css";

const certifications = [
  {
    title: "Mastering Python in 100 Days",
    description: "Covered the Basics to Advanced Concepts of Python",
    date: "September 2023",
  },
  {
    title: "1st Place in the TechKnow",
    description: "Won first place in TechKnow for innovative solutions.",
    date: "November 2023",
  },
  {
    title: "First Prize in Mechanical Lab",
    description: "Recognized for outstanding performance in practical applications.",
    date: "April 2024",
  },
];

const Certification = () => {
  const [showCertifications, setShowCertifications] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setShowCertifications(true); // Show certifications after delay
    }, 1500); // Adjust delay (e.g., 1.5 seconds)

    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <section id="certifications" data-aos="fade-up">
      {showCertifications && (
        <>
          <h2>Certifications & Awards</h2>
          <div className="certificationsContainer">
            {certifications.map((cert, index) => (
              <div key={index} className="certCard" data-aos="zoom-in">
                <h3 className="certTitle">{cert.title}</h3>
                <p className="certDate">{cert.date}</p>
                <p className="certDescription">{cert.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Certification;
