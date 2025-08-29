import { useState } from "react";
import AddButton from "./AddRun";

const ScoreBoard = () => {
  const [run, setRun] = useState(0);

  const [wicket, setWicket] = useState(0);
  const [over, setOver] = useState(0);
  const [ball, setBall] = useState(0);
  const [batsman, setBatsman] = useState({
    name: "Virat Kohli",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    strike: true,
  });

  const runNumber = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      <h3>ScoreBoard</h3>

      {/* container start */}
      <div
        style={{
          margin: "20px",
          padding: "20px",
          width: "800px",
          height: "500px",
          backgroundColor: "#1a3b70",
          borderRadius: "2%",
          borderStyle: "solid",
          borderColor: "#43688f",
        }}
      >
        {/* content start */}
        <div>
          <h1
            style={{
              color: "#ffda82",
            }}
          >
            {run}/{wicket}
            <span
              style={{
                marginLeft: "10px",
                fontSize: "35%",
                fontWeight: "normal",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Overs: {parseInt(ball / 6)}.{ball % 6}
            </span>
          </h1>
          <p
            style={{
              fontWeight: "normal",
              color: "rgba(255, 255, 255, 0.87)",
            }}
          >
            Run Rate: --
          </p>
        </div>

        <div
          style={{
            display: "flex",
            marginRight: "20px",
          }}
        >
          <AddButton RunNumber={runNumber}/>
          <div
            style={{
              marginBlock: "flex",
              backgroundColor: "#43688f",
              width: "200px",
              padding: "5px",
              borderRadius: "10px",
              textAlign: "justify",
              marginRight: "20px",
            }}
          >
            <button
              style={{
                backgroundColor: "gray",
                color: "white",
                margin: "5px",
                padding: "8px",
                width: "40px",
                height: "40px",
                textAlign: "center",
              }}
              onClick={() => {
                setWicket(wicket + 1);
                setBall(ball + 1);
              }}
            >
              W
            </button>
          </div>

          <div
            style={{
              backgroundColor: "#43688f",
              width: "200px",
              padding: "5px",
              borderRadius: "10px",
              textAlign: "justify",
              marginRight: "20px",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "#43688f",
              width: "200px",
              padding: "5px",
              borderRadius: "10px",
              textAlign: "justify",
              marginRight: "20px",
            }}
          ></div>
        </div>
        {/* container end */}
      </div>
    </>
  );
};

export default ScoreBoard;
