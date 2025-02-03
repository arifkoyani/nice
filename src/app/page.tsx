import Navbar from "./Navbar/page";
import Footer from "../app/footer/page";
import {Carousal} from "./Carousel/Carousal"
import ServiceAutomationFigure from "../app/ServiceAutomationFigure/page";
import CXone from "./CXone/CXone";
import Encompassing from "./Encompassing/Encompassing"
import ImageCarousel from "./TopSlider/page";
import Recognition from "./recognition/recognition"
import Scroll from "./InfiniteScroll/scroll";
import Reviews  from "./review/page";
export default function Home() {
  return (
    <>
    <div>

      <Navbar />
      <ImageCarousel/>
      <CXone/>
      <Carousal/>
      <ServiceAutomationFigure />
      <Scroll/>
      <Reviews/>
      <Encompassing/>
      <Recognition/>
      <Footer />
    </div>
     
    </>
  );
}
