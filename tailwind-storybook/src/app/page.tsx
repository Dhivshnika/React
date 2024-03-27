import Header from "../components/Header/header";
import Menu from "../components/Menu/menu";
import Carousel from "../components/Carousel/carousel";
import Newlaunch from "../components/NewLaunch/newLaunch";
import Slider from "../components/Slider/slider";
import Brand from "../components/Brand/brand";
import Like from "../components/Like/like";
import Footer from "../components/Footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="mb-10 background-white">
        <Header />
      </div>
      <div className="colorGradient pt-5">
        <div className="flex justify-center">
          <Menu />
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="carouselLeft">
          <Carousel />
        </div>
      </div>
      <div className="brandMargin text-lg font-bold">Try our newly launched products</div>
      <div className="flex justify-center ">
        <Newlaunch />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="sliderLeft">
          <Slider />
        </div>
      </div>
      <div>
        <Brand />
      </div>
      <div>
        <Like />
      </div>
      <div style={{ backgroundColor: "#F3F4F6" }}>
        <Footer />
      </div>
    </div >
  );
}
