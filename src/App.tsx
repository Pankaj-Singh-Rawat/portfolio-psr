import CursorGlow from "./components/CursorGlow";
import Grain from "./components/Grain";
import Navbar from "./components/Navbar";
import { Hero, Features, Quote } from "./sections";

function App() {
  return (
    <>
      <CursorGlow />
      <Grain />

      <Navbar />

      <main className="bg-[var(--bg)] text-[var(--text)]">
        <Hero />
        <Features />
        <Quote />
      </main>
    </>
  );
}

export default App;
