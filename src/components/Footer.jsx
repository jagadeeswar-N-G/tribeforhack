import React from "react";
import logo from "../assets/_.png";

function Footer() {
  return (
    <div>
      <footer className="absolute bottom-0 w-full">
        <section>

        </section>
        <div className="bg-gray-700 relative py-4">
          <figure className="flex justify-center">
            <img src={logo} alt="logo" className="h-[100px] opacity-10 " />
          </figure>
          <div className="absolute bottom-0 left-[53%]">
            <p className="text-gray-300 italic py-3 font-brand text-xl">
              This site built and designed by Jagadeeswar | Copyright @
              2023.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
