const audio = [
  {
    audioSrc: "../../src/audio/words-audio/animals/01.mp3",
    imageSrc: "../../src/img/words-img/animals/01.jpg",
    tamil: "நாய்",
    pronunciation: "Naai",
    english: "Dog"
  },

  {
    audioSrc: "../../src/audio/words-audio/animals/02.mp3",
    imageSrc: "../../src/img/words-img/animals/02.jpg",
    tamil: "பூனை",
    pronunciation: "Poonai",
    english: "Cat"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/03.mp3",
    imageSrc: "../../src/img/words-img/animals/03.jpg",
    tamil: "ஓநாய்",
    pronunciation: "Onai",
    english: "Wolf"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/04.mp3",
    imageSrc: "../../src/img/words-img/animals/04.jpg",
    tamil: "குதிரை",
    pronunciation: "Kuthirai",
    english: "Horse"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/05.mp3",
    imageSrc: "../../src/img/words-img/animals/05.jpg",
    tamil: "சிங்கம் ",
    pronunciation: "Singam",
    english: "Lion"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/06.mp3",
    imageSrc: "../../src/img/words-img/animals/06.jpg",
    tamil: "புலி",
    pronunciation: "Puli",
    english: "Tiger"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/07.mp3",
    imageSrc: "../../src/img/words-img/animals/07.jpg",
    tamil: "ஆடு",
    pronunciation: "Aadu",
    english: "Goat"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/08.mp3",
    imageSrc: "../../src/img/words-img/animals/08.jpg",
    tamil: "யானை",
    pronunciation: "Yaanai",
    english: "Elephant"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/09.mp3",
    imageSrc: "../../src/img/words-img/animals/09.jpg",
    tamil: "கரடி",
    pronunciation: "Karadi",
    english: "Bear"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/10.mp3",
    imageSrc: "../../src/img/words-img/animals/10.jpg",
    tamil: "பசு",
    pronunciation: "Pasu",
    english: "Cow"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/11.mp3",
    imageSrc: "../../src/img/words-img/animals/11.jpg",
    tamil: "மான்",
    pronunciation: "Maan",
    english: "Deer"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/12.mp3",
    imageSrc: "../../src/img/words-img/animals/12.jpg",
    tamil: "பன்றி",
    pronunciation: "Panri",
    english: "Pig"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/13.mp3",
    imageSrc: "../../src/img/words-img/animals/13.jpg",
    tamil: "கங்காரு ",
    pronunciation: "Kangaru",
    english: "Kangaroo"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/14.mp3",
    imageSrc: "../../src/img/words-img/animals/14.jpg",
    tamil: "கழுதை",
    pronunciation: "Kaluthai",
    english: "Donkey"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/15.mp3",
    imageSrc: "../../src/img/words-img/animals/15.jpg",
    tamil: "செம்மறி ஆடு ",
    pronunciation: "Semmari aadu",
    english: "Sheep"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/16.mp3",
    imageSrc: "../../src/img/words-img/animals/16.jpg",
    tamil: "முயல்",
    pronunciation: "Muyal",
    english: "Rabbit"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/17.mp3",
    imageSrc: "../../src/img/words-img/animals/17.jpg",
    tamil: "ஒட்டகம்",
    pronunciation: "Oddakam",
    english: "Camel"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/18.mp3",
    imageSrc: "../../src/img/words-img/animals/18.jpg",
    tamil: "எருமை",
    pronunciation: "Erumai",
    english: "Buffalo"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/19.mp3",
    imageSrc: "../../src/img/words-img/animals/19.jpg",
    tamil: "குரங்கு ",
    pronunciation: "Kuranku",
    english: "Monkey"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/20.mp3",
    imageSrc: "../../src/img/words-img/animals/20.jpg",
    tamil: "வரிக்குதிரை",
    pronunciation: "Varikkuthirai",
    english: "Zebra"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/21.mp3",
    imageSrc: "../../src/img/words-img/animals/21.jpg",
    tamil: "சிறுத்தை ",
    pronunciation: "Siruththai",
    english: "Leperd"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/22.mp3",
    imageSrc: "../../src/img/words-img/animals/22.jpg",
    tamil: "நரி",
    pronunciation: "Nari",
    english: "Fox"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/23.mp3",
    imageSrc: "../../src/img/words-img/animals/23.jpg",
    tamil: "ஒட்டகச்சிவிங்கி",
    pronunciation: "Oddakasivinki",
    english: "Giraffe"
  },
  {
    audioSrc: "../../src/audio/words-audio/animals/24.mp3",
    imageSrc: "../../src/img/words-img/animals/24.jpg",
    tamil: "காண்டாமிருகம்",
    pronunciation: "Kaandaamirukam",
    english: "Rhinoceros"
  }
]
var i = 0;

function mySlide(param) {
  if (param === 'next') {
    i++;
    if (i === audio.length) { i = audio.length - 1; }
  } else {
    i--;
    if (i < 0) { i = 0; }
  }

  document.getElementById("player").setAttribute('src', audio[i].audioSrc);
  document.getElementById("img").src = audio[i].imageSrc;
  document.getElementById("tamil").innerHTML = audio[i].tamil
  document.getElementById("pronunciation").innerHTML = audio[i].pronunciation
  document.getElementById("english").innerHTML = audio[i].english

  if (i == audio.length - 1) {
    document.getElementById('next').classList.add("hide")
  }
  else if (i == 0) {
    document.getElementById('back').classList.add("hide")
  }
  else if (i != audio.length - 1 || i != 0) {
    document.getElementById('next').classList.remove("hide")
    document.getElementById('back').classList.remove("hide")
  }
}