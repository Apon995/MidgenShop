import React from "react";

function Header() {
  return (
    <>
      <nav className="flex items-center justify-between py-4 px-[5%]">
        <h1 className="text-2xl text-black font-bold ">Midgen_shop</h1>
        <p className="text-xl font-bold">
          <i className="fa-solid fa-user"></i>
        </p>
      </nav>
    </>
  );
}

export default Header;
