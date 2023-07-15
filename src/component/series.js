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
            <ul className="p-[.4rem]">
              {Object.keys(data[series].genres).map((genre) => (
                <li
                  key={genre}
                  className="text-[.7rem] flex w-[15em] justify-around"
                >
                  <span className="w-[13em] text-end"> {genre}: </span>
                  <ProgressBar percentage={data[series].genres[genre]} />
                  {/* {data[series].genres[genre]} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeriesList;
