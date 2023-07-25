import React, { useEffect, useState } from "react";
import ProgressBar from "./progressBar";

const SeriesList = () => {
  const [data, setData] = useState([]);

  const getSeries = () => {
    // fetch("http://127.0.0.1:5000/series/getall")
    fetch("https://seriessenseiapi.onrender.com/series/getall")
      .then((response) => response.json())
      .then((series) => setData(series));
  };

  useEffect(() => {
    getSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDataChatGPT = async (serie) => {
    try {
      const respuesta = await fetch(
        `http://127.0.0.1:5000/series/get-chatgpt-data?anime=${serie}`
      );
      const datos = await respuesta.json();

      // Ahora puedes usar los datos
      getSeries();
    } catch (error) {
      console.error("Hubo un problema con la petición Fetch:", error);
    }
  };

  return (
    <div
      className="grid m-2 gap-3"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))" }}
    >
      {Object.keys(data).map((series) => (
        <div key={series} className=" b-gray-400 border-[.09rem] rounded-md">
          <h2 className="font-bold bg-[#554A91] text-white text-[.7rem] p-[.4rem]">
            {series}
          </h2>
          <div className="bg-white w-full h-[31rem]">
            <div className="h-[9rem] relative">
              <img
                src={data[series].url}
                alt={series}
                className="w-full h-full object-fill"
              />
            </div>
            <div>
              {data[series].duration ? (
                <p>Duración: {data[series].duration}</p>
              ) : null}
              {data[series].episodes ? (
                <p>Episodios: {data[series].episodes}</p>
              ) : null}
              {data[series].score ? <p>Score: {data[series].score}</p> : null}
              {data[series].synopsis ? (
                <p className="hidden">Synopsis: {data[series].synopsis}</p>
              ) : null}
              {data[series].genres ? (
                <pre> {data[series].genres.map((x) => x.name)}</pre>
              ) : null}
            </div>
            <ul className="p-[.4rem]">
              {data[series].genres ? (
                Object.keys(data[series].genres).map((genre) => (
                  <li
                    key={genre}
                    className="text-[.7rem] flex w-[15em] justify-around"
                  >
                    <span className="w-[13em] text-end"> {genre}: </span>
                    <ProgressBar percentage={data[series].genres[genre]} />
                  </li>
                ))
              ) : (
                <button
                  onClick={() => getDataChatGPT(series)}
                  className="bg-[#251D53] text-white text-[.7rem] p-[.4rem] rounded-md hover:bg-[#948ACD]"
                >
                  Recolectar data
                </button>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeriesList;
