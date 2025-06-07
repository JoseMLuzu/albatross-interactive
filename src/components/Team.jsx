import "../styles/components/Team.css";
import alecImage from "../../public/images/alecImage.jpg";
import sabaImage from "../../public/images/sabaImage.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Alec",
      title: "Founder",
      creativeDirector: "Creative Director",
      additionalInfo: [
        "Full-Time Firefighter",
        "Creative Generalist",
        "New York, U.S.",
      ],
      image: alecImage,
    },
    {
      name: "Saba",
      title: "Founder",
      technicalDirector: "Technical Director",
      additionalInfo: [
        "Senior Game Developer",
        "Unreal Engine Expert",
        "Poti, Georgia",
      ],
      image: sabaImage,
    },
  ];

  return (
    <section id="team" className="team-section">
      <h2>TEAM</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={member.image}
              alt={member.name}
              className="member-image"
            />
            <h3>{member.name}</h3>
            <p className="member-title">
              <b>{member.title}</b>
            </p>
            {member.creativeDirector && (
              <p className="member-subtitle">
                <b>{member.creativeDirector}</b>
              </p>
            )}
            {member.technicalDirector && (
              <p className="member-subtitle">
                <b>{member.technicalDirector}</b>
              </p>
            )}
            <hr className="member-separator" />
            <div className="member-additional-info">
              {member.additionalInfo.map((info, infoIndex) => (
                <p key={infoIndex}>{info}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
