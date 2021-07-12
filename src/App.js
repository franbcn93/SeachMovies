import React, { Fragment, useState, useEffect } from "react";
import { Datos } from "./components/Datos";
import { Form } from "./components/Form";
import { myKey } from "./components/Other";
import { Error } from "./components/Error";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [datos, guardarDatos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      if (busqueda === "") return;

      const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${busqueda}&api-key=${myKey}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      console.log(resultado);
      console.log(resultado.results);

      if (resultado.results == null) {
        setError(true);
        return;
      }

      setError(false);

      guardarDatos(resultado.results);
    };
    consultarAPI();
  }, [busqueda]);

  return (
    <Fragment>
      <div className="MyApp">
        <h1 className="padding">Movie Reviews API</h1>
        <h4 className="padding">
          Search New York Times movie reviews by keyword and opening date and
          filter by Critics' Picks.
        </h4>
        <p className="padding">
          Get movie reviews with specific word in the title:
        </p>
        <Form guardarBusqueda={guardarBusqueda} />
        {error ? (
          <Error mensaje="No se ha encontrado ninguna relación en la búsqueda. Busca por otro contenido" />
        ) : (
          <Datos datos={datos} />
        )}
        {/* <Datos datos={datos} /> */}
      </div>
    </Fragment>
  );
}

export default App;
