import React from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Iss-_international_space_station"
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import "./Slide.css";

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex
  } = StackedCarouselSlideProps;

  const title = data[dataIndex].title;
  const text = data[dataIndex].text;
  const textColor = data[dataIndex].textColor;
  const model = data[dataIndex].glb;


  // <div
  //         className="card-overlay fill"
  //         onClick={() => {
  //           if (!isCenterSlide) swipeTo(slideIndex);
  //         }}
  //       />

  return (
    <div className="card-card" draggable={false} >
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
        />
      </div>
      <div className="detail fill">
        <div className="description" style={{color: textColor}}>
          <Canvas style={{ width: "50vw", height: "30vh" }}>
            <pointLight position={[10, 10, 10]} />
            <Model position={[0, -1, -1]} scale={[40, 40, 40]}/>
          </Canvas>
          <p>{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
});
