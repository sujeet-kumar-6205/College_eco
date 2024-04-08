import React from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Search from "./Components/SearchBar";
import Partners from "./Components/Partners";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Header />
      <Nav />
      <Search />
      <Partners />
    </div>
  );
}

export default Home;
