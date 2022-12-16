import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

import Layout from '../components/layout'
import Hero from '../components/hero'

import {programs} from '../programs.js'
import Programs from '../components/programs'
import GoogleMap from '../components/map'
import Reviews from '../lib/reviews'


export default function Home() {
  console.log(programs, "----")
  return (
    <Layout home>
      {/* <Script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBD_bbfkFt9A2XtL_P16AG1xEEAG1dqMUY &callback=initMap" /> */}
      <Head>
        <title>Adults &amp; Kids Jiu Jitsu Classes Lombard, IL| Team Kuma Jiu Jitsu</title>
        <meta name="description" content="Adults &amp; Kids Jiu Jitsu Classes Lombard, IL| Team Kuma Jiu Jitsu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-16 bg-white" >
        <div>
          <Hero />
        </div>
        <div className="text-black mt-24">
          <h2>Team Kuma Jiu Jitsu</h2>
          <p>Here at Team Kuma we are committed to helping each student attain their goals in Brazilian Jiu-Jitsu. We aim to create champions on and off the mat by supporting, encouraging and providing excellent instruction. Our Head Coach, Amir Behlil is patient, well-trained, experienced and ready to help you reach your goals.</p>
        </div>
        <GoogleMap />
        <Reviews />
        <Programs programs={programs} />
      </main>

      <footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </Layout>
  )
}
