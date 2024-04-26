import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC<{}> = () => {
  return (
    <footer className="text-white py-4 bottom-0 pb-8 left-0 w-full z-50">
      <div className="container mx-auto flex justify-center mb-5">
        <a href="https://github.com/bl33dz" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
        </a>
        <a
          href="https://linkedin.com/in/bagasmukti"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl mx-2" />
        </a>
        <a
          href="https://instagram.com/b666z_"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2" />
        </a>
      </div>
      <div className="container mx-auto flex justify-center">
        <p className="text-sm">
          Created with ❤️ by{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-lime-500 to-green-400">
            Bagaz
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
