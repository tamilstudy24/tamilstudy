const audio = [
  {
    audioSrc: "../../src/audio/words-audio/shapes/01.mp3",
    imageSrc: "../../src/img/words-img/shapes/01.jpg",
    tamil: "வட்டம்",
    pronunciation: "Vaddam",
    english: "Circle"
  },

  {
    audioSrc: "../../src/audio/words-audio/shapes/02.mp3",
    imageSrc: "../../src/img/words-img/shapes/02.jpg",
    tamil: "சதுரம்",
    pronunciation: "Sathuram",
    english: "Square"
  },
  {
    audioSrc: "../../src/audio/words-audio/shapes/03.mp3",
    imageSrc: "../../src/img/words-img/shapes/03.jpg",
    tamil: "செவ்வகம்",
    pronunciation: "Sevvakam",
    english: "Rectangle"
  },
  {
    audioSrc: "../../src/audio/words-audio/shapes/04.mp3",
    imageSrc: "../../src/img/words-img/shapes/04.jpg",
    tamil: "முக்கோணம்",
    pronunciation: "Mukkonam",
    english: "Triangle"
  },
  {
    audioSrc: "../../src/audio/words-audio/shapes/05.mp3",
    imageSrc: "../../src/img/words-img/shapes/05.jpg",
    tamil: "நீள்வட்டம்",
    pronunciation: "Neelvaddam",
    english: "Oval"
  },
  {
    audioSrc: "../../src/audio/words-audio/shapes/06.mp3",
    imageSrc: "../../src/img/words-img/shapes/06.jpg",
    tamil: "ஐங்கோணி",
    pronunciation: "Inngoni",
    english: "Pentagon"
  },
  {
    audioSrc: "../../src/audio/words-audio/shapes/07.mp3",
    imageSrc: "../../src/img/words-img/shapes/07.jpg",
    tamil: "சரிவகம்",
    pronunciation: "Sarivakam",
    english: "Trapezoid "
  },
  {
    audioSrc: "../../src/audio/words-audio/shapes/08.mp3",
    imageSrc: "../../src/img/words-img/shapes/08.jpg",
    tamil: "உருளை",
    pronunciation: "Urulai",
    english: "Cylinder"
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