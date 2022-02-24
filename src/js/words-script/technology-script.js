const audio = [
  {
    audioSrc: "../../src/audio/words-audio/technology/01.mp3",
    imageSrc: "../../src/img/words-img/technology/01.jpg",
    tamil: "கணினி",
    pronunciation: "Kanini",
    english: "Computer"
  },

  {
    audioSrc: "../../src/audio/words-audio/technology/02.mp3",
    imageSrc: "../../src/img/words-img/technology/02.jpg",
    tamil: "தொலைபேசி",
    pronunciation: "Tholaipesi",
    english: "Telephone"
  },
  {
    audioSrc: "../../src/audio/words-audio/technology/03.mp3",
    imageSrc: "../../src/img/words-img/technology/03.jpg",
    tamil: "இணையம்",
    pronunciation: "Inaiyam",
    english: "Internet"
  },
  {
    audioSrc: "../../src/audio/words-audio/technology/04.mp3",
    imageSrc: "../../src/img/words-img/technology/04.jpg",
    tamil: "வலைத்தளம்",
    pronunciation: "Valaiththalam",
    english: "Website"
  },
  {
    audioSrc: "../../src/audio/words-audio/technology/05.mp3",
    imageSrc: "../../src/img/words-img/technology/05.jpg",
    tamil: "வானொலி",
    pronunciation: "Vaanoli",
    english: "Radio"
  },
  {
    audioSrc: "../../src/audio/words-audio/technology/06.mp3",
    imageSrc: "../../src/img/words-img/technology/06.jpg",
    tamil: "தொலைக்காட்சிப் பெட்டி",
    pronunciation: "Tholaikkadsippeddy",
    english: "Television"
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