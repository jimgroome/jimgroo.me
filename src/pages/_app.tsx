import "../styles/globals.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import type { AppProps } from "next/app";
import { Bitter } from "next/font/google";

const bitter = Bitter({ weight: "500", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={bitter.className}>
      <Component {...pageProps} />
    </main>
  );
}
