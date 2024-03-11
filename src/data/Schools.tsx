import { faDiscord, faInstagram, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconStyles from "@website/styles/Icon.module.scss";
import type { ReactNode } from "react";

export interface ClubUrl {
  name: string;
  icon: ReactNode;
  url: string;
}

export interface Club {
  name: string;
  logo: string;
  urls: ClubUrl[];
}

export interface School {
  name: string;
  key: string;
  colors: string[];
  mapPos: [ number, number ];
  club: Club;
}

export const Schools: School[] = [
  {
    name: "Embry Riddle Aeronautical University",
    key: "erau",
    colors: [ "#FFC423", "#00549F" ],
    mapPos: [ 0.775, 0.25 ],
    club: {
      name: "ERAU Game Dev Club",
      logo: "/schools/erau-gdc.png",
      urls: [
        {
          name: "Itch.io",
          icon: <FontAwesomeIcon className={iconStyles.icon} icon={faItchIo}/>,
          url: "https://erau-gdc.itch.io/",
        },
      ],
    },
  },
  {
    name: "Florida State University",
    key: "fsu",
    colors: [ "#CEB888", "#782F40" ],
    mapPos: [ 0.38, 0.1 ],
    club: {
      name: "DevLUp FSU",
      logo: "/schools/devlup-fsu.png",
      urls: [
        {
          name: "Website",
          icon: <FontAwesomeIcon className={iconStyles.icon} icon={faArrowUpRightFromSquare}/>,
          url: "https://fsu.devlup.org/",
        },
        {
          name: "Discord",
          icon: <FontAwesomeIcon className={iconStyles.icon} icon={faDiscord}/>,
          url: "https://discord.gg/jehBXnYVpR",
        },
      ],
    },
  },
  {
    name: "University of Central Florida",
    key: "ucf",
    colors: [ "#FFC904", "#000" ],
    mapPos: [ 0.75, 0.35 ],
    club: {
      name: "UCF Game Dev Knights",
      logo: "/schools/ucf-gdk.jpeg",
      urls: [
        {
          name: "Discord",
          icon: <FontAwesomeIcon className={iconStyles.icon} icon={faDiscord}/>,
          url: "https://discord.gg/yNpj6zTrt9",
        },
        {
          name: "Instagram",
          icon: <FontAwesomeIcon className={iconStyles.icon} icon={faInstagram}/>,
          url: "https://www.instagram.com/gamedevknights/",
        },
      ],
    },
  },
  {
    name: "University of Florida",
    key: "uf",
    colors: [ "#FA4616", "#0021A5" ],
    mapPos: [ 0.625, 0.2 ],
    club: {
      name: "DevLUp UF",
      logo: "/schools/devlup-uf.png",
      urls: [
        {
          name: "Discord",
          icon: <FontAwesomeIcon className={iconStyles.icon} icon={faDiscord}/>,
          url: "https://discord.gg/FpseMYq2YM",
        },
        {
          name: "Instagram",
          icon: <FontAwesomeIcon className={iconStyles.icon} icon={faInstagram}/>,
          url: "https://www.instagram.com/devlup_uf/",
        },
      ],
    },
  },
  {
    name: "University of South Florida",
    key: "usf",
    colors: [ "#CFC493", "#006747" ],
    mapPos: [ 0.6, 0.4 ],
    club: {
      name: "USF GameDev Club",
      logo: "/schools/usf-gdc.png",
      urls: [
        {
          name: "Discord",
          icon: <FontAwesomeIcon className={iconStyles.icon} icon={faDiscord}/>,
          url: "https://discord.gg/PtgUgGw6Ph",
        },
      ],
    },
  },
];
