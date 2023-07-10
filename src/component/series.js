import React, { useEffect, useState } from "react";
import ProgressBar from "./progressBar";

const SeriesList = () => {
  const [data, setData] = useState([]);

  const getSeries = () => {
    fetch("http://127.0.0.1:5000/series/getall")
      .then((response) => response.json())
      .then((series) => setData(series));
  };

  useEffect(() => {
    getSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex m-2 gap-4">
      {Object.keys(data).map((series) => (
        <div key={series}>
          <h2 className="font-bold">{series}</h2>
          <img src={data[series].url} alt={series} />
          <ul>
            {Object.keys(data[series].genres).map((genre) => (
              <li
                key={genre}
                className="text-[.8rem] flex w-[13em] justify-around"
              >
                <span className="w-[13em] text-end"> {genre}: </span>
                <ProgressBar percentage={data[series].genres[genre]} />
                {/* {data[series].genres[genre]} */}
              </li>
            ))}
          </ul>
          {/* <p>{data[series].sinopsis}</p> */}
        </div>
      ))}
    </div>
  );
};

export default SeriesList;
