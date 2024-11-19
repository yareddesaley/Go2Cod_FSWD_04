import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
const Footer = () => {
  return (
    <div className=" bg-gray-200">
      <hr className="w-full border-t-2 border-green-500 mt-10 " />
      <div className="flex flex-col gap-10 lg:flex md:flex-row justify-center lg:gap-72 pt-3 pb-20 lg:ml-20 items-center ">
        <div className="flex flex-col  items-center">
          <div className="flex gap-5 mt-10">
            <a
              href="https://www.linkedin.com/in/yared-desaley-gebreslassie?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_applinkedin.com/in/yared-desaley-gebreslassie/"
              target="_blank"
            >
              {" "}
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/yareddesaley?tab=repositories"
              target="_blank"
            >
              <GitHubIcon />
            </a>
            <a href="https://x.com/yaduyared1" target="_blank">
              <XIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center ">
          <label htmlFor="email">Send me an Email : </label>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter an email"
              id="email"
              className="outline-none px-3 py-3 rounded-l-xl w-full"
            />
            <button className="bg-green-500 px-4 text-white rounded-r-xl">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
