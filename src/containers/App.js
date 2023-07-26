import React, { useEffect, useState } from "react";
import "./App.css";
// import SeriesList from "./component/series";

function App() {
  useEffect(() => {
    getSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [series, setSeries] = useState([]);

  const getSeries = () => {
    // fetch("http://127.0.0.1:5000/series/getall")
    fetch("https://seriessenseiapi.onrender.com/series/getall")
      .then((response) => response.json())
      .then((series) => setSeries(series));
  };

  return (
    <div className="m-2">
      <h1 className="text-[1.5rem] font-bold text-center uppercase text-[#A46314]">
        Series Sensei
      </h1>
      {!Object.keys(series).length > 0 ? (
        <p>Loading...</p>
      ) : (
        <pre>{Object.keys(series)}</pre>
      )}
      {/* <SeriesList></SeriesList>{" "} */}
    </div>
  );
}

export default App;
