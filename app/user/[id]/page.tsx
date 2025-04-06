"use client";

import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { Card, Button } from 'flowbite-react';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32 },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 24 },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com', age: 40 },
  { id: 5, name: 'Charlie White', email: 'charlie@example.com', age: 35 },
];

export default function UserDetails() {
  const params = useParams();
  const id = Number(params?.id);
  const user = users.find(user => user.id === id);

  useEffect(() => {
    if (user) {
      document.title = user.name; // Dynamically set the tab name to the user's name
    }
  }, [user]);

  if (!user) {
    return <p className="text-center text-red-500 text-xl font-bold mt-10">User not found</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card className="p-6 max-w-lg w-full shadow-lg rounded-lg bg-white">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{user.name}</h2>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="text-lg text-gray-700 dark:text-gray-400"><strong>Age:</strong> {user.age}</p>
        <div className="mt-6 flex justify-end">
          <Button color="blue" onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </Card>
    </div>
  );
}
