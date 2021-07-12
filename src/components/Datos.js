import React, { Fragment } from "react";
import { Card } from "./Card";

export const Datos = ({ datos }) => {
  return (
    <div className="col-12 p-5 row">
      {datos.map((dato) => (
        <Fragment>
          <Card key={dato.date_updated} dato={dato} />
        </Fragment>
      ))}
    </div>
  );
};
