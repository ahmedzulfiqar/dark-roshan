import "./App.css";
import "./index.css";
import Navbar from "./components/blocks/Navbar";
import Home from "./components/pages/Home";
import { useEffect, useState } from "react";
function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, []);

  return (
    <div className="App bg-black ">
      {loading ? (
        <div className="absolutess">
          <div class="loader2"></div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}
//https://meet.google.com/osm-yivs-zbx
export default App;
