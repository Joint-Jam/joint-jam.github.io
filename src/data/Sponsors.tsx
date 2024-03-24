import { faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconStyles from "@website/styles/Icon.module.scss";
import type { ReactNode } from "react";

export interface Url {
  name: string;
  icon: ReactNode;
  url: string;
}

export interface Sponsor {
  key: string;
  name: string;
  logo: string;
  website: Url;
  prizes: Url[];
}

export const Sponsors: Sponsor[] = [
  {
    key: "pizza-doggy",
    name: "Pizza Doggy",
    logo: "https://img.itch.zone/aW1nLzE1MTUzMjczLnBuZw==/80x80%23/VTGZk0.png",
    website: {
      name: "Website",
      icon: <FontAwesomeIcon className={iconStyles.icon} icon={faArrowUpRightFromSquare}/>,
      url: "https://pizzadoggy.itch.io/",
    },
    prizes: [
      {
        name: "PSX Kidnapper Van x3",
        icon: <FontAwesomeIcon className={iconStyles.icon} icon={faItchIo}/>,
        url: "https://pizzadoggy.itch.io/kidnapper-van",
      },
      {
        name: "Retro Fps Kit x3",
        icon: <FontAwesomeIcon className={iconStyles.icon} icon={faItchIo}/>,
        url: "https://pizzadoggy.itch.io/modular-retro-fps-kit",
      },
      {
        name: "PSX Nature Mega Pack x3",
        icon: <FontAwesomeIcon className={iconStyles.icon} icon={faItchIo}/>,
        url: "https://pizzadoggy.itch.io/psx-nature-mega-pack",
      },
      {
        name: "PSX Mega Pack x3",
        icon: <FontAwesomeIcon className={iconStyles.icon} icon={faItchIo}/>,
        url: "https://pizzadoggy.itch.io/psx-mega-pack",
      },
      {
        name: "PSX Bunkers x3",
        icon: <FontAwesomeIcon className={iconStyles.icon} icon={faItchIo}/>,
        url: "https://pizzadoggy.itch.io/psx-bunkers",
      },
    ],
  },
  {
    key: "we-love-indies",
    name: "We Love Indies",
    logo: "https://www.weloveindies.com/_default_upload_bucket/dyn-wli-logo-light.png",
    website: {
      name: "Website",
      icon: <FontAwesomeIcon className={iconStyles.icon} icon={faArrowUpRightFromSquare}/>,
      url: "https://www.weloveindies.com",
    },
    prizes: [
      {
        name: "Sound Bundle B x1 (First place)",
        icon: <FontAwesomeIcon className={iconStyles.icon} icon={faArrowUpRightFromSquare}/>,
        url: "https://www.weloveindies.com/en/pricing",
      },
      {
        name: "Music Bundle A x1 (First place)",
        icon: <FontAwesomeIcon className={iconStyles.icon} icon={faArrowUpRightFromSquare}/>,
        url: "https://www.weloveindies.com/en/pricing",
      },
      {
        name: "Sound Bundle A x10 (Follow up)",
        icon: <FontAwesomeIcon className={iconStyles.icon} icon={faArrowUpRightFromSquare}/>,
        url: "https://www.weloveindies.com/en/pricing",
      },
    ],
  },
];
