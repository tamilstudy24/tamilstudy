const audio = [
  {
    audioSrc: "../../src/audio/words-audio/hospital/01.mp3",
    imageSrc: "../../src/img/words-img/hospital/01.jpg",
    tamil: "மருந்து",
    pronunciation: "Marunthu",
    english: "Medicine"
  },

  {
    audioSrc: "../../src/audio/words-audio/hospital/02.mp3",
    imageSrc: "../../src/img/words-img/hospital/02.jpg",
    tamil: "ஊசி",
    pronunciation: "Uusi",
    english: "Injection"
  },
  {
    audioSrc: "../../src/audio/words-audio/hospital/03.mp3",
    imageSrc: "../../src/img/words-img/hospital/03.jpg",
    tamil: "தாதி",
    pronunciation: "Thathi",
    english: "Nurse"
  },
  {
    audioSrc: "../../src/audio/words-audio/hospital/04.mp3",
    imageSrc: "../../src/img/words-img/hospital/04.jpg",
    tamil: "வைத்தியர்",
    pronunciation: "Vaiththiyar",
    english: "Doctor"
  },
  {
    audioSrc: "../../src/audio/words-audio/hospital/05.mp3",
    imageSrc: "../../src/img/words-img/hospital/05.jpg",
    tamil: "மருந்தகம்",
    pronunciation: "Marunthakam",
    english: "Pharmacy"
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