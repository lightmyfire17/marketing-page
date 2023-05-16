import "./globals.css";
import "./main.scss";

import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Nifty Apes",
  description: "Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
