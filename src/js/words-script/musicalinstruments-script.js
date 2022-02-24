const audio = [
  {
    audioSrc: "../../src/audio/words-audio/musicalinstruments/01.mp3",
    imageSrc: "../../src/img/words-img/musicalinstruments/01.jpg",
    tamil: "சங்கு",
    pronunciation: "Sanku",
    english: "Conch"
  },

  {
    audioSrc: "../../src/audio/words-audio/musicalinstruments/02.mp3",
    imageSrc: "../../src/img/words-img/musicalinstruments/02.jpg",
    tamil: "முரசு",
    pronunciation: "Murasu",
    english: "Murasu"
  },
  {
    audioSrc: "../../src/audio/words-audio/musicalinstruments/03.mp3",
    imageSrc: "../../src/img/words-img/musicalinstruments/03.jpg",
    tamil: "புல்லாங்குழல்",
    pronunciation: "Pullaankulal",
    english: "Flute"
  },
  {
    audioSrc: "../../src/audio/words-audio/musicalinstruments/04.mp3",
    imageSrc: "../../src/img/words-img/musicalinstruments/04.jpg",
    tamil: "நாதஸ்வரம்",
    pronunciation: "Nathasvaram",
    english: "Nathasvaram"
  },
  {
    audioSrc: "../../src/audio/words-audio/musicalinstruments/05.mp3",
    imageSrc: "../../src/img/words-img/musicalinstruments/05.jpg",
    tamil: "ஹார்மோனியம்",
    pronunciation: "Harmonium",
    english: "Harmonium"
  },
  {
    audioSrc: "../../src/audio/words-audio/musicalinstruments/06.mp3",
    imageSrc: "../../src/img/words-img/musicalinstruments/06.jpg",
    tamil: "மிருதங்கம்",
    pronunciation: "Miruthankam",
    english: "Mridanga"
  },
  {
    audioSrc: "../../src/audio/words-audio/musicalinstruments/07.mp3",
    imageSrc: "../../src/img/words-img/musicalinstruments/07.jpg",
    tamil: "வயலின்",
    pronunciation: "Violin",
    english: "Violin "
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