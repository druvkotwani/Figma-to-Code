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

      <div className="bg-[linear-gradient(90deg,_#2b59ff_0%,#bb2bff_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center gap-5 w-full items-center p-8">
        <div className="text-3xl font-['Outfit'] font-semibold text-[#e0e0e0] w-full">
          It will help you improve your writing
          <br />& bring ideas more c learly.
        </div>
        <div className="border-solid border-[#676767] bg-[#f5f5f5] flex flex-col justify-center w-3/5 h-12 shrink-0 items-center border">
          <div className="text-sm font-['Inter'] font-medium text-[#474747]">
            Start 14 days free trial
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}