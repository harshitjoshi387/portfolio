import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScroll";

export const metadata = {
  title: "portfolio",
  description: "my portfolio project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}