"use client"
import React from 'react'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import your Quill component to ensure it's loaded only in the client-side
const QuillEditor = dynamic(() => import('@feature/quill/src/Editor'), { ssr: false });

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
      <QuillEditor />
    </div>
  );
}

