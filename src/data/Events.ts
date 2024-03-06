export interface Event {
    name: string;
    start: Date;
    end: Date;
    itchUrl: string;
}

export const Events: Event[] = [
  {
    name: "Joint Jam 2024",
    start: new Date("2024-03-29T18:00"),
    end: new Date("2024-03-31T18:00"),
    itchUrl: "https://itch.io/jam/joint-jam-2024/",
  },
  {
    name: "Joint Jam 2023",
    start: new Date("2023-03-31T19:00"),
    end: new Date("2023-04-02T19:00"),
    itchUrl: "https://itch.io/jam/joint-jam-2023/",
  },
  {
    name: "Joint Jam 2022",
    start: new Date("2022-04-01T19:00"),
    end: new Date("2022-04-3T19:00"),
    itchUrl: "https://itch.io/jam/florida-joint-jam",
  },
];

export const CurrentEvent: Event = Events[0];
