import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../redux/SearchSlice";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const inputElement = useRef();
  const { data, loading } = useSelector((state) => state.Search);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(FetchData());
  }, []);

  console.log(data);
  function handleSearch(event) {
    setInput(event.target.value);
  }
  const filteredData = data.filter((value) =>
    value.title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <input
        ref={inputElement}
        value={input}
        onChange={(e) => handleSearch(e)}
      />
      {loading ? (
        <h1>Loading</h1>
      ) : filteredData?.length > 0 ? (
        filteredData.map((item, index) => (
          <div style={{ padding: "10px 10px", cursor: "pointer" }} key={index}>
            {item.title}
          </div>
        ))
      ) : (
        <h1>No founds</h1>
      )}
    </div>
  );
}
