"use client";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Image as ThreeImg, Text } from "@react-three/drei";
import { api } from "~/shared/utils/trpc/react";
import { useControls } from "leva";
import type { FigmaUsersResponse } from "~/server/pocketbase-schema";

const Img = ({ url }: { url: string }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setLoaded(true);
    };
  }, [url]);

  return loaded ? <ThreeImg url={url} position={[0, 0, 0.55]} /> : null;
};
const Time = () => {
  const users = api.time.users.useQuery();
  console.log(`users`, users);

  const camera = useControls({
    position: {
      value: [0, 0, 0],
      step: 0.1,
    },
    rotation: {
      value: [0, 0, 0],
      step: 0.1,
    },
  });
  // group users by day
  const days = useMemo(() => {
    const days: Record<string, FigmaUsersResponse<unknown>[]> = {};
    users.data?.items.forEach((user) => {
      const day = new Date(user.created).toDateString();
      if (!days[day]) {
        days[day] = [];
      } else {
        days[day]?.push(user);
      }
    });
    return days;
  }, [users.data?.items]);
  return (
    <div className="w-screen h-screen bg-black/90">
      <Canvas>
        <CameraControls />
        <ambientLight intensity={0.5} />
        <group>
          {/* from top to bottom vertical */}
          {Object.entries(days).map(([day, users], i) => {
            return (
              <group key={i} position={[0, -i * 2, 0]}>
                <Text
                  color="white"
                  fontSize={0.5}
                  position={[-5, 0, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  anchorX="center"
                  anchorY="middle"
                >
                  {day}
                </Text>
                {/* users as box on top of each other */}
                {users.map((user, i) => {
                  return (
                    <group key={i} position={[i * 2, 0, 0]}>
                      {/* box for each user */}
                      <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={user.color} />
                        {/* image on one of faces */}
                        <Suspense fallback={null}>
                          <Img url={`http://localhost:3000/_next/image?url=${user.photo}&w=100&q=75`} />
                        </Suspense>
                      </mesh>
                    </group>
                  );
                })}
              </group>
            );
          })}
        </group>
      </Canvas>
    </div>
  );
};

export default Time;
