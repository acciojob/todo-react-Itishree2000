import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [text, setText] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addInputValue(event) {
    setInputValue(event.target.value);
  }

  function handleText() {
    if (inputValue.trim() !== "") {
      setText([...text, inputValue]);
      setInputValue("");
    }
  }

  function handleRemoveText(index) {
    const updatedText = text.filter((_, i) => i !== index);
    setText(updatedText);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <h3>To-Do-List</h3>
      <input
        type="text"
        placeholder=""
        value={inputValue}
        onChange={addInputValue}
      />
      <button onClick={handleText}>Add Todo</button>

      <ul>
        {text.map((todo, index) => (
          <li key={index}>
           <span>{todo}</span> 
            <button onClick={() => handleRemoveText(index)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
