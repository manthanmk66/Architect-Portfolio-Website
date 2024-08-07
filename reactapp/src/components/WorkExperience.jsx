import React from "react";

const workExperienceData = [
  {
    position: "Site Engineer",
    company: "Design Inside",
    location: "Rajiv Nagar, Nagapur, Maharashtra, India",
    startDate: "01 August 2023",
    endDate: "Present",
    employmentType: "Full-Time",
  },
  {
    position: "Site Supervisor",
    company: "Aakruti Enterprises",
    location: "Lane no 5, Koregaon Park, Pune, Maharashtra",
    startDate: "17 January 2023",
    endDate: "17 July 2023",
    employmentType: "Full-Time",
  },
  {
    position: "Site Engineer",
    company: "Dream Home Construction",
    location:
      "Sawangi t-point near Bharat Petrol Pump, Sawangi (Meghe), Wardha, Maharashtra",
    startDate: "10 March 2021",
    endDate: "6 December 2022",
    employmentType: "Full-Time",
  },
];

export default function WorkExperience() {
  return (
    <div className="bg-richblack-800 flex items-center justify-center w-full h-screen">
      <div className="p-10 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-center text-white mb-12">
          Work Experience
        </h1>
        <ol className="relative border-l border-cyan-800">
          {workExperienceData.map((experience, index) => (
            <li key={index} className="mb-12 ml-8">
              <div className="absolute w-4 h-4 bg-cyan-800 rounded-full mt-1.5 -left-2 border border-white"></div>
              <time className="mb-2 text-lg font-normal leading-none text-gray-300">
                {`${experience.startDate} - ${experience.endDate}`}
              </time>
              <h3 className="text-xl font-semibold text-white">
                {experience.position}
              </h3>
              <p className="text-lg font-normal text-gray-300">
                {experience.company}
                <br />
                {experience.location}
              </p>
              <p className="text-md font-normal text-gray-400">
                {experience.employmentType}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
