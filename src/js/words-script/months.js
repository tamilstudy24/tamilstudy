const audio = [
  {
    audioSrc: "../../src/audio/words-audio/months/01.mp3",
    imageSrc: "../../src/img/words-img/months/01.jpg",
    tamil: "தை",
    pronunciation: "Thai",
    english: "January"
  },

  {
    audioSrc: "../../src/audio/words-audio/months/02.mp3",
    imageSrc: "../../src/img/words-img/months/02.jpg",
    tamil: "மாசி",
    pronunciation: "Maasi",
    english: "February"
  },
  {
    audioSrc: "../../src/audio/words-audio/months/03.mp3",
    imageSrc: "../../src/img/words-img/months/03.jpg",
    tamil: "பங்குனி",
    pronunciation: "Panguni",
    english: "March"
  },
  {
    audioSrc: "../../src/audio/words-audio/months/04.mp3",
    imageSrc: "../../src/img/words-img/months/04.jpg",
    tamil: "சித்திரை",
    pronunciation: "Siththirai",
    english: "April"
  },
  {
    audioSrc: "../../src/audio/words-audio/months/05.mp3",
    imageSrc: "../../src/img/words-img/months/05.jpg",
    tamil: "வைகாசி",
    pronunciation: "Vaikashi",
    english: "May"
  },
  {
    audioSrc: "../../src/audio/words-audio/months/06.mp3",
    imageSrc: "../../src/img/words-img/months/06.jpg",
    tamil: "ஆனி",
    pronunciation: "Aani",
    english: "June"
  },
  {
    audioSrc: "../../src/audio/words-audio/months/07.mp3",
    imageSrc: "../../src/img/words-img/months/07.jpg",
    tamil: "ஆடி",
    pronunciation: "Aadi",
    english: "July"
  },
  {
    audioSrc: "../../src/audio/words-audio/months/08.mp3",
    imageSrc: "../../src/img/words-img/months/08.jpg",
    tamil: "ஆவணி",
    pronunciation: "Aavani",
    english: "August"
  },
  {
    audioSrc: "../../src/audio/words-audio/months/09.mp3",
    imageSrc: "../../src/img/words-img/months/09.jpg",
    tamil: "புரட்டாசி",
    pronunciation: "Puraddashi",
    english: "September"
  },
  {
    audioSrc: "../../src/audio/words-audio/months/10.mp3",
    imageSrc: "../../src/img/words-img/months/10.jpg",
    tamil: "ஐப்பசி",
    pronunciation: "Ippasi",
    english: "October"
  },
  {
    audioSrc: "../../src/audio/words-audio/months/11.mp3",
    imageSrc: "../../src/img/words-img/months/11.jpg",
    tamil: "கார்த்திகை",
    pronunciation: "Karththikai",
    english: "November"
  },
  {
    audioSrc: "../../src/audio/words-audio/months/12.mp3",
    imageSrc: "../../src/img/words-img/months/12.jpg",
    tamil: "மார்கழி",
    pronunciation: "Markali",
    english: "December"
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