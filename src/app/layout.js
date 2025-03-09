// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./clientLayout"; // Import the client layout

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ontee Pakistan",
  description: "Pakistan Best Clothing Store",
   viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout> {/* Wrap only children in ClientLayout */}
      </body>
    </html>
  );
}
