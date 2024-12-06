import React, { Suspense } from "react";
import "./App.css";

import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
const RingLoader = React.lazy(() => import("react-spinners/RingLoader"));

const HeroSection = React.lazy(() =>
  import("./Pages/HomePage/HeroSection/HeroSection")
);
const car2 = React.lazy(() => import("./Pages/HomePage/Gltf/Car2/Car2"));
// const Bmwm4 = React.lazy(() => import("./Pages/HomePage/Gltf/Bmwm4/Bmwm4"));
// const Bmwf82 = React.lazy(() => import("./Pages/HomePage/Gltf/BmwF82/Bmwf82"));
// const Mclaren = React.lazy(() =>
//   import("./Pages/HomePage/Gltf/Mclaren/Mclaren")
// );
// const Mercedes = React.lazy(() =>
//   import("./Pages/HomePage/Gltf/Mercedes/Mercedes")
// );
// const Hongqi = React.lazy(() => import("./Pages/HomePage/Gltf/Hongqi/Hongqi"));
// const Sports = React.lazy(() => import("./Pages/HomePage/Gltf/Sports/Sports"));
// const FreeConcept11 = React.lazy(() =>
//   import("./Pages/HomePage/Gltf/FreeConcept11/FreeConcept11")
// );("./Cursor"));

// import HeroSection from "./Pages/HomeP
// const FreeConcept3 = React.lazy(() =>
//   import("./Pages/HomePage/Gltf/FreeConcept3/FreeConcept3")
// );
// const Bugatti = React.lazy(() =>
//   import("./Pages/HomePage/Gltf/Bugatti/Bugatti")
// );
// const Cursor = React.lazy(() => importage/HeroSection/HeroSection";

// import car2 from "./Pages/HomePage/Gltf/Car2/Car2";

import Bmwm4 from "./Pages/HomePage/Gltf/Bmwm4/Bmwm4";
import Bmwf82 from "./Pages/HomePage/Gltf/BmwF82/Bmwf82";
import Mclaren from "./Pages/HomePage/Gltf/Mclaren/Mclaren";
import Mercedes from "./Pages/HomePage/Gltf/Mercedes/Mercedes";
import Hongqi from ".//Pages/HomePage/Gltf/Hongqi/Hongqi";
import Sports from "./Pages/HomePage/Gltf/Sports/Sports";
import FreeConcept11 from "./Pages/HomePage/Gltf/FreeConcept11/FreeConcept11";
import FreeConcept3 from "./Pages/HomePage/Gltf/FreeConcept3/FreeConcept3";
import Bugatti from "./Pages/HomePage/Gltf/Bugatti/Bugatti";
import Cursor from "./Cursor";
const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="loader">
            <RingLoader color="white" size="90px" />
            <h2>Please wait website is loading</h2>
          </div>
        }
      >
        <Cursor />
        <BrowserRouter>
          <Routes>
            <Route path="/" exact Component={HeroSection} />
            <Route path="/car2" exact Component={car2} />
            <Route path="/Bmwm4" exact Component={Bmwm4} />
            <Route path="/Bmwf82" exact Component={Bmwf82} />
            <Route path="/Mclaren" exact Component={Mclaren} />
            <Route path="/Mercedes" exact Component={Mercedes} />
            <Route path="/Hongqi" exact Component={Hongqi} />
            <Route path="/Sports" exact Component={Sports} />
            <Route path="/FreeConcept11" exact Component={FreeConcept11} />
            <Route path="/FreeConcept3" exact Component={FreeConcept3} />
            <Route path="/Bugatti" exact Component={Bugatti} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
