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
    colors: [ "#FFC423", "#00549F" ],
    mapPos: [ 0.775, 0.25 ],
  },
  {
    name: "Florida State University",
    key: "fsu",
    colors: [ "#CEB888", "#782F40" ],
    mapPos: [ 0.38, 0.1 ],
  },
  {
    name: "University of Central Florida",
    key: "ucf",
    colors: [ "#FFC904", "#000" ],
    mapPos: [ 0.75, 0.35 ],
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
    colors: [ "#CFC493", "#006747" ],
    mapPos: [ 0.6, 0.4 ],
  },
];
