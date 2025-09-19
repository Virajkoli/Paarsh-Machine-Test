import React, { useState } from "react";

const Profile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    username: "Viraj Koli",
    bio: "Tech enthusiast",
    location: "Jalgaon",
    joinDate: "Sept 2025",
    website: "www.virajkoli.com",
  });

  const friends = [
    {
      id: 1,
      name: "Rahul Brahmane Johnson",
    },
    {
      id: 2,
      name: "Pallavi Patil",
    },
    {
      id: 3,
      name: "Shubham Badgujar",
    },
    {
      id: 4,
      name: "Pratik Nikam",
    },
    {
      id: 5,
      name: "Durgesh Patil",
    },
  ];

  const userPosts = [
    {
      id: 1,
      caption: "Beautiful sunset today!",
      description: "Had an amazing day hiking up the mountains!",
      image: "post.jpg",
      date: "2024-09-18",
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      caption: "Coffee and code",
      description: "Working on some exciting new features!",
      image: "post.jpg",
      date: "2025-09-17",
      likes: 18,
      comments: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="h-32"></div>
        <div className="max-w-6xl mx-auto px-4 pb-6">
          <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 relative z-10">
            <div className="mb-4 md:mb-0">
              <img
                src="/person_icon.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
            </div>

            <div className="md:ml-6 flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {profileData.username}
                  </h1>
                  <p className="text-gray-600 mt-2 max-w-md">
                    {profileData.bio}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      {profileData.location}
                    </span>
                    <span className="flex items-center">
                      Joined {profileData.joinDate}
                    </span>
                    {profileData.website && (
                      <span className="flex items-center">
                        {profileData.website}
                      </span>
                    )}
                  </div>
                </div>

                <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Friends ({friends.length})
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {friends.map((friend) => (
                  <div key={friend.id} className="text-center">
                    <img
                      src="/person_icon.jpg"
                      alt={friend.name}
                      className="w-12 h-12 rounded-lg mx-auto mb-2"
                    />
                    <p className="text-xs text-gray-600 truncate">
                      {friend.name}
                    </p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
                See All Friends
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Posts
              </h3>

              {userPosts.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No posts yet. Share something!</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {userPosts.map((post) => (
                    <div
                      key={post.id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <img
                        src={post.image}
                        alt={post.caption}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {post.caption}
                        </h4>
                        <p className="text-gray-600 mb-3">{post.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
                              <span>{post.likes}</span>
                            </button>

                            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700">
                              <span>{post.comments}</span>
                            </button>
                          </div>

                          <span className="text-sm text-gray-500">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
