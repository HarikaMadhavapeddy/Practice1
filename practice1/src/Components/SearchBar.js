import React, { useRef, useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const data = ["pencil", "laptop", "mobile", "water", "coffee"];
  const inputElement = useRef();
  function handleSearch(event) {
    setInput(event.target.value);
    const filter = data.filter((value) =>
      value.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(filter);
    console.log(filteredData);
  }
  function handleSetInput(item) {
    setInput(item);
    setFilteredData([]);
  }

  return (
    <div>
      <input
        ref={inputElement}
        value={input}
        onChange={(e) => handleSearch(e)}
      />
      {filteredData?.length > 0 &&
        filteredData.map((item, index) => (
          <div style={{padding:'10px 10px',cursor:'pointer' }} onClick={() => handleSetInput(item)} key={index}>
            {item}
          </div>
        ))}
    </div>
  );
}
