import Head from "next/head";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { siBluesky, siGithub, siMaildotru } from "simple-icons";

type colour = "blue" | "green" | "pink" | "yellow";

const SocialIcon = ({ path, title }: { path: string; title: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    fill="currentColor"
  >
    <path d={path} />
  </svg>
);

const Home = () => {
  const colours: colour[] = ["blue", "green", "yellow", "pink"];
  const colour = colours[Math.floor(Math.random() * colours.length)];

  return (
    <div className={`page-container ${colour}`}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="Description"
          content="Jim Groome is a full-stack developer based in Cranbrook, Kent."
        />

        <meta name="theme-color" content="#ffffff" />
        <title>Jim Groome</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="7" lg="5">
            <div className="site-content">
              <h1 className="mb-4">Jim Groome</h1>
              <p>Full-stack developer based in Cranbrook, Kent.</p>
              <p>Loves React, TypeScript, Serverless, AWS, and hot drinks.</p>
              <div className="mb-0 social-links">
                <a
                  href="mailto:hello@jimgroo.me"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Email Jim"
                >
                  <SocialIcon path={siMaildotru.path} title="Email" />
                </a>
                <a
                  href="https://bsky.app/profile/jimgroo.me"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Bluesky profile"
                >
                  <SocialIcon path={siBluesky.path} title="Bluesky" />
                </a>
                <a
                  href="https://github.com/jimgroome"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="GitHub profile"
                >
                  <SocialIcon path={siGithub.path} title="GitHub" />
                </a>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Home;
