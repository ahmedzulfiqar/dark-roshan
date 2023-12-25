import "./App.css";
import "./index.css";
import Navbar from "./components/blocks/Navbar";
import Home from "./components/pages/Home";
import { useEffect, useState } from "react";
import Routerfile from "./components/routes/Routerfile";
function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, []);

  return (
    <div className="App bg-light ">
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
//https://meet.google.com/osm-yivs-zbx
export default App;
