import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import { Fab } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Slide.css";
import { Slide } from "./Slide";

const data = [
  {
    image: "https://picsum.photos/200/300/?random=1",
    text: "hello"
  },
  {
    image: "https://picsum.photos/200/300/?random=12",
    text: "lel"
  },
  {
    image: "https://picsum.photos/200/300/?random=13",
    text: "kak"
  },
  {
    image: "https://picsum.photos/200/300/?random=15",
    text: "kk"
  },
  {
    image: "https://picsum.photos/200/300/?random=10",
    text: "hello"
  }
];

const CardExample = () => {
  const ref = React.useRef(StackedCarousel);
  return (
    <div className="card">
      <div style={{ width: "100%", position: "relative" }}>
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
                customScales={[1, 0.85]}
                transitionTime={450}
              />
            );
          }}
        />
        <Fab
          className="card-button left"
          size="small"
          onClick={() => ref.current?.goBack()}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab
          className="card-button right"
          size="small"
          onClick={() => ref.current?.goNext()}
        >
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
        </Fab>
      </div>
    </div>
  );
};

export default CardExample;
