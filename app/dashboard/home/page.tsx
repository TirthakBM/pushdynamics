"use client"

import { useAuth } from "@src/context/AuthContext";

export default function Home() {
  const { user } = useAuth();
  
  return (
    <div style={{color: "#FFFFFF"}}>Dashoard home page {user?.name}</div>
  )
}