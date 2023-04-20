import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import NavMenu from "./components/NavMenu"
import Link from 'next/link';
import { useRouter } from 'next/router';
import Home from "../pages/index"

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <header>
        <NavMenu />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
