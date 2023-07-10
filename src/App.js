import "./App.css";
import SeriesList from "./component/series";
function App() {
  return (
    <div className="m-2">
      <h1 className="text-[1.5rem] font-bold text-center">Series Sensei</h1>
      <SeriesList></SeriesList>{" "}
    </div>
  );
}

export default App;
