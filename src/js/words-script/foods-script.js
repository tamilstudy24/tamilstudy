const audio = [
  {
    audioSrc: "../../src/audio/words-audio/foods/01.mp3",
    imageSrc: "../../src/img/words-img/foods/01.jpg",
    tamil: "புட்டு",
    pronunciation: "Puttu",
    english: "Pittu"
  },

  {
    audioSrc: "../../src/audio/words-audio/foods/02.mp3",
    imageSrc: "../../src/img/words-img/foods/02.jpg",
    tamil: "சோறு",
    pronunciation: "Soru",
    english: "Rice"
  },
  {
    audioSrc: "../../src/audio/words-audio/foods/03.mp3",
    imageSrc: "../../src/img/words-img/foods/03.jpg",
    tamil: "அப்பம் ",
    pronunciation: "Appam",
    english: "Hoppers"
  },
  {
    audioSrc: "../../src/audio/words-audio/foods/04.mp3",
    imageSrc: "../../src/img/words-img/foods/04.jpg",
    tamil: "இடியப்பம்",
    pronunciation: "Idiyappam",
    english: "String hoppers"
  },
  {
    audioSrc: "../../src/audio/words-audio/foods/05.mp3",
    imageSrc: "../../src/img/words-img/foods/05.jpg",
    tamil: "பலகாரம்",
    pronunciation: "Palakaram",
    english: "Snacks"
  },
  {
    audioSrc: "../../src/audio/words-audio/foods/06.mp3",
    imageSrc: "../../src/img/words-img/foods/06.jpg",
    tamil: "இட்லி",
    pronunciation: "Idly",
    english: "Idly"
  },
  {
    audioSrc: "../../src/audio/words-audio/foods/07.mp3",
    imageSrc: "../../src/img/words-img/foods/07.jpg",
    tamil: "தோசை",
    pronunciation: "Thosai",
    english: "Dosa"
  },
  {
    audioSrc: "../../src/audio/words-audio/foods/08.mp3",
    imageSrc: "../../src/img/words-img/foods/08.jpg",
    tamil: "ரொட்டி",
    pronunciation: "Rotty",
    english: "Rotty"
  },
  {
    audioSrc: "../../src/audio/words-audio/foods/09.mp3",
    imageSrc: "../../src/img/words-img/foods/09.jpg",
    tamil: "பொங்கல்",
    pronunciation: "Pongal",
    english: "Pongal"
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