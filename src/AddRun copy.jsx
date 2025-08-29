import { useEffect, useState } from "react";
function button  (...run) {
    //const RunNumber = ['0','1','2','3','4','6'];
  return (
  <>
          <div 
              style={{
                backgroundColor: "#43688f",
                width: "200px",
                padding: "5px",
                borderRadius: "10px",
                textAlign: "justify",
                marginRight:"20px"
              }}
            >
                   <p style={{
                    textAlign:"center",
                    fontWeight:"normal",
                    color:"rgba(255, 255, 255, 0.87)",
                }}>
                    Add Runs, Hello
                    </p>
              {run.map((run, runNumberIndex) =>(
              <button key={runNumberIndex}
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
                  setRun(run + {run});
                  setBall(ball + 1);
                  setBatsman({ ...batsman, balls: batsman.balls + 1 });
                }}
              >
                {run}
              </button>
              ))}
              </div>
    </>
  )
}
export default button;