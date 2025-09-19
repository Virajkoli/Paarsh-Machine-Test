import React from "react";

const Post = () => {
  return (
    <div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-400 dark:border-gray-500 mb-10">
        <a href="#">
          <img class="rounded-t-lg" src="post.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Post Caption
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-900 dark:text-gray-900">
            Description.
          </p>
          <div class="flex items-center space-x-4">
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            Like
          </a>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-blue-800"
          >
            Comment
          </a>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800"
          >
            Share
          </a>
          </div>
            <div class="mt-4 text-sm text-gray-500 dark:text-gray-900">
                Posted by <span class="font-medium">User123</span> on <span class="font-medium">2024-06-01</span>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
