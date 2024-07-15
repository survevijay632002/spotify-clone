import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import Ablumitems from "./Ablumitems";
import { songsData } from "../assets/assets";
import "../index.css";
import Songsitems from "./Songsitems";
import Footer from "./footer";

const DisplayHome = () => {
  return (
    <div>
      {" "}
      <div className="mb-4">
        <h1 className="my-5 flex flex-row font-bold text-2xl">
          Featured Charts
        </h1>
        <div className="flex overflow-auto">
          {albumsData.map((items, index) => {
            return (
              <Ablumitems
                key={index}
                name={items.name}
                desc={items.desc}
                id={items.id}
                image={items.image}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 flex flex-row font-bold text-2xl">
          Today's biggest hits
        </h1>
        <div className="flex overflow-y-scroll">
          {songsData.map((items, index) => (
            <Songsitems
              key={index}
              name={items.name}
              id={items.id}
              desc={items.desc}
              images={items.image}
            />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DisplayHome;
