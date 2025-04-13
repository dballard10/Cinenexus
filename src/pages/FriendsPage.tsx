import { Navigation } from "@/components/page-components/Navigation";
import { useState } from "react";
import defaultProfilePic from "@/assets/default-profile-pic.webp";
import { Input } from "@/components/ui/input";
import { TbSearch, TbUserPlus } from "react-icons/tb";

// Mock data for friends
const mockFriends = [
  {
    id: 1,
    name: "Jane Cooper",
    username: "@janecooper",
    avatar: defaultProfilePic,
    mutualShows: 12,
  },
  {
    id: 2,
    name: "Alex Johnson",
    username: "@alexj",
    avatar: defaultProfilePic,
    mutualShows: 8,
  },
  {
    id: 3,
    name: "Maria Garcia",
    username: "@mariagarcia",
    avatar: defaultProfilePic,
    mutualShows: 15,
  },
];

const FriendsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <Navigation />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Friends</h1>
          <div className="max-w-3xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Input
                type="text"
                placeholder="Search friends..."
                className="pl-10 bg-gray-800/50 border-gray-700 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <TbSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Friends List */}
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
              <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  Your Friends ({mockFriends.length})
                </h2>
                <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
                  <TbUserPlus className="w-5 h-5" />
                  <span>Add Friend</span>
                </button>
              </div>

              {mockFriends.length > 0 ? (
                <div className="divide-y divide-gray-700/50">
                  {mockFriends.map((friend) => (
                    <div
                      key={friend.id}
                      className="p-4 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={friend.avatar}
                          alt={friend.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{friend.name}</p>
                          <p className="text-sm text-gray-400">
                            {friend.username}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Mutual Shows</p>
                          <p className="font-medium text-purple-400">
                            {friend.mutualShows}
                          </p>
                        </div>
                        <button className="text-gray-400 hover:text-white px-2 py-1 rounded transition-colors">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-400">
                  <p className="text-xl mb-2">No friends yet</p>
                  <p>
                    Add some friends to see their activity and recommendations
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FriendsPage;
