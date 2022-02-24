const audio = [
  {
    audioSrc: "../../src/audio/words-audio/house/01.mp3",
    imageSrc: "../../src/img/words-img/house/01.jpg",
    tamil: "சமையலறை",
    pronunciation: "Samaiyalarai",
    english: "Kitchen"
  },

  {
    audioSrc: "../../src/audio/words-audio/house/02.mp3",
    imageSrc: "../../src/img/words-img/house/02.jpg",
    tamil: "குளியலறை",
    pronunciation: "Kuliyalarai",
    english: "Bathroom"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/03.mp3",
    imageSrc: "../../src/img/words-img/house/03.jpg",
    tamil: "கதவு",
    pronunciation: "Kathavu",
    english: "Door"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/04.mp3",
    imageSrc: "../../src/img/words-img/house/04.jpg",
    tamil: "வாசல்",
    pronunciation: "Vasal",
    english: "Threshold"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/05.mp3",
    imageSrc: "../../src/img/words-img/house/05.jpg",
    tamil: "ஜன்னல்",
    pronunciation: "Jannal",
    english: "Window"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/06.mp3",
    imageSrc: "../../src/img/words-img/house/06.jpg",
    tamil: "சுவர்",
    pronunciation: "Suvar",
    english: "Wall"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/07.mp3",
    imageSrc: "../../src/img/words-img/house/07.jpg",
    tamil: "அறை",
    pronunciation: "Arai",
    english: "Room"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/08.mp3",
    imageSrc: "../../src/img/words-img/house/08.jpg",
    tamil: "வரவேற்பறை",
    pronunciation: "Varevetpu arai",
    english: "Reception"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/09.mp3",
    imageSrc: "../../src/img/words-img/house/09.jpg",
    tamil: "கட்டில்",
    pronunciation: "Kaddil",
    english: "Bed"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/10.mp3",
    imageSrc: "../../src/img/words-img/house/10.jpg",
    tamil: "தோட்டம்",
    pronunciation: "Thoddam",
    english: "Garden"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/11.mp3",
    imageSrc: "../../src/img/words-img/house/11.jpg",
    tamil: "கிணறு ",
    pronunciation: "Kinaru",
    english: "Well"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/12.mp3",
    imageSrc: "../../src/img/words-img/house/12.jpg",
    tamil: "அடுப்பு",
    pronunciation: "Aduppu",
    english: "Stove"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/13.mp3",
    imageSrc: "../../src/img/words-img/house/13.jpg",
    tamil: "ஓடு",
    pronunciation: "Odu",
    english: "Sheel"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/14.mp3",
    imageSrc: "../../src/img/words-img/house/14.jpg",
    tamil: "கூரை",
    pronunciation: "Kurai",
    english: "Roof"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/15.mp3",
    imageSrc: "../../src/img/words-img/house/15.jpg",
    tamil: "மெத்தை",
    pronunciation: "Meththai",
    english: "Mattress"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/16.mp3",
    imageSrc: "../../src/img/words-img/house/16.jpg",
    tamil: "பாய்",
    pronunciation: "Paai",
    english: "Mat"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/17.mp3",
    imageSrc: "../../src/img/words-img/house/17.jpg",
    tamil: "தலையணை",
    pronunciation: "Thalaiyanai",
    english: "Pillow"
  },
  {
    audioSrc: "../../src/audio/words-audio/house/18.mp3",
    imageSrc: "../../src/img/words-img/house/18.jpg",
    tamil: "அலுமாரி",
    pronunciation: "Alumaari",
    english: "Cupboard"
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