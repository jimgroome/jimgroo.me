import Head from "next/head";
import { FormEvent, useMemo, useState } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

type Colour = "blue" | "green" | "pink" | "yellow";
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

const QrPage = () => {
  const colours: Colour[] = ["blue", "green", "yellow", "pink"];
  const colour = useMemo(
    () => colours[Math.floor(Math.random() * colours.length)],
    []
  );
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
    <div className={`page-container ${colour}`}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content="QR code generator." />
        <meta name="theme-color" content="#ffffff" />
        <title>QR code generator</title>
      </Head>

      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="8" lg="6">
            <div className="site-content">
              <h1 className="mb-4">QR code generator</h1>
              <form onSubmit={onSubmit} className="qr-form">
                <div className="form-group">
                  <label htmlFor="text">Text / URL</label>
                  <input
                    id="text"
                    className="form-control"
                    value={formState.text}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, text: e.target.value }))
                    }
                    placeholder="https://example.com"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="size">Size (px)</label>
                    <input
                      id="size"
                      type="number"
                      min={64}
                      max={2048}
                      className="form-control"
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
                  <div className="form-group col-md-6">
                    <label htmlFor="margin">Margin</label>
                    <input
                      id="margin"
                      type="number"
                      min={0}
                      max={20}
                      className="form-control"
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

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="errorCorrectionLevel">Error correction</label>
                    <select
                      id="errorCorrectionLevel"
                      className="form-control"
                      value={formState.errorCorrectionLevel}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          errorCorrectionLevel:
                            e.target.value as ErrorCorrectionLevel,
                        }))
                      }
                    >
                      <option value="L">L</option>
                      <option value="M">M</option>
                      <option value="Q">Q</option>
                      <option value="H">H</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="dark">Dark colour</label>
                    <input
                      id="dark"
                      type="color"
                      className="form-control"
                      value={darkColourInputValue}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, dark: e.target.value }))
                      }
                    />
                    <input
                      id="darkHex"
                      type="text"
                      className="form-control mt-2"
                      value={formState.dark}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, dark: e.target.value }))
                      }
                      placeholder="#000000"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="light">Light colour</label>
                    <input
                      id="light"
                      type="color"
                      className="form-control"
                      value={lightColourInputValue}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, light: e.target.value }))
                      }
                    />
                    <input
                      id="lightHex"
                      type="text"
                      className="form-control mt-2"
                      value={formState.light}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, light: e.target.value }))
                      }
                      placeholder="#ffffff"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-dark">
                  Generate
                </button>
              </form>

              {qrUrl ? (
                <div className="qr-preview mt-4">
                  <img src={qrUrl} alt="Generated QR code" />
                  <div className="mt-3">
                    <a
                      href={qrUrl}
                      download="qr-code.png"
                      className="btn btn-outline-dark"
                    >
                      Download PNG
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default QrPage;
