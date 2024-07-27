import React from "react";

const experienceContent = [
  {
    year: "   2021 july - present",
    position: " Frontend Developer",
    compnayName: "Ultimate Business System (UBS)",
    details: `  Full Time Frontend Developer`,
  },
  {
    year: "   2021 (April - june)",
    position: " Web Developer",
    compnayName: "Artoon Solutions",
    details: `  Three months of Training In Web Development`,
  },
  {
    year: "November 2020 - March 2021",
    position: " Web Designer",
    compnayName: "Aisect",
    details: `Six Months Training Of Web Design`,
  },
  {
    year: "2018 - 2021",
    position: "bachelor degree",
    compnayName: "VNSGU",
    details: `Bachelor of Computer Application`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
