export interface Event {
    name: string;
    start: Date;
    end: Date;
    itchUrl: string;
    theme: string;
    submissions: {
      name: string;
      url: string;
      logo: string;
      authors: string[];
    }[];
}

export const Events: Event[] = [
  {
    name: "Joint Jam 2024",
    start: new Date("2024-03-29T18:00"),
    end: new Date("2024-03-31T18:00"),
    itchUrl: "https://itch.io/jam/joint-jam-2024/",
    theme: "TBA",
    submissions: [],
  },
  {
    name: "Joint Jam 2023",
    start: new Date("2023-03-31T19:00"),
    end: new Date("2023-04-02T19:00"),
    itchUrl: "https://itch.io/jam/joint-jam-2023/",
    theme: "You Really Shouldn't Mix Those",
    submissions: [
      {
        name: "Potion Panic",
        url: "https://siivergoid.itch.io/potion-panic",
        logo: "https://img.itch.zone/aW1nLzExNzUyMzAzLnBuZw==/315x250%23c/mG4W%2Ft.png",
        authors: [ "SilverGold" ],
      },
      {
        name: "fEAR",
        url: "https://happymorgan.itch.io/fear",
        logo: "https://img.itch.zone/aW1nLzExNzU0Mzc4LnBuZw==/315x250%23c/csuVgM.png",
        authors: [ "Mo", "TheFascistHazelnut", "Marissa Manley", "ThadMuchnok" ],
      },
      {
        name: "LIT",
        url: "https://joaqstarr.itch.io/lit",
        logo: "https://img.itch.zone/aW1nLzExNzU1OTUwLnBuZw==/315x250%23c/TFG9Ca.png",
        authors: [ "Joaqstarr" ],
      },
      {
        name: "The Potions Predicament",
        url: "https://shion-wild.itch.io/potionpredicament",
        logo: "https://img.itch.zone/aW1nLzExNzUyMjQ4LnBuZw==/315x250%23c/Zq2rtw.png",
        authors: [ "Dillon W.", "Wildgamez", "little fifth" ],
      },
      {
        name: "Rock Paper - What!?",
        url: "https://micaiaharts.itch.io/rock-paper-what",
        logo: "https://img.itch.zone/aW1nLzExNzU2Mjg2LnBuZw==/315x250%23c/Ltw8R8.png",
        authors: [ "MicaiahArts", "Mochithealchemest", "Pillbird" ],
      },
      {
        name: "GobboVersus",
        url: "https://ttmayor.itch.io/gobbo-versus",
        logo: "https://img.itch.zone/aW1nLzExNzU1MTMwLnBuZw==/315x250%23c/YnpOt6.png",
        authors: [ "ttmayor", "Joseph DeMartini", "Cole" ],
      },
      {
        name: "MIX - SHOT",
        url: "https://jchrisobeso.itch.io/uncanny-mixture",
        logo: "https://img.itch.zone/aW1nLzExNzU2MzAzLnBuZw==/315x250%23c/0XrPqk.png",
        authors: [ "J.ChrisObeso", "Gonderage", "David Forver", "NoeDimitri", "Kelvin285", "Rhaque20", "LeafSal", "Peter DeVita" ],
      },
      {
        name: "Chimera Combat",
        url: "https://surprisestudios.itch.io/chimera-combat",
        logo: "https://img.itch.zone/aW1nLzExNzU1OTA5LnBuZw==/315x250%23c/w4owsC.png",
        authors: [ "SurpriseStudios", "DStroid", "Luckyleol", "Arkiteuthis" ],
      },
      {
        name: "Froggy Rain!",
        url: "https://vi-violetrose.itch.io/froggy-rain",
        logo: "https://img.itch.zone/aW1nLzExNzUwMjA0LnBuZw==/315x250%23c/z55sgi.png",
        authors: [ "vi_violetrose" ],
      },
      {
        name: "Caster",
        url: "https://tau-9.itch.io/caster",
        logo: "https://img.itch.zone/aW1nLzExNzU2NTI0LnBuZw==/315x250%23c/eXiArC.png",
        authors: [ "Tau-9" ],
      },
      {
        name: "Alic N' Ferno",
        url: "https://tetrachroma.itch.io/alice-ferno",
        logo: "https://img.itch.zone/aW1nLzExNzU2NDA3LnBuZw==/315x250%23c/qa1PSn.png",
        authors: [ "Tetrachroma" ],
      },
      {
        name: "AwfulMix",
        url: "https://nick00ksus.itch.io/awfulmix",
        logo: "https://img.itch.zone/aW1nLzExNzU1NjM4LnBuZw==/315x250%23c/7rQ6JC.png",
        authors: [ "nick00ksus" ],
      },
      {
        name: "Hell in One",
        url: "https://apostoljane.itch.io/golf-horror",
        logo: "https://img.itch.zone/aW1nLzExNzU2NTgyLnBuZw==/315x250%23c/gFT%2FNq.png",
        authors: [ "Jane Apostol", "fablefox5", "FrankSilantro" ],
      },
      {
        name: "The Perfect Mixture",
        url: "https://nailujdev.itch.io/the-perfect-mixture",
        logo: "https://img.itch.zone/aW1nLzExNzU0OTYyLnBuZw==/315x250%23c/4ukAsw.png",
        authors: [ "NailujDev" ],
      },
      {
        name: "Potion Mixup",
        url: "https://dudemandev.itch.io/potion-mixup",
        logo: "https://img.itch.zone/aW1nLzExNzU2NDc0LmpwZw==/315x250%23c/3s1PL4.jpg",
        authors: [ "dudemanDev" ],
      },
      {
        name: "Chef's Inferno",
        url: "https://masterofbanks.itch.io/2023-joint-jam-temporary-place-holder",
        logo: "https://img.itch.zone/aW1nLzExNzU1MzI1LnBuZw==/315x250%23c/UP5r0f.png",
        authors: [ "masterofbanks", "ItsRrev", "PinkJacketKid" ],
      },
      {
        name: "Special Delivery",
        url: "https://boltactiontoaster.itch.io/special-delivery",
        logo: "https://img.itch.zone/aW1nLzExNzU2NDkzLnBuZw==/315x250%23c/vr%2BY7u.png",
        authors: [ "BoltActionToaster", "Yasmina1014", "Dangerous Hard", "KaydeJ" ],
      },
      {
        name: "Cooking Master",
        url: "https://infinity-n-beyond.itch.io/cooking-master",
        logo: "https://img.itch.zone/aW1nLzExNzUxMzAxLnBuZw==/315x250%23c/6DU8aP.png",
        authors: [ "Infinity" ],
      },
      {
        name: "Color Mixing Agar",
        url: "https://oeug99.itch.io/color-mixing-agar",
        logo: "https://img.itch.zone/aW1nLzExNzU1MTMxLnBuZw==/315x250%23c/tMq0Y8.png",
        authors: [ "OEUG99" ],
      },
    ],
  },
  {
    name: "Joint Jam 2022",
    start: new Date("2022-04-01T19:00"),
    end: new Date("2022-04-3T19:00"),
    itchUrl: "https://itch.io/jam/florida-joint-jam",
    theme: "Gotcha!",
    submissions: [
      {
        name: "Real Girls",
        url: "https://noedimitri.itch.io/real-girls",
        logo: "https://img.itch.zone/aW1nLzg1NzM0OTEucG5n/315x250%23c/1hRiHe.png",
        authors: [ "NoeDimitri", "ReHollow06", "J.ChrisObeso", "Kelvin285", "Gonderage", "Peter DeVita" ],
      },
      {
        name: "blue collar bandit",
        url: "https://tygutowski.itch.io/blue-collar-bandit",
        logo: "https://img.itch.zone/aW1nLzg1NzI2NTMucG5n/315x250%23c/byIoid.png",
        authors: [ "tygutowski" ],
      },
      {
        name: "Fool's Robinhood",
        url: "https://robozero.itch.io/fools-robinhood",
        logo: "https://img.itch.zone/aW1nLzg1NzI3NzIucG5n/315x250%23c/KQ5%2B0y.png",
        authors: [ "RoboZero", "fablefox5", "freehalleatus" ],
      },
      {
        name: "Corsair Confiscation - The Professionals",
        url: "https://dstroid.itch.io/corsair-confiscation",
        logo: "https://img.itch.zone/aW1nLzg1NzM2MjIucG5n/315x250%23c/dLEUxV.png",
        authors: [ "DStroid", "Pairjax", "BPerezGameDev", "Peyton Paul", "JacknCheese" ],
      },
      {
        name: "Mystic Isles",
        url: "https://happymorgan.itch.io/mystic-isles",
        logo: "https://img.itch.zone/aW1nLzg1NzA4MjMucG5n/315x250%23c/JYaCKl.png",
        authors: [ "Mo" ],
      },
      {
        name: "Plunder",
        url: "https://nickrocky213.itch.io/plunder",
        logo: "https://img.itch.zone/aW1nLzg1NzI4OTgucG5n/315x250%23c/lAhZoX.png",
        authors: [ "nickrocky213" ],
      },
      {
        name: "Vacto",
        url: "https://cobaltkat.itch.io/vacto",
        logo: "https://img.itch.zone/aW1nLzg1NzIyMDAucG5n/315x250%23c/m9Senw.png",
        authors: [ "cobaltkat", "Jonny Haldas" ],
      },
      {
        name: "\"Just Catch The Player.\"",
        url: "https://hyuneb50.itch.io/just-catch-the-player",
        logo: "https://img.itch.zone/aW1nLzg1NzMzNTgucG5n/315x250%23c/1xJNkZ.png",
        authors: [ "hyuneb50", "Alex Issa", "hi5aj", "Iden Yance" ],
      },
      {
        name: "Untitled Dating Sim by Campfire Studios",
        url: "https://scarlett-samurai.itch.io/untitleddatingsim",
        logo: "https://img.itch.zone/aW1nLzg1NzQzMDQuanBn/315x250%23c/mEarZe.jpg",
        authors: [ "Scarlett Samurai" ],
      },
      {
        name: "Scrap Tractor",
        url: "https://ultraskull.itch.io/ukrainianscraptractor",
        logo: "https://img.itch.zone/aW1nLzg1NzAzNjkucG5n/315x250%23c/XFS7X4.png",
        authors: [ "UltraSkull1000" ],
      },
      {
        name: "Hack and Cash",
        url: "https://timothyanthony.itch.io/hack-and-cash",
        logo: "https://img.itch.zone/aW1nLzg1NzIzMjkucG5n/315x250%23c/ylusC3.png",
        authors: [ "Waterkite" ],
      },
      {
        name: "GOTCHA MAZE",
        url: "https://jerdan1980.itch.io/gotcha-maze",
        logo: "https://img.itch.zone/aW1nLzg1NzIwNzIucG5n/315x250%23c/vgAsGo.png",
        authors: [ "jerdan1980", "AlenJames", "Apo11oAdAstra" ],
      },
      {
        name: "Chicken Nabber",
        url: "https://acehomie.itch.io/chicken-nabber",
        logo: "https://img.itch.zone/aW1nLzg1NzE1MDIucG5n/315x250%23c/9CJ5Fr.png",
        authors: [ "Acehomie", "anc_xo" ],
      },
      {
        name: "Clown Town",
        url: "https://croissanttoes.itch.io/clown-town",
        logo: "https://img.itch.zone/aW1nLzg1NzI1OTEucG5n/315x250%23c/Lyk3qs.png",
        authors: [ "CroissantToes" ],
      },
      {
        name: "Five Nights at the Student Center",
        url: "https://momoisgoodforhealth.itch.io/five-nights-at-the-student-center",
        logo: "https://img.itch.zone/aW1nLzg1NzI5ODIucG5n/315x250%23c/PEo3Rj.png",
        authors: [ "momoisgoodforhealth" ],
      },
      {
        name: "Night at the Memeseum!",
        url: "https://teamgg.itch.io/night-at-the-memeseum",
        logo: "https://img.itch.zone/aW1nLzg1Njg5ODUucG5n/315x250%23c/%2F%2FQoFx.png",
        authors: [ "teamgg", "Owen1Campbell", "Luckyleol", "ArshnoorSingh", "aj1396", "bayanthebear" ],
      },
      {
        name: "Concurrent Sentences",
        url: "https://ratkev23.itch.io/concurrent-sentences",
        logo: "https://img.itch.zone/aW1nLzg1NzI5MDAucG5n/315x250%23c/CVkrKA.png",
        authors: [ "RatKev23" ],
      },
    ],
  },
];

export const CurrentEvent: Event = Events[0];
