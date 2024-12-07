import React, { useState } from "react";

const Problem1 = () => {
  const [inputString, setInputString] = useState("");
  const [charCount, setCharCount] = useState([]);

  const handleInputChange = (e) => {
    console.log(e);
    setInputString(e.target.value);
  };

  const handleSubmit = () => {
    const newStr = inputString.replace(/\s+/g, "").toUpperCase();
    const count = {};

    for (let char of newStr) {
      debugger;
      count[char] = (count[char] || 0) + 1;
    }

    const orderedCount = Object.keys(count).map((key) => ({
      char: key,
      count: count[key],
    }));

    setCharCount(orderedCount);
  };

  return (
    <div>
      <h1>Problem 1</h1>
      <input type="text" value={inputString} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {charCount.map((item, i) => (
          <li key={i} style={{ listStyle: "none" }}>
            {item?.char}-{item?.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Problem1;
