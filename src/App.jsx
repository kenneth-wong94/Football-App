import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import mockMatches from "./mockMatches";
import Home from "./components/Home";

function App() {
  const matchesArr = mockMatches[0].matches;
  const [matches, setMatches] = useState(matchesArr);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home matches={matches} />} />
        <Route path="/matches" element={<h1>Matches</h1>} />
        <Route path="/live" element={<h1>Live</h1>} />
        <Route path="/favourites" element={<h1>Scorers</h1>} />
      </Routes>
    </>
  );
}

export default App;
