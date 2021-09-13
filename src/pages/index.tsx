import Head from "next/head";

import { SliderFullWidth } from "../components/SliderFullWidth";
import { SliderSwiper } from "../components/SliderSwiper";
import { Footer } from "../components/Footer";
import { Newsletter } from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Go Beyond</title>
      </Head>
      <main>
        <SliderFullWidth />
        <SliderSwiper />
        <Newsletter />
        <Footer />
      </main>
    </>
  )
}
