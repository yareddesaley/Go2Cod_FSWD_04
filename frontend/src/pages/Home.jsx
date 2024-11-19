import React from "react";
import Intro from "../components/Intro";
import IntroAboutMe from "../components/IntroAboutMe";
import IntroSkills from "../components/IntroSkills";
import MyProjects from "../components/MyProjects";
import FullStackProjects from "../components/FullStackProjects";
import Contacts from "../components/Contacts";

const Home = () => {
  return (
    <div onClick={window.scrollTo(0, 0)}>
      <Intro />
      <IntroAboutMe />
      <IntroSkills />
      <MyProjects />
      <FullStackProjects />
      <Contacts />
    </div>
  );
};

export default Home;
