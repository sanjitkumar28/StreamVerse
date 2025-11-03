import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
