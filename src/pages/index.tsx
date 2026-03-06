import Head from "next/head";
import { siBluesky, siGithub, siMaildotru } from "simple-icons";
import { getRandomColour, pageThemeClassNames } from "../lib/theme";

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
  const colour = getRandomColour();

  return (
    <div
      className={`min-h-screen w-full px-4 pb-8 pt-4 ${pageThemeClassNames[colour]} [&_a]:text-[#212529] [&_a]:no-underline [&_a]:transition-colors`}
    >
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
      <div className="max-w-[720px]">
        <div className="bg-page p-4 shadow-card">
          <h1 className="mb-4 text-[2.5rem] leading-tight">Jim Groome</h1>
          <p className="mb-4">Full-stack developer based in Cranbrook, Kent.</p>
          <p className="mb-4">
            Loves React, TypeScript, Serverless, AWS, and hot drinks.
          </p>
          <div className="mb-0 flex items-center gap-3">
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
      </div>
    </div>
  );
};

export default Home;
