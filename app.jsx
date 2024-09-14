import React from "react";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <div
        className="fixed w-screen h-screen bg-cover bg-center  overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="pt-10 ">
          <Navbar />
        </div>
        <div className="text-white text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif" > Fast Finder Search Bar</div>
        
      </div>
    </>
  );
}
