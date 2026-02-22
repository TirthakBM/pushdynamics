"use client"

import { useAuth } from "@context/AuthContext"

export default function Home() {
  const { user } = useAuth();

  console.log(user);
  

  return (
    <div style={{color: "#FFFFFF"}}>Dashoard home page {user?.name}</div>
  )
}