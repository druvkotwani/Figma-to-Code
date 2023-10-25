import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Results from "./components/Results";
import Image from "./components/Image";
import Result2 from "./components/Result2";
import ToggleSection from "./components/ToggleSection";
import Testimonial from "./components/Testimonial";
import CardSection from "./components/CardSection";
export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Results />
      <Result2 />
      <div className="mt-16">
        <h1 className="text-gray-300 text-center font-[Outfit] text-[33px] font-semibold">
          Mixland helps you
          <br />
          build beautiful website
        </h1>
      </div>
      <Image />
      <ToggleSection />
      <Testimonial />
      <CardSection />

    </div>
  )
}