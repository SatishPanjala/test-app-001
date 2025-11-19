export const metadata = {
  title: "Next.js + FastAPI",
  description: "Frontend connected to Python FastAPI backend"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
