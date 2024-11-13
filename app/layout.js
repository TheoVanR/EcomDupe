
import localFont from "next/font/local";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./globals.css";
import { CartProvider } from "./CartContext";
import { CustomerProvider } from "./CustomerContext";
import FontAwesomeConfig from "./fontawesome";

export const metadata = {
  title: "Ecom.exe",
  description: "E-com copy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{metadata.title}</title>
      <body>
        {/* Wrap everything in CartProvider */}
        <FontAwesomeConfig />
        <CartProvider>
          <CustomerProvider>

            <Header />
            {children}
            <Footer />
          </CustomerProvider>
        </CartProvider>

      </body>
    </html>
  );
}

