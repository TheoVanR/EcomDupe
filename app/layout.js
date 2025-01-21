import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./globals.css";
import { CartProvider } from "./Providers/Cart";
import { CustomerProvider } from "./Providers/Customer";
import { ProductProvider } from "./Providers/Product";
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
        <ProductProvider>
          <CartProvider>
            <CustomerProvider>
              <Header />
              {children}
              <Footer />
            </CustomerProvider>
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
