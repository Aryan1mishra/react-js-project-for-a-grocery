import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="text-blue-900">
      <div className="max-w-[800px] mt-[180px] w-full h-screen mx-auto text-centre flex flex-col justify-centre items-center">
        <h1 className="p-2 font-bold md:text-6xl sm:text-6xl text-3xl text-blue-900  md:py-6">
          GET<span className="text-red-500"> FRESH </span>GROCERY</h1>
        <div>
          <p className="p-2 font-semibold md:text-2xl sm:text-2xl text-xl  md:py-6">
            FAST, HYGENIC, DEILIVERY TO{" "}
            <span className="typewriter nocaret"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
