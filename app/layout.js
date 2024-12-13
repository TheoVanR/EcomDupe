// app/layout.js or pages/_app.js (depending on your Next.js version)
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./globals.css";
import { CartProvider } from "./CartContext";
import { CustomerProvider } from "./CustomerContext";
import { FavoritesProvider } from "./FavoriteContext";
import FontAwesomeConfig from "./fontawesome";

export const metadata = {
  title: "Ecom.exe",
  description: "E-com copy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
      <body>
        <FontAwesomeConfig />
        <CartProvider>
          <CustomerProvider>
            <FavoritesProvider>
              <Header />
              {children}
              <Footer />
            </FavoritesProvider>
          </CustomerProvider>
        </CartProvider>
      </body>
    </html>
  );
}
