import {
  Inter as FontSans,
  Inter,
  Core_Sans_c,
  Roboto,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
