import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-6">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-lg md:text-xl">
          CS — Ticket System
        </a>
      </div>
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
          <li>
            <button className="bg-[#422AD5] btn btn-sm text-white">
              <i className="fa-solid fa-plus mr-1"></i> New Ticket
            </button>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <i className="fa-solid fa-bars text-xl"></i>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow-lg mt-3 w-52 z-[10]"
        >
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
          <li>
            <button className="bg-[#422AD5] btn btn-sm text-white mt-2">
              <i className="fa-solid fa-plus mr-1"></i> New Ticket
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
