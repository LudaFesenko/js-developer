import "./styles/main.css";

import Navigation from "./components/navigation/Navigation";
import { ScrollRestoration } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ScrollRestoration />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
