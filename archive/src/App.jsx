import Hero from "./sections/Hero";
import Story from "./sections/Story";
import Pipeline from "./sections/Pipeline";
import Signals from "./sections/Signals";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Story />
      <Pipeline />
      <Signals />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
