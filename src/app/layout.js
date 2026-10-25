import { Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "OVRIXA | High-Performance Sports & Athletic Gear",
  description: "Engineered for cricket, football, and multi-sport athletes.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="font-poppins bg-[#111111] text-white antialiased suppressHydrationWarning">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}