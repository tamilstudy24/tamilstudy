const audio = [
  {
    audioSrc: "../../src/audio/words-audio/dress/01.mp3",
    imageSrc: "../../src/img/words-img/dress/01.jpg",
    tamil: "சட்டை",
    pronunciation: "Saddai",
    english: "Frock"
  },

  {
    audioSrc: "../../src/audio/words-audio/dress/02.mp3",
    imageSrc: "../../src/img/words-img/dress/02.jpg",
    tamil: "காற்சட்டை",
    pronunciation: "Katsaddai",
    english: "Trouser"
  },
  {
    audioSrc: "../../src/audio/words-audio/dress/03.mp3",
    imageSrc: "../../src/img/words-img/dress/03.jpg",
    tamil: "சறம்",
    pronunciation: "Saram",
    english: "Sarong"
  },
  {
    audioSrc: "../../src/audio/words-audio/dress/04.mp3",
    imageSrc: "../../src/img/words-img/dress/04.jpg",
    tamil: "வேட்டி",
    pronunciation: "Veddi",
    english: "Veddi"
  },
  {
    audioSrc: "../../src/audio/words-audio/dress/05.mp3",
    imageSrc: "../../src/img/words-img/dress/05.jpg",
    tamil: "பாவாடை",
    pronunciation: "Pavaadai",
    english: "Skirt"
  },
  {
    audioSrc: "../../src/audio/words-audio/dress/06.mp3",
    imageSrc: "../../src/img/words-img/dress/06.jpg",
    tamil: "சேலை",
    pronunciation: "Selai",
    english: "Saree"
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