import Head from "next/head";
import { SimpleSlider } from "../components/SimpleSlider";
import { Card } from "../components/Card";

import styles from "./home.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>Go Beyond</title>
      </Head>
      <main className={styles.contentContainer}>
        <SimpleSlider />
        <Card />
      </main>
    </>
  )
}
