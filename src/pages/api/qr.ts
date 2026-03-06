import type { NextApiRequest, NextApiResponse } from "next";
import QRCode from "qrcode";

type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";

const errorLevels: ErrorCorrectionLevel[] = ["L", "M", "Q", "H"];

const toBoundedNumber = (
  value: string | string[] | undefined,
  fallback: number,
  min: number,
  max: number
) => {
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number(raw);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(Math.max(parsed, min), max);
};

const toSingleString = (value: string | string[] | undefined, fallback = "") => {
  if (Array.isArray(value)) return value[0] ?? fallback;
  return value ?? fallback;
};

const isHexColour = (value: string) => /^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const text = toSingleString(req.query.text).trim();
  if (!text) {
    return res.status(400).json({ error: "Missing required 'text' query param" });
  }

  const size = toBoundedNumber(req.query.size, 320, 64, 2048);
  const margin = toBoundedNumber(req.query.margin, 2, 0, 20);
  const requestedLevel = toSingleString(req.query.errorCorrectionLevel, "M") as ErrorCorrectionLevel;
  const errorCorrectionLevel = errorLevels.includes(requestedLevel) ? requestedLevel : "M";

  const darkInput = toSingleString(req.query.dark, "#000000");
  const lightInput = toSingleString(req.query.light, "#ffffff");
  const dark = isHexColour(darkInput) ? darkInput : "#000000";
  const light = isHexColour(lightInput) ? lightInput : "#ffffff";

  try {
    const pngBuffer = await QRCode.toBuffer(text, {
      type: "png",
      errorCorrectionLevel,
      width: size,
      margin,
      color: {
        dark,
        light,
      },
    });

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600");
    return res.status(200).send(pngBuffer);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to generate QR code",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
