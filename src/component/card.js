import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "./progressBar";

// const gridStyle = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr 1fr",
// };

const genreStyle = {
  background: "#676DB7",
  color: "white",
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
  onDeleteSerie,
}) => {
  const isGenresReal = (genre) => {
    if (genres_real) {
      return (
        genres_real.find(
          (x) => x.name.toLowerCase() === genre.toLowerCase()
        ) !== undefined
      );
    } else {
      return false;
    }
  };
  return (
    <div className="border-[#2E3690] border-[1px] rounded-md">
      <header className="bg-[#474E9F] p-[.4rem] pb-[3px] " title={name}>
        <h2
          className="font-bold  text-white text-[.7rem] flex justify-between"
          title={name}
        >
          {name.length > 17 ? name.substring(0, 17) + "..." : name}
          <div>
            <button
              onClick={() => clickRecolectData(name)}
              className="bg-[#676DB7] text-white text-[.7rem] w-[1.4rem] rounded-md hover:bg-[#979BD5]"
            >
              <FontAwesomeIcon icon={faRotate} />
            </button>
            <button
              onClick={() => onDeleteSerie(name)}
              className="bg-[#c55f5fe8] text-white text-[.7rem] w-[1.4rem] rounded-md hover:bg-[#979BD5] ml-[5px]"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
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

      <div className="bg-white w-full h-[27rem]">
        <div className="h-[9rem] relative p-[5px] flex  gap-[6px] ">
          <img src={url} alt={name} className="h-full" />
          <div className="text-[.7rem] flex flex-col items-center justify-center">
            <table>
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>

        {/* <div style={gridStyle} className="text-[.7rem]">
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
        </div> */}
        <ul className="p-[.4rem]">
          {genres ? (
            Object.keys(genres).map((genre) => (
              <li
                key={genre}
                className="text-[.7rem] flex w-[15em] justify-around"
              >
                <span
                  className="w-[13em] text-end"
                  style={isGenresReal(genre) ? genreStyle : {}}
                >
                  {genre}:
                </span>
                <ProgressBar percentage={genres[genre]} />
              </li>
            ))
          ) : (
            <p>No data</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Card;
