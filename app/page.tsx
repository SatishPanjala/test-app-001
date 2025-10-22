export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "white",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉 Welcome!</h1>
      <p style={{ fontSize: "1.5rem", maxWidth: "600px" }}>
        This is a minimal Next.js welcome page, ready to deploy on Vercel.
      </p>
      <a
        href="https://nextjs.org/docs"
        target="_blank"
        style={{
          marginTop: "2rem",
          backgroundColor: "white",
          color: "#764ba2",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Learn Next.js →
      </a>
    </main>
  );
}
 
