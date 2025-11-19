"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("/api/")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("API Error"));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Next.js + FastAPI</h1>
      <p>Backend says: {msg}</p>
    </div>
  );
}
