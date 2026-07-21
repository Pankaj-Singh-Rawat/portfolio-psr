import CursorGlow from "./components/CursorGlow";
import Grain from "./components/Grain";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <CursorGlow />
      <Grain />

      <Navbar />

      <main className="bg-[var(--bg)] text-[var(--text)]">
        <Hero />
      </main>
    </>
  );
}

export default App;