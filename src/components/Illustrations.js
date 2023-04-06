import React from "react";

const Illustrations = ({ illustations }) => {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
      </div>
      <div className="card-body">
        <div className="text-center">
          <img
            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
            style={{ width: "25rem" }}
            src="img/undraw_posting_photo.svg"
            alt="..."
          />
        </div>
        <p>{illustations}</p>
        <a target="_blank" rel="nofollow" href="https://undraw.co/">
          Browse Illustrations on unDraw &rarr;
        </a>
      </div>
    </div>
  );
};

export default Illustrations;
