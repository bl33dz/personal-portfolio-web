import React from "react";

const Banner: React.FC<{}> = () => {
  return (
    <div className="text-white text-center mt-40 mb-20 flex flex-col justify-center items-center">
      <img
        src="https://i.pinimg.com/736x/8c/d8/20/8cd8205810b9ab38534ff8248897018f.jpg"
        alt="Image"
        className="rounded-full h-80 w-80 object-cover mb-5"
      />
      <h3 className="text-4xl font-bold mb-3">
        Hi! I'm{" "}
        <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-green-500 to-lime-400">
          Bagaz
        </span>{" "}
        &#127807;
      </h3>
      <p className="text-2xl font-medium">
        University Student and Backend Engineer
      </p>
      <a href="mailto:bagaz@protonmail.ch">
        <button className="border-[0.1px] border-white hover:bg-white hover:text-black px-4 py-2 mt-4 rounded-full">
          GET IN TOUCH
        </button>
      </a>
    </div>
  );
};

export default Banner;
