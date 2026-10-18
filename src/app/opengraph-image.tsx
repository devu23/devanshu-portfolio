import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { identity } from "@/data/site";

/**
 * Link-preview card (WhatsApp, LinkedIn, X). Built at deploy time, 1200×630.
 * Same look as the site: warm near-black, off-white type, one marigold accent.
 */
export const alt = `${identity.name} — ${identity.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Static Geist files (OFL) — Satori can't read the variable .woff the site uses.
  const dir = join(process.cwd(), "src/app/fonts");
  const [black, medium] = await Promise.all([readFile(join(dir, "Geist-Black.ttf")), readFile(join(dir, "Geist-Medium.ttf"))]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0E0D0B",
          color: "#F3EFE6",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, fontWeight: 500, letterSpacing: 4, color: "#A6A094" }}>
          <span>FOUNDER, NEEV AUTOMATION</span>
          <span style={{ display: "flex", alignItems: "center", color: "#E8A33D" }}>
            <span style={{ width: 12, height: 12, borderRadius: 12, background: "#E8A33D", marginRight: 14 }} />
            AVAILABLE
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 128, fontWeight: 900, letterSpacing: -6, lineHeight: 0.9 }}>DEVANSHU</div>
          <div style={{ fontSize: 128, fontWeight: 900, letterSpacing: -6, lineHeight: 0.9, display: "flex" }}>
            RATURI<span style={{ color: "#E8A33D" }}>.</span>
          </div>
        </div>
        <div style={{ fontSize: 38, fontWeight: 500, lineHeight: 1.2, display: "flex", flexDirection: "column" }}>
          <span>Websites that bring customers.</span>
          <span style={{ color: "#E8A33D" }}>AI that answers every lead.</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: black, weight: 900, style: "normal" },
        { name: "Geist", data: medium, weight: 500, style: "normal" },
      ],
    }
  );
}
