import React from "react";
import Card from "./card";
import SearchBox from "../component/searchBox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SeriesList = ({
  series,
  newSerieChange,
  buttonAgregar,
  recolectDataAgain,
  onSearch,
  onDelete,
}) => {
  return (
    <div
      className="grid m-2 gap-3"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))" }}
    >
      <div className="border-[#2E3690] border-[.09rem] rounded-md">
        <h2 className="font-bold bg-[#474E9F] text-white text-[.7rem] p-[.4rem] flex justify-between">
          {/* <input
            type="text"
            onChange={newSerieChange}
            className="border border-black"
          /> */}
          <SearchBox searchChange={onSearch} />
          {Object.keys(series).length === 0 && (
            <button
              onClick={buttonAgregar}
              className="bg-[#676DB7] text-white text-[.7rem] w-[1.4rem] rounded-md hover:bg-[#979BD5]"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          )}
        </h2>
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
            genres={series[serie].genres}
            onDeleteSerie={onDelete}
          ></Card>
        ))}
    </div>
  );
};

export default SeriesList;
