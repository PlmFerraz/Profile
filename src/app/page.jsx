"use client";

import { userMock } from "@/mocks/user-mock";
import Avatar from "./components/avatar";
import CustomButton from "./components/custombutton";
import JobDescription from "./components/jobdescription";
import UserLocation from "./components/userlocation";
import Username from "./components/username";

export default function Profile() {
  const alt = "image of a person";
  const {
    userName,
    location,
    jobDescription,
    urlGitHub,
    urlInstagram,
    urlLinkedin,
    urlAvatar,
  } = userMock;

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <section className="flex flex-col items-center justify-around bg-[#1F1F1F] p-[35px] rounded-lg  h-[80%] w-[25%]">
        <div className="flex flex-col items-center justify-center">
          <Avatar src={urlAvatar} alt={alt} />
          <Username name={userName} />
          <UserLocation>{location}</UserLocation>
          <JobDescription>{jobDescription}</JobDescription>
        </div>
        <div className="w-full mb-[100px] flex flex-col gap-[20px]">
          <CustomButton url={urlInstagram} iconName="instagram">
            {"Instagram"}
          </CustomButton>
          <CustomButton url={urlLinkedin} iconName="linkedin">
            {"Linkedin"}
          </CustomButton>
          <CustomButton url={urlGitHub} iconName="github">
            {"GitHub"}
          </CustomButton>
        </div>
      </section>
    </main>
  );
}
