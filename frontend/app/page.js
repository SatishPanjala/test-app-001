export default async function Home() {
  const res = await fetch("https://test-app-001.vercel.app/backend/items");
  const data = await res.json();

  return (
    <div>
      <h1>Welcome Page</h1>
      <p>Backend says: {data.message}</p>
    </div>
  );
}
