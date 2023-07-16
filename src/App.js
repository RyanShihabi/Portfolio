import React, { useState, useEffect } from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import { Slide } from "./Slide";
import "./Slide.css";

const data = [
  {
    glb: 0,
    title: "Ryan's Portfolio Website",
    text: "Swipe, drag, press (←, a), (→, d), or click the outer parts of the screen to navigate through my projects",
    textColor: "white"
  },
  {
    glb: 1,
    title: "ISS Archaeology Project",
    backgroundPicture: "url(" + process.env.PUBLIC_URL +"/space.jpg)",
    text: "A research project regarding the International Space Station. I am responsible for data mining and conducting analysis on all of NASA's available ISS crew reports in order to gain insight on how crew members interact with facilities. My analysis of these facility reports will help future commerical space labs organize their station for efficiency and utilizing the most of their day.",
    textColor: "white"
  },
  {
    glb: 2,
    title: "SAP Grocery Store Sale Detection",
    backgroundPicture: "url(" + process.env.PUBLIC_URL + "/cover.jpg)",
    text: "A freelance project for SAP with the challenge of verifying in-store grocery discounts for commercial products. I wanted to create an object detection model in order to instantly count and identify different sales found in pictures. The pictures would be taken through a mobile application by the store clerks or crowd-sourced users. I directed a team of five other students at my university to help develop my proposed solution. After labeling a sale dataset from scratch, the trained YOLOv5 object detection model is capable of recognizing and detecting different types of sales with a 95% precision and recall. There is another project card that goes into detail of how I hosted the inference API at my university.",
    textColor: "white"
  },
  {
    glb: 3,
    title: "Object Sale Detection Inference API",
    backgroundPicture: "url(" + process.env.PUBLIC_URL + "/cover.jpg)",
    text: "I hosted a model endpoint on the student engineering server at my university to avoid the costs of using AWS and GCP. I was able to configure mod_wsgi to run flask on an apache server so I could load the model via pytorch.",
    textColor: "white"
  },
  {
    glb: 4,
    title: "Real-Time Sports Data",
    backgroundPicture: "url(" + process.env.PUBLIC_URL + "/TSC.png)",
    text: "I'm in the process of building a collection of object detection models and OCRs to provide open-source tools for gathering real-time data from sports boradcasts. I am starting with the eSports industry due to my connections with Riot Games and their recent partnership with AWS. I hope this project can help break the model of large tech monopolies owning real-time analytics for entire leagues and associations.",
    textColor: "white"
  },
  {
    glb: 5,
    title: "Product Placement Detection",
    backgroundPicture: "url(" + process.env.PUBLIC_URL + "/coca.png)",
    text: "Helped a startup set up an object detection pipline for products found in movies and TV shows. This included a custom annotation tool for labeling, model training, and inference.",
    textColor: "white"
  },
  {
    glb: 6,
    title: "Club Engagement Analysis",
    backgroundPicture: "url(" + process.env.PUBLIC_URL + "/club.png)",
    text: "A fun side project I did during the beginning of my sophomore fall semester that tracked the traffic of students on campus during the student involvement fair. I got access to the top of my university's library builing in order to record a perfect vantage point of the event. I decided to use YOLOv5 with SORT tracking to both find and follow people to gain a sense of direction. To train the model I went to Baidu and found a large dataset of surveillence camera footage. I logged the detected traffic on a timeseries plot and generated a density graph. No surprise to me, greek life had the most traffic...",
    textColor: "white"
  },
  {
    glb: 7,
    title: "CDL Highlight Detection",
    backgroundPicture: "url(" + process.env.PUBLIC_URL + "/cdl.png)",
    text: "I have played video games for as long as I can remember, starting with my uncle's original disk of Starcraft. To have the opportunity to present a demo to Activision Blizzard and Riot Games was inconceivable. I pitched the idea of having an automated highlight classifier so viewers would not have to sift through a five-hour competition recording. Adding to the project, I developed a way to place the clips onto an interactive map of where the clip occurred in the game. To look at the front-end code, check out my GitHub.",
    textColor: "white"
  },
  {
    glb: 8,
    title: "Portfolio Websites",
    text: "These portfolio websites are a great way for me to maintain my web development skills. I also ended up learning a lot about blender and 3D modeling.",
    textColor: "white"
  },
  {
    glb: 9,
    title: "Medical Search Engine",
    backgroundPicture: "url(" + process.env.PUBLIC_URL + "/omnimed.JPG)",
    text: "A freelance project for a doctor at CHOC Hospital, I worked on developing a medical search engine that could bring up relevant abstracts. Using python to scrape websites for information, I could generate paraphrased information from five articles to a user in 2 seconds or less. I used Django to house the servers and Reactjs to fetch the information on a different port. I also realized that the current medical search engines on the market lack UI design. I made sure to give that area some attention when developing this project.",
    textColor: "white"
  },
  {
    glb: 10,
    title: "Rycenter",
    backgroundPicture: "url(" + process.env.PUBLIC_URL + "/rycenter.png)",
    text: "Rycenter is a hobby project I created to provide free academic utilities to students during the COVID school years. I wrote four programs for the site: a homework schedule generator, a grammar checker, a final grade calculator, and a semester grade calculator. The homework schedule generator takes the classes you have homework in for the day, classifies if the homework is to study for a test or is an assignment, and then lists what order to finish them in. The grammar checker was my attempt at making a version of Grammarly. It detects past, present, and future tense, contractions, and personal pronouns. The final grade calculator solves inefficiencies I noticed with the original “Roger-Hub” version. With one grade input, it will automatically calculate the bordering letter grades; one input gives all the information a user needs. The semester grade calculator was also in demand, as I noticed people at my school debating their future semester grades on their calculators. This application makes the process of number entry more practical. The website maintains an average of 250 unique monthly users.",
    textColor: "white"
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

  const calcSlideWidthRatio = (width) => {
    if(width > 1200){
      return 0.5;
    }
    else if(width > 600){
      return 0.8;
    }
    else{
      return 0.9;
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
            let responsiveSlideWidthRatio = calcSlideWidthRatio(width);
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={width*responsiveSlideWidthRatio}
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
      </div>
    </div>
  );
};

export default CardExample;
