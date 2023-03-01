import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import "../css/Product.css";

export default function Product() {

  const {id} = useParams();
  const [apiData, setapiData] = useState([]);
  
  const getSpecificProduct = async (param) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${param}`);
      // console.log(response.data);
      setapiData(response.data);
    } catch (errors) {
      console.error(errors);
    }
  };

  getSpecificProduct(id);

  // let slideIndex = 1;
  
  // const showSlides = (n) => {
  //   if (document.getElementsByClassName("mySlides")) {
  //     console.log(`showSlides`);
  //     let i;
  //     let slides = document.getElementsByClassName("mySlides");
  //     if (n > slides.length) {slideIndex = 1}    
  //     if (n < 1) {slideIndex = slides.length}
  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";  
  //     }
  //     slides[slideIndex-1].style.display = "block";  
  //   }
  // }

  // showSlides(slideIndex);

  // const plusSlides = (n) => {
  //   console.log(`plusSlides`);
  //   showSlides(slideIndex += n);
  // }
    
  return (
    <>
      <div className="productContainer">

        <div className="productDetails">
          <img src={apiData.thumbnail} alt="productImage" />
        </div>

        <div className="slideshow-container">
            {apiData.images?.map((imagePath,index) => 
              <div className="mySlides fade" key={index}>
              <img className='carouselImage' src={imagePath} alt="ProductImage" />
              </div>
            )}
            {/* <button className="prev" onClick={ () => plusSlides(-1) }>❮</button>
            <button className="next" onClick={ () => plusSlides(1) }>❯</button> */}
        </div>

        <div className="productDetails">
          <h3 className='productHeading'>{apiData.title}</h3>
          <h6 className='productBrand'>{apiData.brand}</h6>
          <p className='productdecsription'>{apiData.description}</p>
        </div>

      </div>
    </>
  );

}