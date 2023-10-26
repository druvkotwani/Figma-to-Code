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
import Footer from "./Footer";
export default function App() {
  return (
    <div className="overflow-hidden w-[100%] mx-auto  ">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Results />
      <Result2 />
      <div className="mt-16 md:mt-32 md:mb-8">
        <h1 className="text-gray-300 leading-2 text-center font-[Outfit] md:text-5xl text-[33px] font-semibold">
          Mixland helps you
          <br />
          build beautiful website
        </h1>
      </div>
      <div className="md:flex w-[90%] mx-auto md:mb-16 md:mt-8">
        <Image />
        <ToggleSection />
      </div>
      <Testimonial />
      <CardSection />


      <div className="md:w-[768px] lg:w-[1052px] mx-auto bg-[linear-gradient(90deg,_#2b59ff_0%,#bb2bff_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat md:flex-row flex flex-col justify-center gap-8 md:gap-[102px] w-full items-center p-8">
        <p className="text-3xl font-['Outfit'] font-semibold text-[#e0e0e0] md:w-[582px]">
          It will help you improve your writing
          <br />& bring ideas more clearly.
        </p>
        <button className="border-solid border-[#676767] bg-[#f5f5f5] flex flex-col justify-center md:w-1/5 w-3/5 h-12 shrink-0 items-center border">
          <p className="text-sm font-['Inter'] font-medium text-[#474747]">
            Start 14 days free trial
          </p>
        </button>
      </div>
      <Footer />
    </div>
  )
}