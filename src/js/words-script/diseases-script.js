const audio = [
  {
    audioSrc: "../../src/audio/words-audio/diseases/01.mp3",
    imageSrc: "../../src/img/words-img/diseases/01.jpg",
    tamil: "இருமல்",
    pronunciation: "Irumal",
    english: "Cough"
  },

  {
    audioSrc: "../../src/audio/words-audio/diseases/02.mp3",
    imageSrc: "../../src/img/words-img/diseases/02.jpg",
    tamil: "காய்ச்சல்",
    pronunciation: "Kachchal",
    english: "Fever"
  },
  {
    audioSrc: "../../src/audio/words-audio/diseases/03.mp3",
    imageSrc: "../../src/img/words-img/diseases/03.jpg",
    tamil: "இரத்தஅழுத்தம்",
    pronunciation: "Iraththaaluththam",
    english: "Blood pressure "
  },
  {
    audioSrc: "../../src/audio/words-audio/diseases/04.mp3",
    imageSrc: "../../src/img/words-img/diseases/04.jpg",
    tamil: "பக்கவாதம்",
    pronunciation: "Pakkavatham",
    english: "Stroke"
  },
  {
    audioSrc: "../../src/audio/words-audio/diseases/05.mp3",
    imageSrc: "../../src/img/words-img/diseases/05.jpg",
    tamil: "மனஅழுத்தம்",
    pronunciation: "Mana auththam",
    english: "Depression"
  },
  {
    audioSrc: "../../src/audio/words-audio/diseases/06.mp3",
    imageSrc: "../../src/img/words-img/diseases/06.jpg",
    tamil: "காசநோய்",
    pronunciation: "Kasanooi",
    english: "Phthisis"
  },
  {
    audioSrc: "../../src/audio/words-audio/diseases/07.mp3",
    imageSrc: "../../src/img/words-img/diseases/07.jpg",
    tamil: "தலையிடி",
    pronunciation: "Thalaijidi",
    english: "Headache"
  },
  {
    audioSrc: "../../src/audio/words-audio/diseases/08.mp3",
    imageSrc: "../../src/img/words-img/diseases/08.jpg",
    tamil: "வயிற்றுக் குத்து",
    pronunciation: "Vajitru kuthu",
    english: "Abdominal pain"
  },
  {
    audioSrc: "../../src/audio/words-audio/diseases/09.mp3",
    imageSrc: "../../src/img/words-img/diseases/09.jpg",
    tamil: "வாந்திபேதி",
    pronunciation: "Vanthipethi",
    english: "Vomit"
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