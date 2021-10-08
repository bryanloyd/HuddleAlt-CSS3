import React from "react";
import Conversations from "./components/Conversations";
import Header from "./components/Header";
import Together from "./components/Together";
import Users from "./components/Users";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Together />
      <Conversations />
      <Users />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
