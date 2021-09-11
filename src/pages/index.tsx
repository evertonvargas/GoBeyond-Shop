import Head from "next/head";
import { SliderFullWidth } from "../components/SliderFullWidth";

import { SliderProducts } from "../components/SliderProducts";
import { News } from "../components/News";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Go Beyond</title>
      </Head>
      <main>
        <SliderFullWidth />
        <SliderProducts />
        <News />
        <Footer />
      </main>
    </>
  )
}
