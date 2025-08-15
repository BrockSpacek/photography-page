import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white h-20">
      <div className="grid grid-cols-12 items-center h-full">
        <h1 className="col-start-1 col-span-1 text-center text-2xl">
          Kate Heleen Photography
        </h1>
        <div className="col-start-7 col-span-6 text-xl items-center flex justify-evenly">
        <h2>About</h2>
        <h2>Collections</h2>
        <h2>Portfolio</h2>
        <h2>Prices</h2>
        <h2>Contact</h2>
        <Image
          src="/instagram.svg"
          alt="instagram icon"
          width={42}
          height={42}
        />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
