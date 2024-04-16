import { writable } from "svelte/store";

export const menu = writable([
  {
    name: "Products",
    link: "/products",
    open: false,
    children: [
      {
        name: "New Arrivals",
        link: "/products/new-arrivals",
      },
      {
        name: "On Sale",
        link: "/products/on-sale",
      },
    ],
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/search",
  },
]);
