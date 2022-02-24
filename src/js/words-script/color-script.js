const audio = [
  {
    audioSrc: "../../src/audio/words-audio/colors/01.mp3",
    imageSrc: "../../src/img/words-img/colors/01.jpg",
    tamil: "சிவப்பு",
    pronunciation: "Sivappu",
    english: "Red"
  },

  {
    audioSrc: "../../src/audio/words-audio/colors/02.mp3",
    imageSrc: "../../src/img/words-img/colors/02.jpg",
    tamil: "பச்சை",
    pronunciation: "Pachchai",
    english: "Green"
  },
  {
    audioSrc: "../../src/audio/words-audio/colors/03.mp3",
    imageSrc: "../../src/img/words-img/colors/03.jpg",
    tamil: "மஞ்சள்",
    pronunciation: "Manchal",
    english: "Yellow"
  },
  {
    audioSrc: "../../src/audio/words-audio/colors/04.mp3",
    imageSrc: "../../src/img/words-img/colors/04.jpg",
    tamil: "நீலம்",
    pronunciation: "Neelam",
    english: "Blue"
  },
  {
    audioSrc: "../../src/audio/words-audio/colors/05.mp3",
    imageSrc: "../../src/img/words-img/colors/05.jpg",
    tamil: "கறுப்பு",
    pronunciation: "Karuppu",
    english: "Black"
  },
  {
    audioSrc: "../../src/audio/words-audio/colors/06.mp3",
    imageSrc: "../../src/img/words-img/colors/06.jpg",
    tamil: "வெள்ளை",
    pronunciation: "Vellai",
    english: "White"
  },
  {
    audioSrc: "../../src/audio/words-audio/colors/07.mp3",
    imageSrc: "../../src/img/words-img/colors/07.jpg",
    tamil: "சாம்பல்",
    pronunciation: "Saampal",
    english: "Grey"
  },
  {
    audioSrc: "../../src/audio/words-audio/colors/08.mp3",
    imageSrc: "../../src/img/words-img/colors/08.jpg",
    tamil: "ஊதா",
    pronunciation: "Uutha",
    english: "Purple"
  },
  {
    audioSrc: "../../src/audio/words-audio/colors/09.mp3",
    imageSrc: "../../src/img/words-img/colors/09.jpg",
    tamil: "செம்மஞ்சள்",
    pronunciation: "Semmanchal",
    english: "Orange"
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