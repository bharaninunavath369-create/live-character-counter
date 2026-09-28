import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="card">
        <h1>Character Counter</h1>

        <textarea
          placeholder="Type here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <h2>Characters: {text.length}</h2>

        <p className={text.length > 100 ? "red" : "green"}>
          {text.length > 100 ? "Limit Exceeded!" : "Within Limit"}
        </p>
      </div>
    </div>
  );
}

export default App;