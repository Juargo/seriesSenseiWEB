import React from "react";
import Card from "./card";

const SeriesList = ({
  series,
  newSerieChange,
  buttonAgregar,
  recolectDataAgain,
}) => {
  return (
    <div
      className="grid m-2 gap-3"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))" }}
    >
      <div>
        <input
          type="text"
          onChange={newSerieChange}
          className="border border-black"
        />
        <button
          onClick={buttonAgregar}
          className="bg-[#251D53] text-white text-[.7rem] p-[.4rem] rounded-md hover:bg-[#948ACD] ml-[10px]"
        >
          Agregar
        </button>
      </div>

      {series &&
        Object.keys(series).length > 0 &&
        Object.keys(series).map((serie) => (
          <Card
            key={serie}
            clickRecolectData={recolectDataAgain}
            name={serie}
            url={series[serie].url}
            year={series[serie].year}
            duration={series[serie].duration}
            episodes={series[serie].episodes}
            score={series[serie].score}
            synopsis={series[serie].synopsis}
            genres_real={series[serie].genres_real}
            genre={series[serie].genre}
          ></Card>
        ))}
    </div>
  );
};

export default SeriesList;
