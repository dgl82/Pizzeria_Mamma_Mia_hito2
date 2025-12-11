import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      <RegisterPage></RegisterPage>
      <Footer></Footer>
    </>
  );
}

export default App;
