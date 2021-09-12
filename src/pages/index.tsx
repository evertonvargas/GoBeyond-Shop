import Head from "next/head";
import { SliderFullWidth } from "../components/SliderFullWidth";

import { News } from "../components/News";
import { Footer } from "../components/Footer";
import { SliderSwiper } from "../components/SliderSwiper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Go Beyond</title>
      </Head>
      <main>
        <SliderFullWidth />
        <SliderSwiper />
        <News />
        <Footer />
      </main>
    </>
  )
}
