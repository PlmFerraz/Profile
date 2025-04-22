"use client";

import Avatar from "./components/avatar";
import CustomButton from "./components/custombutton";
import JobDescription from "./components/jobdescription";
import UserLocation from "./components/userlocation";
import Username from "./components/username";

export default function Profile() {
  const url = "https://thispersondoesnotexist.com/";
  const alt = "image of a person";
  const location = "São Paulo, Brazil";
  const jobDescription = "Software Engineer at Rocketseat";
  const buttonText = "Follow";
  const username = "Paloma";

  return (
    <main>
      <section className="flex-col items-center justify-center">
        <Avatar src={url} alt={alt} />
        <Username name={username} />
        <UserLocation>{location}</UserLocation>
        <JobDescription>{jobDescription}</JobDescription>
      </section>
      <CustomButton>{buttonText}</CustomButton>
    </main>
  );
}
