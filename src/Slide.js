import React from "react";
import { Canvas } from "@react-three/fiber";
import { ISS } from "./Iss-_international_space_station"
import { Sale } from "./sale"
import { CDL } from "./Cdl"
import { Valorant } from "./Valorant_logo"
import { Chapman } from "./Chapman"
import { Mag } from "./Magnifying_glass"
import { Book } from "./Low_poly_book"
import Github from "./Github"
import LinkedIn from "./LinkedIn"
import "./Slide.css";

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex,
  } = StackedCarouselSlideProps;

  if(dataIndex === undefined){
    window.location.reload(false);
  }

  const title = data[dataIndex].title;
  const text = data[dataIndex].text;
  const textColor = data[dataIndex].textColor;
  const model = data[dataIndex].glb;

  const calcResponsiveProps = (width) => {
    if(width > 1200){
      return {
        canvasHeight: "400px",
        titleSize: "32px",
        textSize: "28px"
      };
    }
    else if(width > 600){
      return {
        canvasHeight: "300px",
        titleSize: "18px",
        textSize: "16px"
      };
    }
    else{
      return {
        canvasHeight: "100px",
        titleSize: "16px",
        textSize: "14px"
      };
    }
  }

  let responsive = calcResponsiveProps(window.innerWidth);

  console.log(responsive);

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
          {model !== 0 ?
          <>
            <Canvas style={{ width: responsive.canvasHeight, height: responsive.canvasHeight, overflow: "visible" }}>
              <pointLight position={[10, 10, 10]} />
              <pointLight position={[-10, 10, 10]} />
              {model === 1 ? <ISS position={[0, -0.5, 0]} scale={[30, 30, 30]}/> : <></>}
              {model === 2 ? <Sale scale={[4, 4, 4]}/> : <></>}
              {model === 3 ? <Valorant scale={[2.5, 2.5, 2.5]}/> : <></>}
              {model === 4 ? <Chapman scale={[100, 100, 100]} rotation={[Math.PI/2, 0, 0]}/> : <></>}
              {model === 5 ? <CDL position={[0, 0, 0]}/> : <></>}
              {model === 6 ? <Mag /> : <></>}
              {model === 7 ? <Book position={[0, -3, 0]}/> : <></>}

              {/* <ISS position={[0, -1, -1]} scale={[40, 40, 40]}/>
              <Sale scale={[4, 4, 4]}/> */}
            </Canvas>
            <p className="description-title" style={{fontSize: responsive.titleSize}}>{title}</p>
            <p className="description-text" style={{fontSize: responsive.textSize}}>{text}</p>
          </>
          : <><p className="description-title-main" style={{fontSize: responsive.titleSize}}>{title}</p>
            <Canvas style={{ width: "100%", height: responsive.canvasHeight, overflow: "visible" }}>
              <pointLight position={[10, 10, 10]} intensity={0.6}/>
              <pointLight position={[-10, 10, 10]} intensity={0.6}/>
              <Github scale={[0.1, 0.1, 0.1]} position={[-3, 0, 0]}/>
              <LinkedIn scale={[0.15, 0.15, 0.15]} position={[2, 0, 0]}/>
            </Canvas>
            <p className="description-text-main" style={{fontSize: responsive.textSize}}>{text}</p></>}
        </div>
      </div>
    </div>
  );
});
