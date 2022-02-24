const audio = [
  {
    audioSrc: "../../src/audio/words-audio/subjects/01.mp3",
    imageSrc: "../../src/img/words-img/subjects/01.jpg",
    tamil: "கணிதம்",
    pronunciation: "Kanitham",
    english: "Maths"
  },

  {
    audioSrc: "../../src/audio/words-audio/subjects/02.mp3",
    imageSrc: "../../src/img/words-img/subjects/02.jpg",
    tamil: "ஆங்கிலம்",
    pronunciation: "Aankilam",
    english: "English"
  },
  {
    audioSrc: "../../src/audio/words-audio/subjects/03.mp3",
    imageSrc: "../../src/img/words-img/subjects/03.jpg",
    tamil: "தமிழ்",
    pronunciation: "Tamizhl",
    english: "Tamil"
  },
  {
    audioSrc: "../../src/audio/words-audio/subjects/04.mp3",
    imageSrc: "../../src/img/words-img/subjects/04.jpg",
    tamil: "விஞ்ஞானம்  ",
    pronunciation: "Vinjanaam",
    english: "Science"
  },
  {
    audioSrc: "../../src/audio/words-audio/subjects/05.mp3",
    imageSrc: "../../src/img/words-img/subjects/05.jpg",
    tamil: "வரலாறு",
    pronunciation: "Varalaaru",
    english: "History"
  },
  {
    audioSrc: "../../src/audio/words-audio/subjects/06.mp3",
    imageSrc: "../../src/img/words-img/subjects/06.jpg",
    tamil: "புவியியல்",
    pronunciation: "Puvijiyal",
    english: "Geography"
  },
  {
    audioSrc: "../../src/audio/words-audio/subjects/07.mp3",
    imageSrc: "../../src/img/words-img/subjects/07.jpg",
    tamil: "வணிகவியல்",
    pronunciation: "Vanikaviyal",
    english: "Commerce"
  },
  {
    audioSrc: "../../src/audio/words-audio/subjects/08.mp3",
    imageSrc: "../../src/img/words-img/subjects/08.jpg",
    tamil: "உளவியல்",
    pronunciation: "Ulaviyaal",
    english: "Psychology "
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