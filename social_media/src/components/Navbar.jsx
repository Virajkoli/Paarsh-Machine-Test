import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-row justify-between items-center p-4 bg-blue-500 text-white h-16">
        <li>
          <Link to="/" className="flex items-center h-12 w-12">
            <img src="logo.png" alt="Logo" />
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-blue-200 transition-colors">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/friends" className="hover:text-blue-200 transition-colors">
            Friends
          </Link>
        </li>
        <li>
          <Link
            to="/messages"
            className="hover:text-blue-200 transition-colors"
          >
            Messages
          </Link>
        </li>
        <li>
          <Link
            to="/notifications"
            className="hover:text-blue-200 transition-colors"
          >
            Notifications
          </Link>
        </li>
        <li>
          <input
            className="px-4 py-2 rounded-lg text-gray-800"
            type="text"
            placeholder="Search Here"
          />
        </li>
        <li>
          <button className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
