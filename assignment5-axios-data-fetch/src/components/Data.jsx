import React, { useEffect, useState } from "react";
import "../css/Data.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Data() {

  const navigate = useNavigate();
  const [apiData, setapiData] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setapiData(response.data.products);
      navigate("/");
    } catch (errors) {
      console.error(errors);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="container">
        {apiData?.map((value) => (
          <div className="card">
            <img src={value.thumbnail} alt="productImage" />
            {/* <div className="slideshow-container">
            {value.images?.map(imagePath => 
              <div className="mySlides fade">
                <img src={imagePath} alt="ProductImage" />
              </div>
            )}
            <a className="prev" onClick="plusSlides(-1)">❮</a>
            <a className="next" onClick="plusSlides(1)">❯</a>
          </div> */}
            <h3>{value.title}</h3>
            {/* <h6>{value.brand}</h6> */}
            <p>{value.description}</p>
            <button onClick={() => navigate(`/${value.id}`)}>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
}
