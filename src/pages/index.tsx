import Head from "next/head";

import { SliderFullWidth } from "../components/SliderFullWidth";
import { SliderSwiper } from "../components/SliderSwiper";
import { Footer } from "../components/Footer";
import { News } from "../components/News";

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
