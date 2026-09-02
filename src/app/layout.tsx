import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ACCELERATOR, SITE } from "@/lib/site";
import "./globals.css";

const head = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-head",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — a student startup network`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "student startups",
    "student accelerator",
    "high school entrepreneurship",
    "RTP",
    "Research Triangle Park",
    "student founders",
  ],
  icons: {
    icon: "/brand/capture-mark.png",
    apple: "/brand/capture-mark.png",
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — a student startup network`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — a student startup network`,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${head.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: SITE.name,
                  url: SITE.url,
                  email: SITE.email,
                  logo: `${SITE.url}/brand/capture-mark.png`,
                  sameAs: [SITE.instagram],
                  description: SITE.description,
                },
                {
                  "@type": "Event",
                  name: "Capture Success Student Accelerator — Fall 2026",
                  startDate: "2026-09-14T18:00:00-04:00",
                  endDate: "2026-10-19T20:00:00-04:00",
                  eventAttendanceMode:
                    "https://schema.org/OfflineEventAttendanceMode",
                  isAccessibleForFree: true,
                  location: {
                    "@type": "Place",
                    name: `${ACCELERATOR.venue.name}, ${ACCELERATOR.venue.building}`,
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: ACCELERATOR.venue.street,
                      addressLocality: "Research Triangle Park",
                      addressRegion: "NC",
                      postalCode: "27713",
                    },
                  },
                  organizer: { "@type": "Organization", name: SITE.name, url: SITE.url },
                },
              ],
            }),
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
