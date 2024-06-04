"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/services/user";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUser();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="w-full h-full bg-[#141414] overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <UserList />
      </div>
    </main>
  );
}
