import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/matches" element={<h1>Matches</h1>} />
        <Route path="/live" element={<h1>Live</h1>} />
        <Route path="/favourites" element={<h1>Scorers</h1>} />
      </Routes>
    </>
  );
}

export default App;
