import React, { useState } from "react";
import "./Grocery.css";
import { data } from "../Data/Data";

const Grocery = () => {
  const [food, setFood] = useState(data);
  const filterType = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div id="grocery" className="max-w-[1640px] m-auto px-4 py-3">
      <h1 className="text-blue-900 font-bold text-4xl text-center m-1 p-3">
        Best Grocery
      </h1>
      <div className="flex flex:col lg:flex-row justify-between">
        <div className="m-2">
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFood(data)}
              className=" px-3 bg-blue-900 text-white m-2 rounded-full hover:scale-105"
            >
              All
            </button>
            <button
              onClick={() => filterType("vegitable")}
              className="  px-3 bg-blue-900 text-white m-2 rounded-full hover:scale-105"
            >
              Vegitable
            </button>
            <button
              onClick={() => filterType("fruit")}
              className=" px-3 bg-blue-900 text-white m-2 rounded-full hover:scale-105"
            >
              Fruits
            </button>
            <button
              onClick={() => filterType("house grocery")}
              className=" px-3 bg-blue-900 text-white m-2 rounded-full hover:scale-105"
            >
              Home Grocery
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
        {food.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-blue-900 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
