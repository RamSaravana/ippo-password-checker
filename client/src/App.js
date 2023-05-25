import "./App.css";
import React from "react";
import HomePage from "./pages/home";
import Header from "./pages/home/header";

function App() {
  return (
    <div className="App" data-testid={`main-comp`}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
