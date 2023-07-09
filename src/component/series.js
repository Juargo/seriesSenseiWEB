import React, { useEffect, useState } from "react";

const SeriesList =() =>{
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
      <div>
        {Object.keys(data).map((series) => (
          <div key={series}>
            <h2>{series}</h2>
            <ul>
              {Object.keys(data[series].genres).map((genre) => (
                <li key={genre}>
                  {genre}: {data[series].genres[genre]}
                </li>
              ))}
            </ul>
            <p>{data[series].sinopsis}</p>
          </div>
        ))}
      </div>
    );
};

export default SeriesList;
