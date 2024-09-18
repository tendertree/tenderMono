"use client"
import React from 'react'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ComponentType } from 'react';


const Portal = dynamic<{}>(
  () => import('@feature/three/section/Portal').then((mod) => {
    const Component = mod.Portal as ComponentType<{}>;
    return Component;
  }),
  { ssr: false }
);


export default function YourComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  if (!isClient) {
    return null; // Avoid rendering on the server-side
  }

  return (
    <div>
			this
      <Portal />
    </div>
  );
}

