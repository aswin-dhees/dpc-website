/**
 * Single source for NAP (name, address, phone) and local business SEO.
 * Update `streetAddress` / `postalCode` when you have a verified storefront or office.
 */
export const siteConfig = {
  businessName: "Dhee's Pet Company",
  legalName: "Dhee's Pet Services Private Limited",
  /** Default meta description — keep under ~160 characters when possible */
  description:
    "Premium fresh pet food delivery in Chennai for cats and dogs. Serving Adyar, Anna Nagar, OMR, Velachery & more—balanced meals to your door.",
  defaultTitle: "Dhee's Pet Company | Fresh Pet Food Delivery in Chennai",
  locale: "en_IN",
  email: "hello@dhees.com",
  phoneE164: "+919363611809",
  phoneDisplay: "+91 93636 11809",
  /** Chennai city center — refine if you publish a storefront pin */
  geo: {
    latitude: 13.0827,
    longitude: 80.2707,
  },
  address: {
    /** Set when you want full NAP on maps; omit for delivery-only */
    streetAddress: "" as string,
    addressLocality: "Chennai",
    addressRegion: "TN",
    addressRegionFull: "Tamil Nadu",
    postalCode: "" as string,
    addressCountry: "IN",
  },
  areaServedNames: ["Chennai", "Chennai Metropolitan Area"],
  /**
   * Neighborhoods & corridors you serve — keep aligned with real delivery.
   * Used on-page and in JSON-LD `areaServed` (AdministrativeArea).
   */
  chennaiLocalAreas: [
    "Adyar",
    "Anna Nagar",
    "T. Nagar",
    "Velachery",
    "OMR",
    "ECR",
    "Kilpauk",
    "Mylapore",
    "Nungambakkam",
    "Porur",
    "Guindy",
    "Tambaram",
    "Chrompet",
    "Perambur",
    "Ambattur",
    "Besant Nagar",
    "West Mambalam",
    "Alwarpet",
    "Royapettah",
    "Thiruvanmiyur",
    "Pallavaram",
    "Madipakkam",
    "Avadi",
  ],
  serviceAreaLabel: "All of Chennai & suburbs, Tamil Nadu",
  /**
   * Approximate delivery radius from `geo` (Chennai center) for GeoCircle in JSON-LD.
   * Adjust if your operations differ.
   */
  serviceRadiusKm: 55,
  /**
   * Public profile URLs for `sameAs` (Google Business Profile, social, wa.me, etc.).
   * Add verified links only — do not invent URLs.
   */
  sameAs: ["https://wa.me/919363611809"],
  /** Default Open Graph / schema image under `public/` (absolute URL built at render time) */
  defaultOgImagePath: "/favicon.svg",
} as const;

export function postalAddressForJsonLd(): Record<string, string> {
  const a = siteConfig.address;
  const out: Record<string, string> = {
    addressLocality: a.addressLocality,
    addressRegion: a.addressRegionFull,
    addressCountry: a.addressCountry,
  };
  if (a.streetAddress) out.streetAddress = a.streetAddress;
  if (a.postalCode) out.postalCode = a.postalCode;
  return out;
}
