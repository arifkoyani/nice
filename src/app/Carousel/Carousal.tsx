"use client";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import CardOne from "../LatestNews/cardOne";
import Second from "../LatestNews/second";
import Third from "../LatestNews/third";
import Fourth from "../LatestNews/fourth";
import Fivth from "../LatestNews/fivth";
import Sixth from "../LatestNews/sixth";
import Seventh from "../LatestNews/seventh";
import Eighth from "../LatestNews/eighth";

export function Carousal() {


  return (
    <div className="bg-transparent">
    <div className="w-full py-5">
    <h2 className="text-4xl  text-center font-light">
  Latest <span className="text-blue-400">News</span>
</h2>
    </div>


      <Carousel
        withIndicators
        height={600}
        slideSize={{ base: "40%", sm: "50%", md: "23.333333%" }}
        align="start"
        controlsOffset="2xl"
        slideGap="md"
        controlSize={50}
        dragFree
        className="px-6"
      >
        <Carousel.Slide>
          <CardOne />
        </Carousel.Slide>
        <Carousel.Slide>
          <Sixth />
        </Carousel.Slide>
        <Carousel.Slide>
          <Seventh />
        </Carousel.Slide>

        <Carousel.Slide>
          <Eighth />
        </Carousel.Slide>
        <Carousel.Slide>
          <Second />
        </Carousel.Slide>

        <Carousel.Slide>
          <Third />
        </Carousel.Slide>
        <Carousel.Slide>
          <Fourth />
        </Carousel.Slide>
        <Carousel.Slide>
          <Fivth />
        </Carousel.Slide>
        
      </Carousel>
    </div>
  );
}
