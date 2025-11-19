async function getData() {
  const res = await fetch("/api/items");
  return res.json();
}

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <h1>Next.js + FastAPI</h1>
      <p>{data.message}</p>
    </div>
  );
}
