const audio = [
  {
    audioSrc: "../../src/audio/words-audio/vegetables/01.mp3",
    imageSrc: "../../src/img/words-img/vegetables/01.jpg",
    tamil: "கத்தரிக்காய்",
    pronunciation: "Kaththarikkai",
    english: "Brinjal"
  },

  {
    audioSrc: "../../src/audio/words-audio/vegetables/02.mp3",
    imageSrc: "../../src/img/words-img/vegetables/02.jpg",
    tamil: "புடலங்காய்",
    pronunciation: "Pudalankai",
    english: "Snake Gourd"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/03.mp3",
    imageSrc: "../../src/img/words-img/vegetables/03.jpg",
    tamil: "வெண்டைக்காய் ",
    pronunciation: "Vendakkai",
    english: "Ladyfinger"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/04.mp3",
    imageSrc: "../../src/img/words-img/vegetables/04.jpg",
    tamil: "தக்காளி",
    pronunciation: "Thakkali",
    english: "Tomato"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/05.mp3",
    imageSrc: "../../src/img/words-img/vegetables/05.jpg",
    tamil: "மிளகாய்",
    pronunciation: "Milakai",
    english: "Chilly"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/06.mp3",
    imageSrc: "../../src/img/words-img/vegetables/06.jpg",
    tamil: "வெங்காயம்",
    pronunciation: "Venkajam",
    english: "Onions"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/07.mp3",
    imageSrc: "../../src/img/words-img/vegetables/07.jpg",
    tamil: "பாகற்காய்",
    pronunciation: "Pakatkai",
    english: "Bitter gourd"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/08.mp3",
    imageSrc: "../../src/img/words-img/vegetables/08.jpg",
    tamil: "வெள்ளரிக்காய்",
    pronunciation: "Vellarikaai",
    english: "Cucumber"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/09.mp3",
    imageSrc: "../../src/img/words-img/vegetables/09.jpg",
    tamil: "தேங்காய்",
    pronunciation: "Thenkaai",
    english: "Coconut"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/10.mp3",
    imageSrc: "../../src/img/words-img/vegetables/10.jpg",
    tamil: "கோவா",
    pronunciation: "Gova",
    english: "Goa"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/11.mp3",
    imageSrc: "../../src/img/words-img/vegetables/11.jpg",
    tamil: "மரவள்ளிக்கிழங்கு",
    pronunciation: "Maravallikilanku",
    english: "Tapioca"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/12.mp3",
    imageSrc: "../../src/img/words-img/vegetables/12.jpg",
    tamil: "உருளைக்கிழங்கு",
    pronunciation: "Urulaikilanku",
    english: "Potato"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/13.mp3",
    imageSrc: "../../src/img/words-img/vegetables/13.jpg",
    tamil: "பூசணிக்காய்",
    pronunciation: "Poosanikkai",
    english: "Pumkin"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/14.mp3",
    imageSrc: "../../src/img/words-img/vegetables/14.jpg",
    tamil: "சுரைக்காய்",
    pronunciation: "Suraikkai",
    english: "Zucchini"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/15.mp3",
    imageSrc: "../../src/img/words-img/vegetables/15.jpg",
    tamil: "அவரைக்காய்",
    pronunciation: "Avarikkai",
    english: "Broadbeans"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/16.mp3",
    imageSrc: "../../src/img/words-img/vegetables/16.jpg",
    tamil: "முருக்கங்காய்",
    pronunciation: "Murukkankay",
    english: "Drumstick"
  },
  {
    audioSrc: "../../src/audio/words-audio/vegetables/17.mp3",
    imageSrc: "../../src/img/words-img/vegetables/17.jpg",
    tamil: "கீரை",
    pronunciation: "Keerai",
    english: "Spinach"
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