import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import MediaLinks from "./components/MediaLinks";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div
        style={{
          paddingTop: "64px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <MediaLinks />
      </div>
    </>
  );
}

export default App;
