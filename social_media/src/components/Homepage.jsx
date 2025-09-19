import React from "react";
import Post from "./Post";
import Popular from "./popular";

const Homepage = () => {
  return (
    <>
      <div>
        <marquee
          behavior=""
          direction="left"
          className="bg-red-500 text-white p-2"
        >
          This is announcement
        </marquee>
        <div className="flex flex-row ">
          <div className="w-[70%] h-full flex flex-col items-center justify-center">
            <Post />
            <Post />
            <Post />
          </div>
          <div className="flex flex-col items-center  ml-10 mt-10 right">
            <Popular />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
