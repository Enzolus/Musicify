let musicDB = [
    {
        id: 0,
        name: "XO Tour life 3",
        author_name: "Lil uzi vert",
        img: "xo_tour_img.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "rap",
        musicName: "XO_TOUR.mp3",
        attribution: {
            song: "Clarx - Shakedown [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Shakedown",
            stream: "http://youtu.be/qJT0mc3q6Lg"
        }
    },
    {
        id: 1,
        name: "Games Worldbeat",
        author_name: "Bernardo R.",
        img: "games.jpg",
        lang: null,
        timesPlayed: 0,
        type:"instrumental",
        musicName: "mixkit-games-worldbeat-466.mp3",
        attribution: {
            song: "Games Worldbeat",
            musicBy: "mixkit",
            download: null,
            stream: null
        }
    },
    {
        id: 2,
        name: "Highest in the room",
        author_name: "Travis scott",
        img: "highest.jpg",
        lang: "ENGLISH",
        type: "rap",
        timesPlayed: 0,
        musicName: "HIGHEST.mp3",
        attribution: {
            song: "ROY KNOX - Over My Head (Feat. Mike Robert) [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/OverMyHead",
            stream: null
        }
    },
    {
        id: 3,
        name: "Yosemite",
        author_name: "Travis scott",
        img: "yosemite.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "rap",
        musicName: "YOSEMITE.mp3",
        attribution: {
            song: "Subtact - Want You (feat. Sara Skinner) [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/WantYou",
            stream: "http://youtu.be/Pww31vN_1QY"
        }
    },
    {
        id: 4,
        name: "Meuda",
        author_name: "Tiakola",
        img: "meuda.jpg",
        lang: "french",
        timesPlayed: 0,
        type: "rap",
        musicName: "MEUDA.mp3",
        attribution: {
            song: "Midranger - Apocalypse [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Apocalypse",
            stream: "http://youtu.be/Whw1sWDpAvE"
        }
    },
    {
        id: 5,
        name: "6 O'clock",
        author_name: "BU$HI",
        img: "6.jpg",
        lang: "french",
        timesPlayed: 0,
        type: "rap",
        musicName: "6.mp3",
        attribution: {
            song: "N3WPORT - Alive (feat. Neoni) [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/NAlive",
            stream: "http://youtu.be/vJAcXd_UtWQ"
        }
    },
    {
        id: 6,
        name: "Impact Moderato",
        author_name: "Kevin MacLeod",
        img: "impact.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type:"instrumental",
        musicName: "impact.mp3",
        attribution: {
            song: "Impact Moderato",
            musicBy: "Kevin MacLeod",
            download: null,
            stream: null
        }
    },
    {
        id: 7,
        name: "Impact Moderato 2",
        author_name: "Kevin MacLeod",
        img: "impact2.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type:"instrumental",
        musicName: "impact2.mp3",
        attribution: {
            song: "Impact Moderato",
            musicBy: "Kevin MacLeod",
            download: null,
            stream: null
        }
    },
    {
        id: 8,
        name: "20 min",
        author_name: "Lil uzi vert",
        img: "xo_tour_img.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "rap",
        musicName: "20min.mp3",
        attribution: {
            song: "Heuse & Tom Wilson - Ignite [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Ignite",
            stream: "http://youtu.be/zbqgv0mMfwk"
        }
    },
    {
        id: 9,
        name: "Greedy",
        author_name: "Tate McRae",
        img: "greedy.png",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "pop",
        musicName: "greedy.mp3",
        attribution: {
            song: "Heuse & Tom Wilson - Ignite [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Ignite",
            stream: "http://youtu.be/zbqgv0mMfwk"
        }
    }
    ,
    {
        id: 10,
        name: "God's Plan",
        author_name: "Drake",
        img: "godsplan.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "pop",
        musicName: "godsplan.mp3",
        attribution: {
            song: "God's Plan-Drake",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Ignite",
            stream: "http://youtu.be/zbqgv0mMfwk"
        }
    }
    ,
    {
        id: 11,
        name: "Rockstar",
        author_name: "Post Malone",
        img: "rockstar.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "pop",
        musicName: "rockstar.mp3",
        attribution: {
            song: "Post Malone - Rockstar",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Ignite",
            stream: "http://youtu.be/zbqgv0mMfwk"
        }
    }
];

