import React, { useState } from "react";

export const Card = ({ dato }) => {
  const { display_title, summary_short, multimedia } = dato;

  const [imagen, setImagen] = useState(false);

  console.log(multimedia);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
      <div className="card border-dark">
        <p className="card-header">
          <b>Title film: </b> <h4>{display_title}</h4>
        </p>
        <div className="card-body">
          <p className="card-text">
            <b>Summary: </b> <p>{summary_short}</p>
          </p>
        </div>
      </div>
    </div>
  );
};
