import React from "react";

const About: React.FC<{}> = () => {
  return (
    <div className="text-white text-center pt-20 flex flex-col justify-center items-center" id="about">
      <div className="mx-auto max-w-[800px]">
        <h1 className="text-4xl font-semibold mb-5">ABOUT <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-green-500 to-lime-400">
          ME
        </span></h1>
        <p className="text-gray-300 text-center text-lg">
          As a university student and backend engineer, I have a passion for
          coding and solving problems. Currently, I'm learning Frontend Development and Artificial Intelligence to improve my skills and knowledge.
          <br />
          <br />
          I also learn cybersecurity skills, sometimes completing HackTheBox machines or participating in CTF competitions. I'm always open to new opportunities and challenges.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
