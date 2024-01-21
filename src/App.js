import "./App.css";
import "./index.css";
import Navbar from "./components/blocks/Navbar";
import Home from "./components/pages/Home";
import { useEffect, useState } from "react";
import Routerfile from "./components/routes/Routerfile";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, []);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    const isMobileDevice = screenWidth < 768;
    setIsMobile(isMobileDevice);
  };
  return (
    <div
      className="App bg-light "
    >
      {loading ? (
        <div className="absolutess">
          <div class="loader2"></div>
        </div>
      ) : (
        <Routerfile />
      )}
    </div>
  );
}
export default App;
