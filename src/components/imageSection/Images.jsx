import React from 'react'
import "./images.scss"


const slider1 = [
  { src: "html5.svg" },
  { src: "css3.svg" },
  { src: "js.svg" },
  { src: "reactjs.svg" },
  { src: "bootstrap5.svg" },
  { src: "sass.svg" },
  { src: "framer.svg" },
  { src: "figma.svg" },
];


const Images = () => {
  return (
    <div>
      <div className="slidingImages">
        {slider1.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt="" />
          </div>
        ))}
      </div>
    </div>

  )
}

export default Images