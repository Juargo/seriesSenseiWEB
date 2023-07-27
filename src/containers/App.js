import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "../component/searchBox";
import Scroll from "../component/scroll";
import SeriesList from "../component/seriesList";
// import SeriesList from "./component/series";

function App() {
  useEffect(() => {
    getSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [series, setSeries] = useState([]);
  const [searchfield, setSearchField] = useState([]);
  const [newSerie, setNewSerie] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getSeries = () => {
    // fetch("http://127.0.0.1:5000/series/getall")
    fetch("https://seriessenseiapi.onrender.com/series/getall")
      .then((response) => response.json())
      .then((series) => setSeries(series));
  };
  const listOfSeries = Object.keys(series);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleInputChange = (event) => {
    setNewSerie(event.target.value);
  };

  const handleButtonClick = () => {
    setAllDataAnime(newSerie);
    setNewSerie(""); // reset input
  };

  const setAllDataAnime = async (serie) => {
    setIsLoading(true);
    try {
      const respuesta = await fetch(
        `https://seriessenseiapi.onrender.com/series/set_all_data_anime?serie=${serie}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const datos = await respuesta.json().then(() => setIsLoading(false));

      // Ahora puedes usar los datos
      getSeries();
    } catch (error) {
      console.error("Hubo un problema con la petición Fetch:", error);
    }
  };

  return (
    <div className="m-2">
      <h1 className="text-[1.5rem] font-bold text-center uppercase text-[#A46314]">
        Series Sensei
      </h1>
      {!listOfSeries.length > 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            {isLoading && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 9999, // Asegúrate de que este número sea lo suficientemente alto para superar el resto de tu contenido
                }}
              >
                <div>Cargando...</div>
              </div>
            )}
            <SeriesList
              series={series}
              newSerieChange={handleInputChange}
              buttonAgregar={handleButtonClick}
              recolectDataAgain={setAllDataAnime}
            ></SeriesList>
          </Scroll>
        </>
      )}
    </div>
  );
}

export default App;
