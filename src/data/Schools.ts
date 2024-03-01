export interface School {
    name: string;
    key: string;
    colors: string[];
    mapPos: [ number, number ];
}

export const Schools: School[] = [
  {
    name: "Embry Riddle Aeronautical University",
    key: "erau",
    colors: [ "#00549F", "#FFC423" ],
    mapPos: [ 0.775, 0.275 ],
  },
  {
    name: "Florida State University",
    key: "fsu",
    colors: [ "#782F40", "#CEB888" ],
    mapPos: [ 0.375, 0.1 ],
  },
  {
    name: "University of Central Florida",
    key: "ucf",
    colors: [ "#FFC904", "#000" ],
    mapPos: [ 0.75, 0.375 ],
  },
  {
    name: "University of Florida",
    key: "uf",
    colors: [ "#FA4616", "#0021A5" ],
    mapPos: [ 0.625, 0.2 ],
  },
  {
    name: "University of South Florida",
    key: "usf",
    colors: [ "#006747", "#CFC493" ],
    mapPos: [ 0.6, 0.425 ],
  },
];
