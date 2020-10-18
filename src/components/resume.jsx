import React from "react";
import { Link } from "react-router-dom";
import ProfileSection from "./profileSecion";

const Resume = () => {
  return (
    <div className="resume text-left m-2 row">
      <div className="resumeProfileSection col-12">
        <ProfileSection />
      </div>
      <div className="col-lg-8">
        <h1 id="resumeHeading" className="col-12 ml-2 ">
          Resume
        </h1>
        <span id="resumeDotsSpec" className="dotsEffect"></span>
        <div className="col-12 mt-4 mb-4">
          <h3>Profile</h3>
          <span id="profileDots" className="dotsEffect"></span>
          <p className="text-justify border rounded p-2">
            Proficient in JavaScript, HTML and CSS plus modern libraries and
            frameworks such as React and Redux. Passionate about UI & UX
            design.A quick learner with a strong work ethic who has an eye for
            the detail and works well in a team setting. Implementing web design
            and development principles to build stable software. Building
            websites and apps that are responsive and usable. Identifying
            innovative ideas and proof of concepts according to project
            requirements. Providing guidance and troubleshooting support to
            clients. Maintaining an organized workflow using a project
            management tool (such as Git version control). Documenting and
            reporting any code changes.
          </p>
        </div>
        <div className="col-12 employmentHistory">
          <h3>Employment history</h3>
          <span id="employmentHistoryDotsSpec" className="dotsEffect"></span>
          <h5 className="text-blue mt-4">
            Front-end web developer,{" "}
            <span className="text-secondColor">Freelancer</span>
          </h5>
          <h6>July 2019 - present</h6>
          <hr className="bg-blue" />
          <p className="mt-2">
            Most significant projects of mine are: <br />
            <br />- See more{" "}
            <Link to="/portfolio" className="text-blue">
              here
            </Link>{" "}
            <br />- Docs system for discharging patients from hospital. - {""}
            <a
              href="https://master.d52g4t92p4xkb.amplifyapp.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue"
            >
              https://master.d52g4t92p4xkb.amplifyapp.com/
            </a>{" "}
            <br />- Design website for takeaway food restaurant and develop web
            application for daily meal menu. The menu is extracted to CSV file
            and then can be uploaded and automatically loaded on the website -{" "}
            <a
              href="http://food.sofimarten.com"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue"
            >
              http://food.sofimarten.com
            </a>{" "}
            <br />- Farm Game build with JavaScript - {""}
            <a
              href="http://farmersbusiness.iliyanyordanov.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue"
            >
              http://farmersbusiness.iliyanyordanov.com/
            </a>{" "}
          </p>
          <hr className="bg-blue" />
        </div>

        <div className="education col-12 mt-4 mb-4">
          <h3>Education</h3>
          <h5>GCE advanced subsidiary (AS level)/Scottish higher/</h5>
          <h6>2012, Sofia, Bulgaria</h6>
          <hr className="bg-blue" />
        </div>
        <div className="courses col-12 mt-4 mb-4">
          <h3>Courses:</h3>

          <h5 className="mt-4">
            The Ultimate Redux -{" "}
            <span className="text-blue">codewithmosh.com</span>
          </h5>
          <p>Sep, 2020</p>

          <h5 className="mt-4">
            Mastering React -{" "}
            <span className="text-blue">codewithmosh.com</span>
          </h5>
          <p>Aug, 2020</p>

          <h5 className="mt-4">
            The Ultimate JavaScript Mastery Series -{" "}
            <span className="text-blue">codewithmosh.com</span>
          </h5>
          <p>Aug, 2020</p>

          <h5 className="mt-4">
            Front-End HTML and CSS -{" "}
            <span className="text-blue">BULITFACTORY</span>
          </h5>
          <p>Oct, 2016</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card w-100 mt-4 mb-4" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://" alt="profile" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text</p>
          </div>
        </div>
        <div className="card w-100 mt-4 mb-4" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://" alt="profile" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text</p>
          </div>
        </div>
        <div className="card w-100 mt-4 mb-4" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://" alt="profile" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text</p>
          </div>
        </div>
        <div className="card w-100 mt-4 mb-4" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://" alt="profile" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
