"use client"

import { useRouter } from 'next/navigation';
import { Card } from 'flowbite-react';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32 },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 24 },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com', age: 40 },
  { id: 5, name: 'Charlie White', email: 'charlie@example.com', age: 35 },
];

export default function UserList() {
  const router = useRouter();

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map(user => (
        <Card key={user.id} className="cursor-pointer" onClick={() => router.push(`/user/${user.id}`)}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
          <p className="text-gray-700 dark:text-gray-400">{user.email}</p>
          <p className="text-gray-700 dark:text-gray-400">Age: {user.age}</p>
        </Card>
      ))}
    </div>
  );
}
