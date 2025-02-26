import "./index.css";
import Clock from "./components/clock";

const App = () => {
  return (
    <div className="clock-container">
      <h1
        key="quoteSting"
        style={{ paddingBottom: "5px", borderBottom: "1px solid red" }}
      >
        The two most powerful warriors are patience and time...
      </h1>
      <Clock />
    </div>
  );
};

export default App;
