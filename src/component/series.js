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

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  };

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

  const setAllDataAnime = async (serie) => {
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
            <button
              onClick={() => setAllDataAnime(series)}
              className="bg-[#251D53] text-white text-[.7rem] p-[.4rem] rounded-md hover:bg-[#948ACD] ml-[10px]"
            >
              Recolectar data
            </button>
          </h2>
          <div className="bg-white w-full h-[34rem]">
            <div className="h-[9rem] relative">
              <img
                src={data[series].url}
                alt={series}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="text-[.7rem] p-[5px] flex flex-col items-center">
              <table>
                <tr>
                  <td className="text-right">Year:</td>
                  {data[series].year ? (
                    <td className="pl-[7px]">{data[series].year}</td>
                  ) : null}
                </tr>
                <tr>
                  <td className="text-right">Duratión:</td>
                  {data[series].duration ? (
                    <td className="pl-[7px]">{data[series].duration}</td>
                  ) : null}
                </tr>
                <tr>
                  <td className="text-right">Episodes</td>
                  {data[series].episodes ? (
                    <td className="pl-[7px]">{data[series].episodes}</td>
                  ) : null}
                </tr>
                <tr>
                  <td className="text-right">Score:</td>
                  {data[series].score ? (
                    <td className="pl-[7px]"> {data[series].score}</td>
                  ) : null}
                </tr>
              </table>

              {data[series].synopsis ? (
                <p className="hidden">Synopsis: {data[series].synopsis}</p>
              ) : null}
              <div style={gridStyle}>
                {data[series] && data[series].genres_real
                  ? data[series].genres_real.map((x, index) => {
                      return (
                        <p
                          key={index}
                          className="p-[5px] bg-blue-700 text-white"
                        >
                          {x.name}
                        </p>
                      );
                    })
                  : null}
              </div>
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
                <p>No data</p>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeriesList;
