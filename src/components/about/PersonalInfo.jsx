import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Rohit" },
  { meta: "last name", metaInfo: "Khokhar" },
  { meta: "Age", metaInfo: "22 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Surat" },
  { meta: "phone", metaInfo: "+91 70418 52770" },
  { meta: "Email", metaInfo: "rohitkhokharrk12@gmail.com" },
  { meta: "Skype", metaInfo: "rohit.khokhar" },
  { meta: "languages", metaInfo: "English, Hindi, Gujarati" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
