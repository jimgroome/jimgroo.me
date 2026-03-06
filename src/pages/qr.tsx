import Head from "next/head";
import { FormEvent, useMemo, useState } from "react";
import { getRandomColour, pageThemeClassNames } from "../lib/theme";
import Image from "next/image";

type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";

type FormState = {
  text: string;
  size: number;
  margin: number;
  errorCorrectionLevel: ErrorCorrectionLevel;
  dark: string;
  light: string;
};

const isHexColour = (value: string) =>
  /^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);

const normaliseHexForColourInput = (value: string, fallback: string) =>
  isHexColour(value) ? value : fallback;

const initialState: FormState = {
  text: "https://jimgroo.me",
  size: 320,
  margin: 2,
  errorCorrectionLevel: "M",
  dark: "#000000",
  light: "#ffffff",
};

const inputBaseClassName =
  "mt-2 w-full rounded border border-black/20 bg-white px-3 py-2 text-base text-[#212529] outline-none transition-shadow focus:border-black/60 focus:ring-2 focus:ring-black/20";

const labelClassName = "text-sm";

const QrPage = () => {
  const colour = useMemo(() => getRandomColour(), []);
  const [formState, setFormState] = useState<FormState>(initialState);
  const [qrUrl, setQrUrl] = useState<string>("");
  const darkColourInputValue = normaliseHexForColourInput(
    formState.dark,
    "#000000"
  );
  const lightColourInputValue = normaliseHexForColourInput(
    formState.light,
    "#ffffff"
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams({
      text: formState.text,
      size: String(formState.size),
      margin: String(formState.margin),
      errorCorrectionLevel: formState.errorCorrectionLevel,
      dark: formState.dark,
      light: formState.light,
    });
    setQrUrl(`/api/qr?${params.toString()}`);
  };

  return (
    <div
      className={`min-h-screen w-full px-4 pb-8 pt-4 ${pageThemeClassNames[colour]} [&_a]:text-[#212529] [&_a]:no-underline [&_a]:transition-colors`}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content="QR code generator." />
        <meta name="theme-color" content="#ffffff" />
        <title>QR code generator</title>
      </Head>

      <div className="max-w-[860px]">
        <div className="bg-page p-4 shadow-card">
          <h1 className="mb-4 text-[2.5rem] leading-tight">
            QR code generator
          </h1>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="text" className={labelClassName}>
                Text / URL
              </label>
              <input
                id="text"
                className={inputBaseClassName}
                value={formState.text}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, text: e.target.value }))
                }
                placeholder="https://example.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="size" className={labelClassName}>
                  Size (px)
                </label>
                <input
                  id="size"
                  type="number"
                  min={64}
                  max={2048}
                  className={inputBaseClassName}
                  value={formState.size}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      size: Number(e.target.value),
                    }))
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor="margin" className={labelClassName}>
                  Margin
                </label>
                <input
                  id="margin"
                  type="number"
                  min={0}
                  max={20}
                  className={inputBaseClassName}
                  value={formState.margin}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      margin: Number(e.target.value),
                    }))
                  }
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label
                  htmlFor="errorCorrectionLevel"
                  className={labelClassName}
                >
                  Error correction
                </label>
                <select
                  id="errorCorrectionLevel"
                  className={inputBaseClassName}
                  value={formState.errorCorrectionLevel}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      errorCorrectionLevel: e.target
                        .value as ErrorCorrectionLevel,
                    }))
                  }
                >
                  <option value="L">L</option>
                  <option value="M">M</option>
                  <option value="Q">Q</option>
                  <option value="H">H</option>
                </select>
              </div>
              <div>
                <label htmlFor="dark" className={labelClassName}>
                  Dark colour
                </label>
                <input
                  id="dark"
                  type="color"
                  className="mt-2 h-[42px] w-full cursor-pointer rounded border border-black/20 bg-white p-1"
                  value={darkColourInputValue}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, dark: e.target.value }))
                  }
                />
                <input
                  id="darkHex"
                  type="text"
                  className={inputBaseClassName}
                  value={formState.dark}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, dark: e.target.value }))
                  }
                  placeholder="#000000"
                />
              </div>
              <div>
                <label htmlFor="light" className={labelClassName}>
                  Light colour
                </label>
                <input
                  id="light"
                  type="color"
                  className="mt-2 h-[42px] w-full cursor-pointer rounded border border-black/20 bg-white p-1"
                  value={lightColourInputValue}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, light: e.target.value }))
                  }
                />
                <input
                  id="lightHex"
                  type="text"
                  className={inputBaseClassName}
                  value={formState.light}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, light: e.target.value }))
                  }
                  placeholder="#ffffff"
                />
              </div>
            </div>

            <button
              type="submit"
              className="rounded border border-black bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-transparent hover:text-black"
            >
              Generate
            </button>
          </form>

          {qrUrl ? (
            <div className="mt-4">
              <Image
                src={qrUrl}
                alt="Generated QR code"
                width={320}
                height={320}
                className="rounded border border-black/20"
              />
              <div className="mt-3">
                <a
                  href={qrUrl}
                  download="qr-code.png"
                  className="inline-block rounded border border-black px-4 py-2 text-sm transition-colors hover:bg-black hover:text-white"
                >
                  Download PNG
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default QrPage;
