import { useState, useEffect } from "react";
import { getGen, initGen } from "./next-gen";

function App() {
  const [currentGen, setCurrentGen] = useState(
    initGen(Array.from({ length: 128 }, () => Array(128).fill(false))),
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGen((prev) => {
        return getGen(prev);
      });
      console.log(currentGen);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1 className="title">Game Of Life</h1>
      <div className="grid">
        {currentGen.map((row) => {
          return (
            <div>
              {row.map((cell) => {
                return <div className={`cell ${cell && "alive"}`}></div>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
