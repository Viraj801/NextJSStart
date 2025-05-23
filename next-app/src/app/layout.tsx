import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header 
         style={{
          fontSize: "2rem",
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "ghostwhite",
        }}>
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{
          fontSize: "2rem",
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "lightblue"}}
        >
        <p>Footer</p></footer>
      </body>
    </html>
  );
}
