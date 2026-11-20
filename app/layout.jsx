import "./globals.css";

export const metadata = {
  title: "Venkata Sai Kartheek Mulukutla | Interstellar Portfolio — AI & Systems Engineer",
  description:
    "Interactive Interstellar-themed portfolio of Venkata Sai Kartheek Mulukutla. Specializing in Agentic AI Systems, Distributed Backends, Anomaly Detection ML, Blockchain, and Full-Stack Engineering.",
  keywords: [
    "Venkata Sai Kartheek Mulukutla",
    "Sai Kartheek",
    "AI Engineer",
    "Backend Developer",
    "Interstellar Portfolio",
    "Next.js",
    "FastAPI",
    "PyTorch",
    "SRMIST",
    "Blockchain",
  ],
  authors: [{ name: "Venkata Sai Kartheek Mulukutla" }],
  icons: {
    icon: "/logo1.png",
  },
  openGraph: {
    title: "Venkata Sai Kartheek Mulukutla | Interstellar Portfolio",
    description:
      "Explore the frontiers of Agentic AI, Distributed Backend Systems, and Blockchain engineering with an interactive Interstellar journey.",
    url: "https://saikartheek.vercel.app",
    siteName: "Sai Kartheek Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#030712" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030712] text-zinc-100 antialiased font-sans">{children}</body>
    </html>
  );
}
