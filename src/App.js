import React, { useState, useEffect } from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import "./Slide.css";
import { Slide } from "./Slide";

const data = [
  {
    glb: 0,
    title: "ISS Archaeology Project",
    backgroundPicture: "url(/space.jpg)",
    text: "A research project regarding the International Space Station. I am responsible for data mining and conducting analysis on all of NASA's available ISS crew reports in order to gain insight on how crew members interact with facilities. My analysis of these facility reports will help future commerical space labs organize their station for efficiency and utilizing the most of their day.",
    textColor: "white"
  },
  {
    glb: 1,
    title: "SAP Grocery Store Sale Detection",
    backgroundPicture: "url(/cover.jpg)",
    text: "A freelance project for SAP with the challenge of verifying in-store grocery discounts for commercial products. I wanted to create an object detection model in order to instantly count and identify different sales found in pictures. The pictures would be taken through a mobile application by the store clerks or crowd-sourced users. I directed a team of five other students at my university to help develop my proposed solution. After labeling a sale dataset from scratch, the trained YOLOv5 object detection model is capable of recognizing and detecting different types of sales with a 95% precision and recall. There is another project card that goes into detail of how I hosted the inference API at my university.",
    textColor: "black"
  },
  {
    glb: 2,
    title: "Real-Time Sports Data",
    backgroundPicture: "url(/TSC.png)",
    text: "I'm in the process of building a collection of object detection models and OCRs to provide open-source tools for gathering real-time data from sports boradcasts. I am starting with the ESports industry due to my connections with Riot Games and their recent partnership with AWS. I hope this project can help break the model of large tech monopolies owning real-time analytics for entire leagues and associations.",
    textColor: "white"
  },
  {
    glb: 3,
    title: "Club Engagement Analysis",
    backgroundPicture: "url(/club.png)",
    text: "A fun side project I did during the beginning of my sophomore fall semester that tracked the traffic of students on campus during the student involvement fair. I got access to the top of my university's library builing in order to record a perfect vantage point of the event. I decided to use YOLOv5 with SORT tracking to both find and follow people to gain a sense of direction. To train the model I went to Baidu and found a large dataset of surveillence camera footage. I logged the detected traffic on a timeseries plot and generated a density graph. No surprise to me, greek life had the most traffic...",
    textColor: "black"
  },
  {
    glb: 4,
    title: "CDL Highlight Detection",
    backgroundPicture: "url(/cdl.png)",
    text: "I have played video games for as long as I can remember, starting with my uncle's original disk of Starcraft. To have the opportunity to present a demo to Activision Blizzard and Riot Games was inconceivable. I pitched the idea of having an automated highlight classifier so viewers would not have to sift through a five-hour competition recording. Adding to the project, I developed a way to place the clips onto an interactive map of where the clip occurred in the game. To look at the front-end code, check out my GitHub.",
    textColor: "white"
  },
  {
    glb: 5,
    title: "Medical Search Engine",
    backgroundPicture: "url(/omnimed.JPG)",
    text: "A freelance project for a doctor at CHOC Hospital, I worked on developing a medical search engine that could bring up relevant abstracts. Using python to scrape websites for information, I could generate paraphrased information from five articles to a user in 2 seconds or less. I used Django to house the servers and Reactjs to fetch the information on a different port. I also realized that the current medical search engines on the market lack UI design. I made sure to give that area some attention when developing this project.",
    textColor: "black"
  },
  {
    glb: 6,
    title: "Rycenter",
    backgroundPicture: "url(/rycenter.png)",
    text: "Rycenter is a hobby project I created to provide free academic utilities to students during the COVID school years. I wrote four programs for the site: a homework schedule generator, a grammar checker, a final grade calculator, and a semester grade calculator. The homework schedule generator takes the classes you have homework in for the day, classifies if the homework is to study for a test or is an assignment, and then lists what order to finish them in. The grammar checker was my attempt at making a version of Grammarly. It detects past, present, and future tense, contractions, and personal pronouns. The final grade calculator solves inefficiencies I noticed with the original “Roger-Hub” version. With one grade input, it will automatically calculate the bordering letter grades; one input gives all the information a user needs. The semester grade calculator was also in demand, as I noticed people at my school debating their future semester grades on their calculators. This application makes the process of number entry more practical. The website maintains an average of 250 unique monthly users.",
    textColor: "black"
  }

];

const CardExample = () => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, true)
  }, [])

  const ref = React.useRef(StackedCarousel);

  const [background, setBackground] = useState(0);

  const handleKeyPress = (e) => {
    if(e.keyCode === 37 || e.keyCode === 65){
      ref.current?.goBack();
    }
    else if(e.keyCode === 39 || e.keyCode === 68){
      ref.current?.goNext();
    }
  }

  return (
    <div className="card" 
    style={{  
      backgroundImage: data[background].backgroundPicture,
      height: window.innerHeight,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{ width: "100%", height: "100%", position: "relative" }} >
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={width*0.5}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={1}
                customScales={[1, 1]}
                transitionTime={0}
                height={window.innerHeight}
                onActiveSlideChange={(activeSlide) => setBackground(activeSlide)}
              />
            );
          }}
        />

        {/* <Fab
          className="card-button left"
          size="large"
          onClick={() => {swipeLeft(ref, background, setBackground)}}
        >
          <KeyboardArrowLeftIcon style={{ height: "100%", fontSize: 30 }} />
        </Fab>
        
        <Fab
          className="card-button right"
          size="large"
          
          onClick={() => {swipeRight(ref, background, setBackground)}}
        > */}
          {/* <KeyboardArrowRightIcon style={{ height: "100%", fontSize: 30 }} /> */}
        {/* </Fab> */}
      </div>
    </div>
  );
};

export default CardExample;
