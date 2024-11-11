
import localFont from "next/font/local";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./globals.css";
import { CartProvider } from "./CartContext";
import { CustomerProvider } from "./CustomerContext";


export const metadata = {
  title: "Ecom.exe",
  description: "E-com copy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap everything in CartProvider */}
        <CartProvider>
          <CustomerProvider>

            <Navbar />
            {children}
            <Footer />
          </CustomerProvider>
        </CartProvider>

      </body>
    </html>
  );
}

