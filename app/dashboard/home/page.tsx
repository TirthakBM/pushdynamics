"use client"

import { useAuth } from "@src/context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  console.log("User Data:", user);
  

  return (
    <div>Dashoard home page</div>
  )
}