export default musicDB;
/*let musicDB = [
  {
    id:0,
    name:"Left Foot Up Right Foot Slide",
    author_name: "Yung Nazty",
    img: "left_foot_up_right_foot_slide.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"left_foot_up_right_foot_slide.mp3"
  },
  {
    id:1,
    name: "Intentions (feat. Quavo)",
    author_name: "Justin Bieber",
    img: "intentions.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"intentions.mp3"
  },
  {
    id:2,
    name: "Naina Da Kya Kasoor",
    author_name: "Amit Trivedi",
    img: "naina_da_kya_kasoor.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"Naina_da_kya_kasoor.mp3"
  },
  {
    id:3,
    name: "Señorita",
    author_name: "Shawn Mendes",
    img: "senorita.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"senorita.mp3"
  },
  {
    id:4,
    name: "Memories",
    author_name: "Maroon 5",
    img: "memories.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"memories.mp3"
  },
  {
    id:5,
    name: "Skechers",
    author_name: "DripReport",
    img: "skechers.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"Skechers.mp3"
  },
  {
    id:6,
    name: "Sunflower - Spider-Man: Into the Spider-Verse",
    author_name: "Post Malone",
    img: "sunflower.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"Sunflower.mp3"
  },
  {
    id:7,
    name: "I Can’t Get Enough",
    author_name: "benny blanco, Selena Gomez, J Balvin, Tainy",
    img: "i_cant_get_enough.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"i_cant_get_enough.mp3"
  },
  {
    id:8,
    name: "Old Town Road",
    author_name: "Lil Nas X",
    img: "old_town_road.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"old_town_road.mp3"
  },
  {
    id:9,
    name: "Beautiful Stillness",
    author_name: "Billy-Joe",
    img: "beautiful_stillness.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"Beautiful_Stillness.mp3"
  },
  {
    id:10,
    name: "death bed (coffee for your head)",
    author_name: "Powfu",
    img: "death_bed.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"death_bed.mp3"
  },
  {
    id:11,
    name: "Halka Halka (From \"Fanney Khan\")",
    author_name: "Sunidhi Chauhan",
    img: "halka_halka_suroor.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"halka_halka_suroor.mp3"
  },
  {
    id:12,
    name: "Kudi Nu Nachne De (From \"Angrezi Medium\")",
    author_name: "Vishal Dadlani",
    img: "kudi_nu_nachne_de.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"kudi_nu_nachne_de.mp3"
  },
  {
    id:13,
    name: "Illegal Weapon 2.0",
    author_name: "Jasmine Sandlas",
    img: "illeagal_weapon_2.jpg",
    lang:"PUBJABI",
    timesPlayed:0,
    musicName:"illeagal_weapon_2.mp3"
  },
  {
    id:14,
    name: "Genda Phool (feat. Payal Dev)",
    author_name: "Badshah",
    img: "genda_phool.jpg",
    lang:"BENGALI",
    timesPlayed:0,
    musicName:"genda_phool.mp3"
  },
  {
    id:15,
    name: "Yaar Mod Do",
    author_name: "Guru Randhawa",
    img: "yaar_mod_do.jpg",
    lang:"PUNJABI",
    timesPlayed:0,
    musicName:"yaar_mod_do.mp3"
  },
  {
    id:16,
    name: "Shayad",
    author_name: "Pritam",
    img: "shayad.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"shayad.mp3"
  },
  {
    id:17,
    name: "Without Me",
    author_name: "Halsey",
    img: "without_me.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"without_me.mp3"
  },
  {
    id:18,
    name: "Buttabomma - Telugu",
    author_name: "Armaan Malik",
    img: "buttabomma.jpg",
    lang:"TELUGU",
    timesPlayed:0,
    musicName:"ButtaBomma.mp3"
  },
  {
    id:19,
    name: "Coda",
    author_name: "Jakob Ahlbom",
    img: "coda.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"coda.mp3"
  },
  {
    id:20,
    name: "Khairiyat",
    author_name: "Arijit Singh",
    img: "khairiyat.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"khairiyat.mp3"
  },
  {
    id:21,
    name: "Haan Main Galat",
    author_name: "Pritam",
    img: "haan_mai_galat.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"haan_mai_galat.mp3"
  },
  {
    id:22,
    name: "Mere Liye Tum Kaafi Ho (From \"Shubh Mangal Zyada Saavdhan\")",
    author_name: "Ayushmann Khurrana",
    img: "mere_liiye_tum_kaafi_ho.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"mere_liiye_tum_kaafi_ho.mp3"
  },
  {
    id:23,
    name: "Fracture",
    author_name: "Jakob Ahlbom",
    img: "fracture.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"fracture.mp3"
  },
  {
    id:24,
    name: "Ghungroo (From \"War\")",
    author_name: "Arijit Singh",
    img: "ghungroo.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"ghungroo.mp3"
  },
  {
    id:25,
    name: "Happier",
    author_name: "Marshmello",
    img: "happier.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"happier.mp3"
  },
  {
    id:26,
    name: "Namo Namo",
    author_name: "Amit Trivedi",
    img: "namo_namo.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"namo_namo.mp3"
  },
  {
    id:27,
    name: "Faded",
    author_name: "Alan Walker",
    img: "faded.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"Faded_Alan_Walker.mp3"
  },
  {
    id:28,
    name: "I Don't Care (with Justin Bieber)",
    author_name: "Ed Sheeran",
    img: "i_dont_care.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"i_dont_care.mp3"
  }
]
export default musicDB;*/