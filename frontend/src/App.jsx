import { useState } from "react";
import viteLogo from "/logo.jpeg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Alwan Alarab</h1>
      <h2> COMPUTERS & REQUISITES TRADING LLC </h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        Website under construction
        </p>
      </div>
      <p className="read-the-docs">COLORING A BETTER FUTURE</p>
    </>
  );
}

export default App;
