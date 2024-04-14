import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek Babbar — Software Engineer",
  description: "Abhishek Babbar is a software engineer based in India. He started his journey as an Intern with Digital Register and later switched to 364 Labs, Currently working with Urban Company, a startup based in Delhi, as a software engineer 2.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
