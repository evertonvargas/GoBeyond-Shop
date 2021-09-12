import { AppProps } from 'next/app'
import { Header } from '../components/Header'

import "../styles/global.scss";
import "../styles/swiper.scss";
import "../styles/navigation.scss";
import "../styles/scrollbar.scss";
import "../styles/pagination.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
