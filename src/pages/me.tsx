import Head from "next/head";
import Image from "next/image";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Colour, getRandomColour, pageThemeClassNames } from "../lib/theme";

const vcard = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Groome;Jim;;;",
  "FN:Jim Groome",
  "ADR;TYPE=HOME:;;3 Greenway;Cranbrook;Kent;TN17 3LL;UK",
  "TEL;TYPE=CELL:+447793679245",
  "EMAIL;TYPE=INTERNET:james@jgroome.com",
  "END:VCARD",
].join("\n");

const qrUrl = `/api/qr?${new URLSearchParams({
  text: vcard,
  size: "320",
  margin: "2",
  errorCorrectionLevel: "M",
  dark: "#000000",
  light: "#ffffff",
}).toString()}`;

type MePageProps = {
  colour: Colour;
};

const MePage = ({
  colour,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div
      className={`min-h-screen w-full px-4 pb-8 pt-4 ${pageThemeClassNames[colour]} [&_a]:text-[#212529] [&_a]:no-underline [&_a]:transition-colors`}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <title>Jim Groome</title>
      </Head>

      <div className="w-fit">
        <div className="bg-page p-4 shadow-card">
          <h1 className="mb-4 text-[2.5rem] leading-tight">Jim Groome</h1>

          <div className="mb-6 flex justify-center">
            <Image
              src={qrUrl}
              alt="QR code for Jim Groome contact card"
              width={320}
              height={320}
              className="rounded border border-black/20 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  MePageProps
> = async () => ({
  props: {
    colour: getRandomColour(),
  },
});

export default MePage;
