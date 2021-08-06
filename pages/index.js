import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="description" content="Ninjas like so." />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage🏡</h1>
        <p className={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error nisi ipsum consequuntur quod eum soluta neque temporibus quidem assumenda, facere sapiente, pariatur earum doloremque voluptatibus accusantium quia, accusamus in? </p>
        <p className={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error nisi ipsum consequuntur quod eum soluta neque temporibus quidem assumenda, facere sapiente, pariatur earum doloremque voluptatibus accusantium quia, accusamus in? </p>

        <Link href="/ninjas">
          <a className={styles.btn}> See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
