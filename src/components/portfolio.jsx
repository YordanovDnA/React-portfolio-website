import React from "react";
import ReactImageAppear from "react-image-appear";
import { portfolio } from "./../data/portfolio";

const Portfilio = (props) => {
  return (
    <div className="col-12 row">
      <h1 className="col-12">Portfolio</h1>
      {portfolio.map((project) => {
        return (
          <div key={project.id} className="col-xl-6 col-12 text-left mt-4">
            <ReactImageAppear
              onClick={() => props.history.push(`/project/${project.id}`)}
              className="portfolioThumbnails rounded bordered w-100"
              src={project.photos.thumbnail}
              placeholderClass="rounded ReactImageAppearPlaceholder"
            />
            <h4 className="mt-4">{project.info.name}</h4>
          </div>
        );
      })}
      <div className="col-12 alert alert-info" role="alert">
        <strong>Note:</strong> These are not my only projects. More will be
        added soon!
      </div>
    </div>
  );
};

export default Portfilio;
