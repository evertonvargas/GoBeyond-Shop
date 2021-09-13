import { AppProps } from "next/app";

import { Header } from "../components/Header";
import { MenuOpenCloseProvider } from "../hooks/useMenu";
import { CartProvider } from "../hooks/useCart";

import "../styles/global.scss";
import "../styles/swiper.scss";
import "../styles/navigation.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <MenuOpenCloseProvider>
        <Header />
        <Component {...pageProps} />
      </MenuOpenCloseProvider>
    </CartProvider>
  );
}

export default MyApp;
