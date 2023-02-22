import React, { useEffect, useState } from "react";
import '../css/Data.css'
import axios from "axios";

export default function Data() {
  const [apiData, setapiData] = useState([]);
  const getTodoItems = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setapiData(response.data);
    } catch (errors) {
      console.error(errors);
    }
  };
  useEffect(() => {
    getTodoItems();
  }, []);

  return (
    <>
      {apiData.map((value) => (
        <div className="card">
          <h1>{value.id}</h1>
          <h3>{value.title}</h3>
          <p>{value.body}</p>
        </div>
      ))}
    </>
  );
}
