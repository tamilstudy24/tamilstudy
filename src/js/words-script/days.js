const audio = [
  {
    audioSrc: "../../src/audio/words-audio/days/01.mp3",
    imageSrc: "../../src/img/words-img/days/01.jpg",
    tamil: "திங்கள்",
    pronunciation: "Thingal",
    english: "Monday"
  },

  {
    audioSrc: "../../src/audio/words-audio/days/02.mp3",
    imageSrc: "../../src/img/words-img/days/02.jpg",
    tamil: "செவ்வாய்",
    pronunciation: "Sevvai",
    english: "Tuesday"
  },
  {
    audioSrc: "../../src/audio/words-audio/days/03.mp3",
    imageSrc: "../../src/img/words-img/days/03.jpg",
    tamil: "புதன்",
    pronunciation: "Puthan",
    english: "Wednesday"
  },
  {
    audioSrc: "../../src/audio/words-audio/days/04.mp3",
    imageSrc: "../../src/img/words-img/days/04.jpg",
    tamil: "வியாழன்",
    pronunciation: "Viyalan",
    english: "Thursday"
  },
  {
    audioSrc: "../../src/audio/words-audio/days/05.mp3",
    imageSrc: "../../src/img/words-img/days/05.jpg",
    tamil: "வெள்ளி",
    pronunciation: "Velli",
    english: "Friday"
  },
  {
    audioSrc: "../../src/audio/words-audio/days/06.mp3",
    imageSrc: "../../src/img/words-img/days/06.jpg",
    tamil: "சனி",
    pronunciation: "Sani",
    english: "Saturday"
  },
  {
    audioSrc: "../../src/audio/words-audio/days/07.mp3",
    imageSrc: "../../src/img/words-img/days/07.jpg",
    tamil: "ஞாயிறு",
    pronunciation: "Naayiru",
    english: "Sunday"
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