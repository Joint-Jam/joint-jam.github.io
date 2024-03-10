export interface School {
  name: string;
  key: string;
  colors: string[];
  mapPos: [ number, number ];
  club: {
    name: string;
    logo: string;
    websiteUrl?: string;
    discordUrl?: string;
    itchUrl?: string;
  };
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
      itchUrl: "https://erau-gdc.itch.io/",
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
      websiteUrl: "https://fsu.devlup.org/",
      discordUrl: "https://discord.gg/jehBXnYVpR",
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
    },
  },
];
