"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  const callAPI = async () => {
    const res = await fetch("/api/items");
    const json = await res.json();
    setData(JSON.stringify(json));
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Next.js + FastAPI</h1>
      <button
        onClick={callAPI}
        style={{ padding: "10px 20px", fontSize: 18 }}
      >
        Call FastAPI
      </button>

      <pre style={{ marginTop: 20 }}>{data}</pre>
    </main>
  );
}
