import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './Navbar.module.css'
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (<>
    <header className="w-full flex flex-row items-center justify-between py-9 px-7 md:px-32 sm:fixed relative bg-[#2c3e50]">
      <Link
        href="/"
        className="flex items-center h-10 uppercase text-2xl md:text-4xl font-extrabold  text-white"
      >
        Start React
      </Link>
      <nav className="hidden sm:flex justify-between items-center uppercase gap-4 font-semibold">
        <NavLink to="/about" className="text-white">
          About
        </NavLink>
        <NavLink to="/portfolio" className="text-white">
          Portfolio
        </NavLink>
        <NavLink to="/contact" className="text-white">
          Contact
        </NavLink>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold ">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <i className="fa-solid fa-circle-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
        {showMenu && (
          <>
            <ul className={style.mobilemenu}>
              <li>
                <NavLink to="/about" className="text-white">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="text-white">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-white">
                  Contact
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>

  </>
  )
}
