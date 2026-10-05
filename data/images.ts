/**
 * Photography. Every image is from Unsplash (free commercial licence) and was
 * reviewed by eye before being listed here. `id` is the Unsplash CDN path;
 * components/ui/photo.tsx turns it into responsive, format-negotiated URLs.
 *
 * Replace with commissioned photography when available – only this file changes.
 */
export type PhotoRef = { id: string; alt: string; /** CSS object-position */ focus?: string };

const p = (id: string, alt: string, focus?: string): PhotoRef => ({ id: `photo-${id}`, alt, focus });

export const photos = {
  // People and practice
  strategyWhiteboard: p("1532622785990-d2c36a76f5a6", "Hands sketching a system diagram on a whiteboard"),
  teamWorkshop: p("1681949287382-052ea3954a51", "A small team reviewing work pinned to a wall in a sunlit studio"),
  teamOffice: p("1556761175-b413da4baf72", "Colleagues working through a problem at a shared table"),
  teamMeeting: p("1573164574511-73c773193279", "A team in discussion around a meeting table by a window"),
  analystScreens: p("1526628953301-3e589a6a8b74", "Monitors showing performance charts and market data"),
  analystDesk: p("1723987251277-18fc0a1effd0", "An analyst reading a dashboard at a desk"),
  skyline: p("1515868769-ad822a0c67e9", "A city skyline at night seen from above"),

  // Industries
  saas: p("1460925895917-afdab827c52f", "A laptop showing product analytics on a glass desk"),
  ecommerce: p("1580674285054-bed31e145f59", "Parcels stacked and ready for dispatch"),
  healthcare: p("1586534738560-438efdf1d205", "A clinician walking down a bright hospital corridor"),
  dental: p("1598256989800-fe5f95da9787", "A modern dental treatment room"),
  "real-estate": p("1515263487990-61b07816b324", "A contemporary residential building against the sky"),
  finance: p("1559329007-7eea52183565", "A financial district skyline across the water"),
  education: p("1683319598210-d70486f2f996", "Students working in a modern circular library"),
  legal: p("1505664063603-28e48ca204eb", "Shelves of bound law reports"),
  accounting: p("1554224155-6726b3ff858f", "Financial documents and a calculator on a desk"),
  automotive: p("1643142314913-0cf633d9bbb5", "A car on display in a showroom"),
  hospitality: p("1759038085950-1234ca8f5fed", "A hotel reception desk in warm timber"),
  travel: p("1655919640606-28088c64edb0", "A traveller crossing a vast airport terminal"),
  manufacturing: p("1717386255773-1e3037c81788", "An automated production line on a factory floor"),
  logistics: p("1678182451047-196f22a4143e", "Shipping containers stacked at a port"),
  construction: p("1575230167650-dce335edc7f4", "Tower cranes against an evening sky"),
  "home-services": p("1426927308491-6380b6a9936f", "Hand tools arranged on a workshop wall"),
  b2b: p("1431540015161-0bf868a2d407", "An empty boardroom with a long conference table"),
  "professional-services": p("1573167507387-6b4b98cb7c13", "Advisers listening to a colleague across a conference table"),
  technology: p("1744868562210-fffb7fa882d9", "Network cables patched neatly into a server rack"),
  "local-business": p("1469631423273-6995642a6a40", "The counter of an independent coffee shop"),
} satisfies Record<string, PhotoRef>;

export type PhotoKey = keyof typeof photos;
