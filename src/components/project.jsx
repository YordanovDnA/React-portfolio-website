import React from "react";
import { portfolio } from "./../data/portfolio";

const Project = (props) => {
  const id = parseInt(props.match.params.id);
  const project = portfolio.find((project) => project.id === id);
  return (
    <div className="project col-12 row text-left">
      <h1 className="col-12">{project.info.name}</h1>
      <div className="col-lg-8 col-12 ">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active bg-dark rounded"
            ></li>
            <li
              className="bg-dark rounded"
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
            ></li>
            <li
              className="bg-dark rounded"
              data-target="#carouselExampleIndicators"
              data-slide-to="2"
            ></li>
          </ol>
          <div className="carousel-inner">
            {project.photos.list.map((photo) => {
              return (
                <div
                  key={photo}
                  className={`carousel-item ${
                    photo === project.photos.list[0] && "active"
                  }`}
                >
                  <img
                    className="d-block w-100"
                    src={photo}
                    alt="Second slide"
                  />
                </div>
              );
            })}
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark rounded"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark rounded"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="col-lg-4 col-12 ">
        <h5 className=" mt-2 mb-4">Description:</h5>
        <div className="mt-2">
          <span className="lnr lnr-user text-blue mr-2 "></span>
          {project.info.client}
        </div>
        <div className="mt-2">
          <span className="lnr lnr-link text-blue  mr-2 "></span>
          <a className="text-blue" href={project.info.url} target="_blank">
            Visit
          </a>{" "}
        </div>
        <div className="mt-2">
          <span class="lnr lnr-calendar-full text-blue mr-2"></span>
          {project.info.dateCompleted}
        </div>
        <p className="mt-2 mb-4">{project.info.description}</p>
        <hr className="bg-blue" />
        <h6>Technology:</h6>
        <div>
          {project.info.technology.map((item) => {
            return <span className="badge badge-warning mr-2">{item}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
