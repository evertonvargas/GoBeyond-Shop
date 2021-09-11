import Head from "next/head";
import { SliderFullWidth } from "../components/SliderFullWidth";

import styles from "./home.module.scss"
import { SliderProducts } from "../components/SliderProducts";
import { News } from "../components/News";

export default function Home() {
  return (
    <>
      <Head>
        <title>Go Beyond</title>
      </Head>
      <main className={styles.contentContainer}>
        <SliderFullWidth />
        <SliderProducts />
        <News />
      </main>
    </>
  )
}
