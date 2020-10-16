import React from "react";
import ReactImageAppear from "react-image-appear";
import IliyanYordnaov from "../imgs/profile/IliyanYordanov.jpg";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileSection = () => {
  return (
    <div className="profileSection">
      <div className="profileImgWrapper">
        <ReactImageAppear className="profileImg" src={IliyanYordnaov} />
        <span id="profileImgDots" className="dotsEffect"></span>
      </div>
      <h1 className="text-center mt-3">Iliyan Yordanov</h1>
      <h6 className="text-center text-secondColor">Front end developer</h6>
      <div className="col-12 mt-4 d-flex justify-content-center">
        <a
          rel="noopener noreferrer"
          href="https://www.facebook.com/MR.ILIYAN.YORDANOV/"
          target="_blank"
        >
          <FontAwesomeIcon className="socialMediaIcons" icon={faFacebook} />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/iliyan-yordanov-957992171/"
          target="_blank"
        >
          <FontAwesomeIcon className="socialMediaIcons" icon={faLinkedin} />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/YordanovDnA"
          target="_blank"
        >
          <FontAwesomeIcon className="socialMediaIcons" icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default ProfileSection;
