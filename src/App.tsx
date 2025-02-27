import "./index.css";
import Clock from "./components/clock";

const App = () => {
  return (
    <div>
      <div className="clock-container">
        <h1
          key="quoteSting"
          style={{ paddingBottom: "5px", borderBottom: "1px solid red" }}
        >
          The two most powerful warriors are patience and time...
        </h1>
        <Clock />
      </div>
      <div
        style={{
          float: "right",
          margin: "5px",
          marginTop: "25px",
          opacity: 0.7,
        }}
      >
        Developed by Ankit Raminwar
      </div>
    </div>
  );
};

export default App;
