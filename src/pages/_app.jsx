import "swiper/css/bundle";
import "../styles/global.css";

import Head from "next/head";
import { Theme } from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
