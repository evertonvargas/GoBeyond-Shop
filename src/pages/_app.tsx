import { AppProps } from 'next/app'
import { Header } from '../components/Header'

import { MenuOpenCloseProvider } from "../hooks/useMenu"

import "../styles/global.scss";
import "../styles/swiper.scss";
import "../styles/navigation.scss";
import "../styles/scrollbar.scss";
import "../styles/pagination.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuOpenCloseProvider>
      <Header />
      <Component {...pageProps} />
    </MenuOpenCloseProvider>
    )
}

export default MyApp
