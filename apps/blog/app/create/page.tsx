"use client"
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const handleCreateFile = async () => {
    try {
      const response = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename: 'example.txt', content: 'Hello, World!' }),
      });
      
      if (response.ok) {
        setMessage('File created successfully!');
      } else {
        setMessage('Failed to create file.');
      }
    } catch (error) {
      setMessage('Error: ' + error);
    }
  };

  return (
    <div>
      <button onClick={handleCreateFile}>Create File</button>
      <p>{message}</p>
    </div>
  );
}
