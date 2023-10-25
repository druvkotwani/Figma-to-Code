import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Results from "./components/Results";
import Describe from "./components/Describe";
import Result2 from "./components/Result2";
export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Results />
      <Result2 />
    </div>
  )
}