import React from "react";
import { Canvas } from "@react-three/fiber";
import { ISS } from "./Iss-_international_space_station"
import { Sale } from "./sale"
import { CDL } from "./Cdl"
import { Valorant } from "./Valorant_logo"
import { Chapman } from "./Chapman"
import "./Slide.css";

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex,
  } = StackedCarouselSlideProps;

  const title = data[dataIndex].title;
  const text = data[dataIndex].text;
  const textColor = data[dataIndex].textColor;
  const model = data[dataIndex].glb;
  

  return (
    <div className="card-card" draggable={false} >
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div className="detail fill">
        <div className="description" style={{color: textColor}}>
          <Canvas style={{ width: "50vw", height: "30vh" }}>
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[-10, 10, 10]} />
            {model === 0 ? <ISS position={[0, -1, -1]} scale={[40, 40, 40]}/> : <></>}
            {model === 1 ? <Sale scale={[4, 4, 4]}/> : <></>}
            {model === 2 ? <Valorant scale={[4, 4, 4]}/> : <></>}
            {/* {model === 3 ? <Chapman scale={[60, 60, 60]} /> : <></>} */}
            {model === 4 ? <CDL position={[0, 0, 0]}/> : <></>}

            {/* <ISS position={[0, -1, -1]} scale={[40, 40, 40]}/>
            <Sale scale={[4, 4, 4]}/> */}
          </Canvas>
          <p className="description-title">{title}</p>
          <p className="description-text">{text}</p>
        </div>
      </div>
    </div>
  );
});
