import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StoreFront from "./components/StoreFront";

function App() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 border py-4">
      <Navbar />
      <StoreFront />
      <Footer />
    </div>
  );
}

export default App;
