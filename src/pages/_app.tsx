import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Bitter } from "next/font/google";

const bitter = Bitter({ weight: "500", subsets: ["latin"], variable: "--font-bitter" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${bitter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
