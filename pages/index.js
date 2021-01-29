import Head from "next/head";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

export default function Home({ containerClass }) {
  return (
    <div className={containerClass}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content="Jim Groome is a full-stack developer based in Cranbrook, Kent." />

        <meta name="theme-color" content="#ffffff" />
        <title>Jim Groome</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="7" lg="5">
            <div className="site-content">
              <h1 className="mb-4">Jim Groome</h1>
              <p>Full-stack developer based in Cranbrook, Kent.</p>
              <p>Loves HTML, CSS, JS, Python, AWS, JAMstack, and hot drinks.</p>
              <p className="mb-0">
                <a href="mailto:hello@jimgroo.me" rel="noopener noreferrer" target="_blank">
                  <span role="img" aria-label="Wave">
                    👋
                  </span>
                </a>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export async function getStaticProps(context) {
  const colours = ["blue", "green", "yellow", "pink"];

  const colour = colours[Math.floor(Math.random() * colours.length)];
  const containerClass = "page-container " + colour;
  return {
    props: {
      containerClass: containerClass,
    },
  };
}
