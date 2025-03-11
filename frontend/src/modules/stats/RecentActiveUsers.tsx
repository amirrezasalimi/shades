import React, { useState } from "react";
import Image from "next/image";
import { api } from "~/shared/utils/trpc/react";

// Helper function to format relative time
const getRelativeTime = (timestamp: string): string => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffMs = now.getTime() - past.getTime();

  // Convert to seconds
  const diffSec = Math.floor(diffMs / 1000);

  // Less than a minute
  if (diffSec < 60) {
    return `${diffSec}s ago`;
  }

  // Less than an hour
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) {
    return `${diffMin}min ago`;
  }

  // Less than a day
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) {
    return `${diffHour}h ago`;
  }

  // Less than a week
  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 7) {
    return `${diffDay}d ago`;
  }

  // Otherwise show week count
  const diffWeek = Math.floor(diffDay / 7);
  return `${diffWeek}w ago`;
};

const RecentActiveUsers = () => {
  const [userCount, setUserCount] = useState<60 | 100 | 200>(60);

  const { data, isLoading, error } = api.time.recentActiveUsers.useQuery({
    count: userCount,
  });

  if (isLoading) {
    return (
      <div className="bg-white/5 backdrop-blur-sm p-4 border border-white/10 rounded-lg text-gray-300">
        Loading recent users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 backdrop-blur-sm p-4 border border-red-500/30 rounded-lg text-red-300">
        Error loading users: {error.message}
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm p-4 border border-white/10 rounded-lg">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setUserCount(60)}
          className={`px-4 py-2 rounded transition-colors ${
            userCount === 60
              ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
              : "bg-white/10 text-gray-300 hover:bg-white/15"
          }`}
        >
          60 Users
        </button>
        <button
          onClick={() => setUserCount(100)}
          className={`px-4 py-2 rounded transition-colors ${
            userCount === 100
              ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
              : "bg-white/10 text-gray-300 hover:bg-white/15"
          }`}
        >
          100 Users
        </button>
        <button
          onClick={() => setUserCount(200)}
          className={`px-4 py-2 rounded transition-colors ${
            userCount === 200
              ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
              : "bg-white/10 text-gray-300 hover:bg-white/15"
          }`}
        >
          200 Users
        </button>
      </div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-3 border border-white/10 rounded-lg transition-colors"
          >
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt={user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-violet-600 rounded-full w-10 h-10 text-white">
                {user.name.substring(0, 1).toUpperCase()}
              </div>
            )}
            <div>
              <p className="font-medium text-white">{user.name}</p>
              <p className="text-gray-400 text-sm">
                Active {getRelativeTime(user.lastActive)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-gray-400 text-sm">
        Showing {data?.length} recently active unique users
      </p>
    </div>
  );
};

export default RecentActiveUsers;
