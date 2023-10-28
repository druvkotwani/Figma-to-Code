import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";
import CallToAction from "./components/CallToAction";
import Copyright from "./components/Copyright";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PricingSection />
      <CallToAction />
      <Copyright />
    </>
  )
}