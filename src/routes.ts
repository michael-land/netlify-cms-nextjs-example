export interface Route {
  title: string;
  href?: string;
  children?: Route[];
}

const routes: Route[] = [
  {
    title: "Stages",
    href: "/stages"
  },

  {
    title: "Backlot / Exterior Sets",
    href: "/exterior-sets"
  },
  {
    title: "Studio Services",
    href: "/studio-services",
    children: [
      { href: "/das", title: "Production Services Dept." },
      { href: "/das", title: "International Development Div." },
      { href: "/das", title: "Camera" },
      { href: "/das", title: "Set Lighting / Grip" },
      { href: "/das", title: "Props" },
      { href: "/das", title: "Wardrobe" },
      { href: "/das", title: "Set Construction" },
      { href: "/das", title: "Extras Casting" },
      { href: "/das", title: "Labor" },
      { href: "/das", title: "Horses / Animals" },
      { href: "/das", title: "Food Services" },
      { href: "/das", title: "Production Offices" },
      { href: "/das", title: "On Lot Hotels" }
    ]
  },

  {
    title: "Events",
    href: "/events"
  },
  {
    title: "Incentives / Int'l Co-Pro",
    href: "/incentives"
  },
  {
    href: "/about",
    title: "About Us",
    children: [
      { href: "/news", title: "News" },
      { href: "/about/#mission", title: "Our Mission" },
      { href: "/about/#giving-back", title: "Giving Back" },
      { href: "/about/#sustainability", title: "Sustainability" },
      { href: "#", title: "History" },
      { href: "#", title: "Careers" },
      { href: "#", title: "Forms" },
      { href: "#", title: "Studio Lot Map" },
      { href: "#", title: "Client Login" }
    ]
  },
  {
    title: "Contact",
    href: "/contact"
  }
];
export default routes;
