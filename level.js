
const levelData = [
  { //Level 0
    inverse:[
      2000
    ],
    blocks:[
      new Block(400,50,blockType.text,{text:"Click & hold onto blocks to swing."}),
      new Block(400,100,blockType.text,{text:"Don't fall down! :D"}),
      new Block(500,200,blockType.normal,{}),
      new Block(600,200,blockType.normal,{}),
      new Block(700,200,blockType.normal,{}),
      new Block(800,200,blockType.normal,{}),
      new Block(900,200,blockType.normal,{}),
      new Block(1200,400,blockType.text,{text:"Hold a and d to swing left and right."}),
      new Block(1200,500,blockType.text,{text:"Use this to build up momentum and make bigger jumps."}),
      new Block(1200,200,blockType.normal,{}),
      new Block(1500,200,blockType.normal,{}),
      new Block(1800,200,blockType.normal,{}),
      new Block(1800,400,blockType.text,{text:"Almost there :D"})
    ]
  },
  { //Level 1
    inverse:[
      650,
      1400,
      1800
    ],
    blocks:[
      new Block(400,450,blockType.text,{text:"I recently read a book about gravity"}),
      new Block(400,500,blockType.text,{text:"and I just can't put it down!"}),
      new Block(500,300,blockType.normal,{}),
      new Block(900,300,blockType.normal,{}),
      new Block(1200,200,blockType.normal,{}),
      new Block(1500,500,blockType.normal,{})
    ]
  },
  { //Level 2
    inverse:[
      650,
      1250,
      1750,
      2250,
      3000
    ],
    blocks:[
      new Block(400,450,blockType.text,{text:"I don't think you understand..."}),
      new Block(400,500,blockType.text,{text:"the gravity of the situation you're in."}),
      new Block(500,300,blockType.normal,{}),
      new Block(900,150,blockType.normal,{}),
      new Block(1100,150,blockType.normal,{}),
      new Block(1400,450,blockType.normal,{}),
      new Block(1600,450,blockType.normal,{}),
      new Block(1900,150,blockType.normal,{}),
      new Block(2100,150,blockType.normal,{}),
      new Block(2400,150,blockType.normal,{}),
      new Block(2600,150,blockType.normal,{}),
    ]
  },
  { //Level 3
    inverse:[
      650,
      1400,
      2500,
      2850
    ],
    blocks:[
      new Block(400,450,blockType.text,{text:"Did you hear the joke about the jump rope?"}),
      new Block(400,500,blockType.text,{text:"Eh lets skip it."}),
      new Block(500,300,blockType.normal,{}),
      new Block(750,100,blockType.bounce,{}),
      new Block(814,100,blockType.bounce,{}),
      new Block(878,100,blockType.bounce,{}),
      new Block(942,100,blockType.bounce,{}),
      new Block(1200,164,blockType.normal,{}),
      new Block(1600,32,blockType.bounce,{}),
      new Block(1600,96,blockType.bounce,{}),
      new Block(1600,160,blockType.bounce,{}),
      new Block(1600,440,blockType.bounce,{}),
      new Block(1600,504,blockType.bounce,{}),
      new Block(1600,568,blockType.bounce,{}),
      new Block(2000,300,blockType.normal,{}),
      new Block(2300,300,blockType.normal,{}),
      new Block(2700,32,blockType.bounce,{}),
      new Block(2700,96,blockType.bounce,{}),
      new Block(2700,160,blockType.bounce,{}),
      new Block(2700,224,blockType.bounce,{}),
      new Block(2700,288,blockType.bounce,{}),
      new Block(2700,352,blockType.bounce,{}),
    ]
  },
  { //Level 4
    inverse:[
        750,
        2000,
        3500,
        4200
    ],
    blocks:[
      new Block(400,450,blockType.text,{text:"What happened to the frog that parked illegally?"}),
      new Block(400,500,blockType.text,{text:"He got toad!"}),
      new Block(600,300,blockType.normal,{}),
      new Block(900,100,blockType.bounce,{}),
      new Block(964,100,blockType.bounce,{}),
      new Block(1200,300,blockType.normal,{}),
      new Block(1500,100,blockType.bounce,{}),
      new Block(1564,100,blockType.bounce,{}),
      new Block(1800,300,blockType.normal,{}),
      new Block(2250,500,blockType.bounce,{}),
      new Block(2314,500,blockType.bounce,{}),
      new Block(2500,300,blockType.normal,{}),
      new Block(2700,500,blockType.bounce,{}),
      new Block(2764,500,blockType.bounce,{}),
      new Block(3000,300,blockType.normal,{}),
      new Block(3300,100,blockType.bounce,{}),
      new Block(3364,100,blockType.bounce,{}),
      new Block(3600,300,blockType.normal,{}),
      new Block(3800,100,blockType.bounce,{}),
      new Block(3864,100,blockType.bounce,{}),
    ]
  },
  { //Level 5
    inverse:[
      950,
      1450,
      1950,
      2450,
      2550
    ],
    blocks:[
      new Block(400,450,blockType.text,{text:"You can only swing on the red blocks once."}),
      new Block(400,500,blockType.text,{text:"I know its a bit odd."}),
      new Block(650,300,blockType.falling,{}),
      new Block(950,236,blockType.bounce,{}),
      new Block(950,300,blockType.bounce,{}),
      new Block(950,364,blockType.bounce,{}),
      new Block(1200,300,blockType.falling,{}),
      new Block(1450,236,blockType.bounce,{}),
      new Block(1450,300,blockType.bounce,{}),
      new Block(1450,364,blockType.bounce,{}),
      new Block(1700,300,blockType.falling,{}),
      new Block(1950,236,blockType.bounce,{}),
      new Block(1950,300,blockType.bounce,{}),
      new Block(1950,364,blockType.bounce,{}),
      new Block(2200,300,blockType.falling,{}),
      new Block(2450,236,blockType.bounce,{}),
      new Block(2450,300,blockType.bounce,{}),
      new Block(2450,364,blockType.bounce,{}),
    ]
  },
  { //Level 6
    inverse:[
      900,
      2100,
      3250,
      4200,
      4444
    ],
    blocks:[
      new Block(400,400,blockType.text,{text:"Roses are red"}),
      new Block(400,425,blockType.text,{text:"violets are blue"}),
      new Block(400,450,blockType.text,{text:"If you go quickly"}),
      new Block(400,475,blockType.text,{text:"you will get through"}),

      new Block(650,300,blockType.falling,{}),
      new Block(1150,275,blockType.falling,{}),
      new Block(1650,275,blockType.falling,{}),
      new Block(2300,425,blockType.falling,{}),
      new Block(2800,425,blockType.falling,{}),
      new Block(3450,275,blockType.falling,{}),
      new Block(3950,275,blockType.falling,{}),

      new Block(1400,32,blockType.bounce,{}),
      new Block(1400,96,blockType.bounce,{}),
      new Block(1400,160,blockType.bounce,{}),

      new Block(1900,32,blockType.bounce,{}),
      new Block(1900,96,blockType.bounce,{}),
      new Block(1900,160,blockType.bounce,{}),

      new Block(2550,568,blockType.bounce,{}),
      new Block(2550,504,blockType.bounce,{}),
      new Block(2550,440,blockType.bounce,{}),

      new Block(3050,568,blockType.bounce,{}),
      new Block(3050,504,blockType.bounce,{}),
      new Block(3050,440,blockType.bounce,{}),

      new Block(3700,32,blockType.bounce,{}),
      new Block(3700,96,blockType.bounce,{}),
      new Block(3700,160,blockType.bounce,{}),

      new Block(4200,32,blockType.bounce,{}),
      new Block(4200,96,blockType.bounce,{}),
      new Block(4200,160,blockType.bounce,{}),

    ]
  },
  { //Level 7
    inverse:[
      928,
      1754,
      2578,
      3402,
      3600
    ],
    blocks:[
      new Block(400,450,blockType.text,{text:"Why does lightning shock people?"}),
      new Block(400,500,blockType.text,{text:"Because it doesn't know how to conduct itself!"}),
      new Block(600,300,blockType.normal,{}),

      new Block(832,300,blockType.danger,{}),
      new Block(896,300,blockType.danger,{}),
      new Block(928,364,blockType.falling,{}),
      new Block(928,236,blockType.falling,{}),
      new Block(960,300,blockType.danger,{}),
      new Block(1024,300,blockType.danger,{}),

      new Block(1324,300,blockType.normal,{}),

      new Block(1658,300,blockType.danger, {}),
      new Block(1722,300,blockType.danger, {}),
      new Block(1754,364,blockType.falling,{}),
      new Block(1754,236,blockType.falling,{}),
      new Block(1786,300,blockType.danger, {}),
      new Block(1850,300,blockType.danger, {}),

      new Block(2150,300,blockType.normal,{}),

      new Block(2482,300,blockType.danger, {}),
      new Block(2546,300,blockType.danger, {}),
      new Block(2578,364,blockType.falling,{}),
      new Block(2578,236,blockType.falling,{}),
      new Block(2610,300,blockType.danger, {}),
      new Block(2674,300,blockType.danger, {}),

      new Block(2974,300,blockType.normal,{}),

      new Block(3306,300,blockType.danger, {}),
      new Block(3370,300,blockType.danger, {}),
      new Block(3402,364,blockType.falling,{}),
      new Block(3402,236,blockType.falling,{}),
      new Block(3434,300,blockType.danger, {}),
      new Block(3498,300,blockType.danger, {}),
    ]
  },
  { //Level 8
    inverse:[
      500,
      800,
      1100,
      1400,
      1700,
      2000,
      2222
    ],
    blocks:[
      new Block(200,500,blockType.text,{text:"Have you met your match?"}),
      new Block(500,32,blockType.danger,{}),
      new Block(500,96,blockType.danger,{}),
      new Block(500,160,blockType.danger,{}),
      new Block(500,224,blockType.danger,{}),
      new Block(500,288,blockType.danger,{}),
      new Block(500,352,blockType.danger,{}),
      new Block(500,416,blockType.falling,{}),

      new Block(800,568,blockType.danger,{}),
      new Block(800,504,blockType.danger,{}),
      new Block(800,440,blockType.danger,{}),
      new Block(800,376,blockType.danger,{}),
      new Block(800,312,blockType.danger,{}),
      new Block(800,248,blockType.danger,{}),
      new Block(800,184,blockType.falling,{}),

      new Block(1100,32,blockType.danger,{}),
      new Block(1100,96,blockType.danger,{}),
      new Block(1100,160,blockType.danger,{}),
      new Block(1100,224,blockType.danger,{}),
      new Block(1100,288,blockType.danger,{}),
      new Block(1100,352,blockType.danger,{}),
      new Block(1100,416,blockType.falling,{}),

      new Block(1400,568,blockType.danger,{}),
      new Block(1400,504,blockType.danger,{}),
      new Block(1400,440,blockType.danger,{}),
      new Block(1400,376,blockType.danger,{}),
      new Block(1400,312,blockType.danger,{}),
      new Block(1400,248,blockType.danger,{}),
      new Block(1400,184,blockType.falling,{}),

      new Block(1700,32,blockType.danger,{}),
      new Block(1700,96,blockType.danger,{}),
      new Block(1700,160,blockType.danger,{}),
      new Block(1700,224,blockType.danger,{}),
      new Block(1700,288,blockType.danger,{}),
      new Block(1700,352,blockType.danger,{}),
      new Block(1700,416,blockType.falling,{}),

      new Block(2000,568,blockType.danger,{}),
      new Block(2000,504,blockType.danger,{}),
      new Block(2000,440,blockType.danger,{}),
      new Block(2000,376,blockType.danger,{}),
      new Block(2000,312,blockType.danger,{}),
      new Block(2000,248,blockType.danger,{}),
      new Block(2000,184,blockType.falling,{}),
    ]
  },
  { //Level 9
    inverse:[
      600,
      1000,
      1450,
      1750,
      2050,
      2555
    ],
    blocks:[
      new Block(400,200,blockType.text,{text:"The world revolves around me >:3"}),

      new Block(500,300,blockType.falling,{}),

      new Block(750,100,blockType.danger,{}),
      new Block(750,164,blockType.danger,{}),
      new Block(750,228,blockType.danger,{}),
      new Block(750,296,blockType.danger,{}),
      new Block(750,360,blockType.danger,{}),
      new Block(750,428,blockType.danger,{}),
      new Block(750,488,blockType.danger,{}),

      new Block(814,100,blockType.danger,{}),
      new Block(814,164,blockType.normal,{}),
      new Block(814,228,blockType.danger,{}),

      new Block(878,100,blockType.danger,{}),
      new Block(878,164,blockType.danger,{}),
      new Block(878,228,blockType.danger,{}),

      new Block(1200,100,blockType.danger,{}),
      new Block(1200,164,blockType.danger,{}),
      new Block(1200,228,blockType.danger,{}),
      new Block(1200,296,blockType.danger,{}),
      new Block(1200,360,blockType.danger,{}),
      new Block(1200,428,blockType.danger,{}),
      new Block(1200,488,blockType.danger,{}),

      new Block(1264,360,blockType.danger,{}),
      new Block(1264,428,blockType.normal,{}),

      new Block(1328,360,blockType.danger,{}),
      new Block(1328,428,blockType.danger,{}),
      new Block(1328,488,blockType.danger,{}),

      new Block(1600,164,blockType.normal,{}),

      new Block(1600,296,blockType.danger,{}),
      new Block(1600,360,blockType.danger,{}),
      new Block(1600,428,blockType.danger,{}),
      new Block(1600,488,blockType.danger,{}),

      new Block(1900,100,blockType.danger,{}),
      new Block(1900,164,blockType.danger,{}),
      new Block(1900,228,blockType.danger,{}),
      new Block(1900,296,blockType.danger,{}),
      new Block(1900,360,blockType.danger,{}),
      new Block(1900,428,blockType.danger,{}),
      new Block(1900,488,blockType.normal,{}),

      new Block(2150,164,blockType.normal,{}),

      new Block(2150,296,blockType.danger,{}),
      new Block(2150,360,blockType.danger,{}),
      new Block(2150,428,blockType.danger,{}),
      new Block(2150,488,blockType.danger,{}),

      new Block(2345,228,blockType.danger,{}),
      new Block(2345,296,blockType.danger,{}),
      new Block(2345,360,blockType.danger,{}),
      new Block(2345,428,blockType.danger,{}),
      new Block(2345,488,blockType.danger,{}),

      new Block(2409,228,blockType.danger,{}),
      new Block(2409,296,blockType.normal,{}),
      new Block(2409,360,blockType.danger,{}),

      new Block(2473,228,blockType.danger,{}),
      new Block(2473,296,blockType.danger,{}),
      new Block(2473,360,blockType.danger,{}),

    ]
  },
  { //Level 10
    inverse:[
      800,
      1300,
      1800,
      2300,
      2800,
      3000
    ],
    blocks:[
      new Block(400,450,blockType.text,{text:"Why did the golfer where two pairs of pants?"}),
      new Block(400,500,blockType.text,{text:"Incase he got a hole in one!"}),

      new Block(550,300,blockType.normal,{}),

      new Block(800,32,blockType.danger,{}),
      new Block(800,96,blockType.danger,{}),
      new Block(800,160,blockType.danger,{}),

      new Block(800,440,blockType.danger,{}),
      new Block(800,504,blockType.danger,{}),
      new Block(800,568,blockType.danger,{}),

      new Block(1050,364,blockType.danger,{}),
      new Block(1050,300,blockType.normal,{}),
      new Block(1050,236,blockType.danger,{}),

      new Block(1300,32,blockType.danger,{}),
      new Block(1300,96,blockType.danger,{}),
      new Block(1300,160,blockType.danger,{}),

      new Block(1300,440,blockType.danger,{}),
      new Block(1300,504,blockType.danger,{}),
      new Block(1300,568,blockType.danger,{}),

      new Block(1550,364,blockType.danger,{}),
      new Block(1550,300,blockType.normal,{}),
      new Block(1550,236,blockType.danger,{}),

      new Block(1800,32,blockType.danger,{}),
      new Block(1800,96,blockType.danger,{}),
      new Block(1800,160,blockType.danger,{}),

      new Block(1800,440,blockType.danger,{}),
      new Block(1800,504,blockType.danger,{}),
      new Block(1800,568,blockType.danger,{}),

      new Block(2050,364,blockType.danger,{}),
      new Block(2050,300,blockType.normal,{}),
      new Block(2050,236,blockType.danger,{}),

      new Block(2300,32,blockType.danger,{}),
      new Block(2300,96,blockType.danger,{}),
      new Block(2300,160,blockType.danger,{}),

      new Block(2300,440,blockType.danger,{}),
      new Block(2300,504,blockType.danger,{}),
      new Block(2300,568,blockType.danger,{}),

      new Block(2550,364,blockType.danger,{}),
      new Block(2550,300,blockType.normal,{}),
      new Block(2550,236,blockType.danger,{}),

      new Block(2800,32,blockType.danger,{}),
      new Block(2800,96,blockType.danger,{}),
      new Block(2800,160,blockType.danger,{}),

      new Block(2800,440,blockType.danger,{}),
      new Block(2800,504,blockType.danger,{}),
      new Block(2800,568,blockType.danger,{}),
    ]
  },
  { //Level 11
    inverse:[
      700,
      1100,
      1500,
      1900,
      2300,
      2700,
      3000
    ],
    blocks:[
      new Block(400,450,blockType.text,{text:"You could say my jokes weren't half bad."}),
      new Block(400,500,blockType.text,{text:"Only because they were completely bad."}),

      new Block(550,300,blockType.normal,{}),

      new Block(700,32,blockType.danger,{}),
      new Block(700,96,blockType.danger,{}),
      new Block(700,160,blockType.danger,{}),
      new Block(700,224,blockType.danger,{}),
      new Block(700,288,blockType.danger,{}),
      new Block(700,352,blockType.danger,{}),
      new Block(700,568,blockType.bounce,{}),

      new Block(900,300,blockType.falling,{}),

      new Block(1100,568,blockType.danger,{}),
      new Block(1100,504,blockType.danger,{}),
      new Block(1100,440,blockType.danger,{}),
      new Block(1100,376,blockType.danger,{}),
      new Block(1100,312,blockType.danger,{}),
      new Block(1100,248,blockType.danger,{}),
      new Block(1100,32,blockType.bounce,{}),

      new Block(1300,300,blockType.falling,{}),

      new Block(1500,32,blockType.danger,{}),
      new Block(1500,96,blockType.danger,{}),
      new Block(1500,160,blockType.danger,{}),
      new Block(1500,224,blockType.danger,{}),
      new Block(1500,288,blockType.danger,{}),
      new Block(1500,352,blockType.danger,{}),
      new Block(1500,568,blockType.bounce,{}),

      new Block(1700,300,blockType.falling,{}),

      new Block(1900,568,blockType.danger,{}),
      new Block(1900,504,blockType.danger,{}),
      new Block(1900,440,blockType.danger,{}),
      new Block(1900,376,blockType.danger,{}),
      new Block(1900,312,blockType.danger,{}),
      new Block(1900,248,blockType.danger,{}),
      new Block(1900,32,blockType.bounce,{}),

      new Block(2100,300,blockType.falling,{}),

      new Block(2300,32,blockType.danger,{}),
      new Block(2300,96,blockType.danger,{}),
      new Block(2300,160,blockType.danger,{}),
      new Block(2300,224,blockType.danger,{}),
      new Block(2300,288,blockType.danger,{}),
      new Block(2300,352,blockType.danger,{}),
      new Block(2300,568,blockType.bounce,{}),

      new Block(2500,300,blockType.falling,{}),

      new Block(2700,568,blockType.danger,{}),
      new Block(2700,504,blockType.danger,{}),
      new Block(2700,440,blockType.danger,{}),
      new Block(2700,376,blockType.danger,{}),
      new Block(2700,312,blockType.danger,{}),
      new Block(2700,248,blockType.danger,{}),
      new Block(2700,32,blockType.bounce,{}),
    ]
  }
]
