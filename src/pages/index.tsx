'use client'

import Head from 'next/head';
import Chatbot from "./components/Chatbot"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const router = useRouter();


  useEffect(() => {
    console.log("Hello from index.dfdsfdsfdssfdsdsfsdtsx")
  }, []);

  // useEffect(() => {
  //   router.push('/ai-chatbot-concessions');
  // }, []);


  return (
    <div className="main-container">
      <Head>
        <title>My Next.js App with Iframe and Image</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main-content">
        <Chatbot />
      </main>
      <Footer />

      {/* <footer className="text-center py-2">
        <p>Team GigaHurts</p>
      </footer> */}
    </div>
  );
}