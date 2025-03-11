import React, { useState, useEffect } from "react";
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

// Helper function to check if user is new (joined less than 1 day ago)
const isNewUser = (timestamp: string): boolean => {
  const now = new Date();
  const created = new Date(timestamp);
  const diffMs = now.getTime() - created.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);
  return diffHours < 24;
};

const RecentActiveUsers = () => {
  const [userCount, setUserCount] = useState<60 | 100 | 200>(60);
  const [currentBatch, setCurrentBatch] = useState<string[]>([]);
  const [allUserStats, setAllUserStats] = useState<
    Record<string, { palettes: number; views: number; forks: number }>
  >({});

  const {
    data: users,
    isLoading,
    error,
  } = api.time.recentActiveUsers.useQuery({
    count: userCount,
  });

  // Query for user statistics in batches of 20
  const BATCH_SIZE = 20;
  const { data: userStatsData } = api.time.userStats.useQuery(
    { userIds: currentBatch },
    { enabled: currentBatch.length > 0 }
  );

  // Process users in batches
  useEffect(() => {
    if (!users || users.length === 0) return;

    // Reset stats when user count changes
    if (Object.keys(allUserStats).length === 0) {
      const userIds = users.map((user) => user.id);

      // Process in batches
      const processNextBatch = (startIndex = 0) => {
        if (startIndex >= userIds.length) return;

        const endIndex = Math.min(startIndex + BATCH_SIZE, userIds.length);
        const batch = userIds.slice(startIndex, endIndex);

        setCurrentBatch(batch);
      };

      processNextBatch(0);
    }
  }, [users]);

  // Update all stats when a batch completes
  useEffect(() => {
    if (userStatsData && Object.keys(userStatsData).length > 0) {
      setAllUserStats((prev) => ({
        ...prev,
        ...userStatsData,
      }));

      // Process next batch if needed
      if (users) {
        const userIds = users.map((user) => user.id);
        const processedIds = [...currentBatch, ...Object.keys(allUserStats)];
        const remainingIds = userIds.filter((id) => !processedIds.includes(id));

        if (remainingIds.length > 0) {
          const nextBatch = remainingIds.slice(0, BATCH_SIZE);
          setCurrentBatch(nextBatch);
        } else {
          // Clear current batch when all are processed
          setCurrentBatch([]);
        }
      }
    }
  }, [userStatsData]);

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

  const isLoadingStats = currentBatch.length > 0;

  return (
    <div className="bg-white/5 backdrop-blur-sm p-4 border border-white/10 rounded-2xl">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => {
            setUserCount(60);
            setAllUserStats({});
          }}
          className={`px-4 py-2 rounded transition-colors ${
            userCount === 60
              ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
              : "bg-white/10 text-gray-300 hover:bg-white/15"
          }`}
        >
          60 Users
        </button>
        <button
          onClick={() => {
            setUserCount(100);
            setAllUserStats({});
          }}
          className={`px-4 py-2 rounded transition-colors ${
            userCount === 100
              ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
              : "bg-white/10 text-gray-300 hover:bg-white/15"
          }`}
        >
          100 Users
        </button>
        <button
          onClick={() => {
            setUserCount(200);
            setAllUserStats({});
          }}
          className={`px-4 py-2 rounded transition-colors ${
            userCount === 200
              ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
              : "bg-white/10 text-gray-300 hover:bg-white/15"
          }`}
        >
          200 Users
        </button>

        {isLoadingStats && (
          <div className="flex items-center text-blue-400 text-sm">
            Loading stats... ({Object.keys(allUserStats).length}/
            {users?.length ?? 0} users)
          </div>
        )}
      </div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users?.map((user) => (
          <div
            key={user.id}
            className="relative flex flex-col bg-white/5 hover:bg-white/10 p-4 border border-white/10 rounded-lg transition-colors"
          >
            {/* Join date display in top right */}
            {user.created && (
              <div className="top-2 right-2 absolute flex items-center text-gray-400 text-xs">
                {isNewUser(user.created) && (
                  <span className="bg-orange-500 mr-2 px-1.5 py-0.5 rounded font-semibold text-[10px] text-white">
                    NEW
                  </span>
                )}
                Joined {getRelativeTime(user.created)}
              </div>
            )}
            <div className="flex items-center gap-3 mb-3">
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
              <div className="flex-1">
                <p className="font-medium text-white">{user.name}</p>
                <p className="text-gray-400 text-sm">
                  Active {getRelativeTime(user.lastActive)}
                </p>
              </div>
            </div>

            {/* User Stats Section */}
            <div className="gap-2 grid grid-cols-3 mt-2 text-xs text-center">
              <div className="bg-white/5 p-2 rounded">
                <div className="font-semibold text-blue-400">
                  {allUserStats[user.id]?.palettes ?? "-"}
                </div>
                <div className="text-gray-400">Palettes</div>
              </div>
              <div className="bg-white/5 p-2 rounded">
                <div className="font-semibold text-violet-400">
                  {allUserStats[user.id]?.views ?? "-"}
                </div>
                <div className="text-gray-400">Views</div>
              </div>
              <div className="bg-white/5 p-2 rounded">
                <div className="font-semibold text-purple-400">
                  {allUserStats[user.id]?.forks ?? "-"}
                </div>
                <div className="text-gray-400">Forks</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-gray-400 text-sm">
        Showing {users?.length} recently active unique users
      </p>
    </div>
  );
};

export default RecentActiveUsers;
