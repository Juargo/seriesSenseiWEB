import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faStar } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "./progressBar";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
};

const Card = ({
  clickRecolectData,
  name,
  url,
  year,
  duration,
  episodes,
  score,
  synopsis,
  genres_real,
  genres,
}) => {
  return (
    <div className="border-[#2E3690] border-[1px] rounded-md">
      <header className="bg-[#474E9F] p-[.4rem] pb-[3px] ">
        <h2
          className="font-bold  text-white text-[.7rem] flex justify-between"
          title={name}
        >
          {name.length > 20 ? name.substring(0, 20) + "..." : name}
          <button
            onClick={() => clickRecolectData(name)}
            className="bg-[#676DB7] text-white text-[.7rem] w-[1.4rem] rounded-md hover:bg-[#979BD5]"
          >
            <FontAwesomeIcon icon={faRotate} />
          </button>
        </h2>
        <div className="flex justify-between mt-[4px]">
          <span className="text-white text-[.6rem] ">
            <strong>Year:</strong> {year ? year : null}
          </span>
          <span className="text-white text-[.6rem] ">
            <strong>Episodes:</strong> {episodes ? episodes : null}
          </span>
        </div>
      </header>

      <div className="bg-white w-full h-[34rem]">
        <div className="h-[9rem] relative p-[5px] flex  gap-[6px] ">
          <img src={url} alt={name} className="h-full" />
          <div className="text-[.7rem] flex flex-col items-center justify-center">
            <table>
              <tr>
                <td className="font-bold">Score:</td>
                {score ? (
                  <td className="pl-[1px] flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[.6rem] mr-[1px]"
                    />
                    {score}
                  </td>
                ) : null}
              </tr>
            </table>
          </div>
        </div>

        <div style={gridStyle} className="text-[.7rem]">
          {genres_real
            ? genres_real.map((x, index) => {
                return (
                  <p
                    key={index}
                    className="p-[2px] ml-[1px] bg-[#676DB7] text-white text-center"
                  >
                    {x.name}
                  </p>
                );
              })
            : null}
        </div>
        <ul className="p-[.4rem]">
          {genres ? (
            Object.keys(genres).map((genre) => (
              <li
                key={genre}
                className="text-[.7rem] flex w-[15em] justify-around"
              >
                <span className="w-[13em] text-end"> {genre}: </span>
                <ProgressBar percentage={genres[genre]} />
              </li>
            ))
          ) : (
            <p>No data</p>
          )}
        </ul>
      </div>
      {/* <div className="bg-white w-full h-[34rem]">
        
        
          {data[series].synopsis ? (
            <p className="hidden">Synopsis: {data[series].synopsis}</p>
          ) : null}
          <div style={gridStyle}>
            {data[series] && data[series].genres_real
              ? data[series].genres_real.map((x, index) => {
                  return (
                    <p key={index} className="p-[5px] bg-blue-700 text-white">
                      {x.name}
                    </p>
                  );
                })
              : null}
          </div>
        </div>
        
      </div> */}
    </div>
  );
};

export default Card;
