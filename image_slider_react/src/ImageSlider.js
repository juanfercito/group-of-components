import React from "react";
import "./App.css"; // Asegúrate de usar el mismo CSS adaptado

const ImageSlider = () => {
  const images = [
    { src: "image/s1.jpg", alt: "Image 1", text: "Image 1" },
    { src: "image/s2.jpg", alt: "Image 2", text: "Image 2" },
    { src: "image/s3.jpg", alt: "Image 3", text: "Image 3" },
    { src: "image/s4.jpg", alt: "Image 4", text: "Image 4" },
    { src: "image/s1.jpg", alt: "Image 1", text: "Image 1" },
  ];

  return (
    <div className="slider-container">
      <h2 className="title">Slider</h2>
      <div className="slider-box">
        <ul>
          {images.map((image, index) => (
            <li key={index}>
              <img src={image.src} alt={image.alt} />
              <div className="text">
                <h2>{image.text}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageSlider;