import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Results from "./components/Results";
export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Results />
    </div>
  )
}