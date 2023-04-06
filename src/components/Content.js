import React from "react";
import Cards from "./Cards";
import Charts from "./Charts";
import Projects from "./Projects";
import Color from "./Color";
import Illustrations from "./Illustrations";
import Approach from "./Approach";

const Content = ({ projects, illustations }) => {
  return (
    <div className="container-fluid">
      {/*  Page Heading  */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <Cards />
      <Charts />
      <div className="row">
        <div className="col-lg-6 mb-4">
          <Projects projects={projects} />
          <Color />
        </div>
        <div className="col-lg-6 mb-4">
          <Illustrations illustations={illustations} />
          <Approach />
        </div>
      </div>
    </div>
  );
};

export default Content;
