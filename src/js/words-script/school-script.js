const audio = [
  {
    audioSrc: "../../src/audio/words-audio/school/01.mp3",
    imageSrc: "../../src/img/words-img/school/01.jpg",
    tamil: "அதிபர்",
    pronunciation: "Athipar",
    english: "Principal"
  },

  {
    audioSrc: "../../src/audio/words-audio/school/02.mp3",
    imageSrc: "../../src/img/words-img/school/02.jpg",
    tamil: "ஆசிரியர்",
    pronunciation: "Aasiriyar",
    english: "Teacher"
  },
  {
    audioSrc: "../../src/audio/words-audio/school/03.mp3",
    imageSrc: "../../src/img/words-img/school/03.jpg",
    tamil: "மாணவர்",
    pronunciation: "Maanavar",
    english: "Student"
  },
  {
    audioSrc: "../../src/audio/words-audio/school/04.mp3",
    imageSrc: "../../src/img/words-img/school/04.jpg",
    tamil: "வகுப்பு",
    pronunciation: "Vakuppu",
    english: "Class"
  },
  {
    audioSrc: "../../src/audio/words-audio/school/05.mp3",
    imageSrc: "../../src/img/words-img/school/05.jpg",
    tamil: "வெண்கட்டி",
    pronunciation: "Venkaddy",
    english: "Chalk"
  },
  {
    audioSrc: "../../src/audio/words-audio/school/06.mp3",
    imageSrc: "../../src/img/words-img/school/06.jpg",
    tamil: "புத்தகம்",
    pronunciation: "Puththakam",
    english: "Book"
  },
  {
    audioSrc: "../../src/audio/words-audio/school/07.mp3",
    imageSrc: "../../src/img/words-img/school/07.jpg",
    tamil: "புத்தகப்பை",
    pronunciation: "Puththakappai",
    english: "Bag"
  },
  {
    audioSrc: "../../src/audio/words-audio/school/08.mp3",
    imageSrc: "../../src/img/words-img/school/08.jpg",
    tamil: "விளையாட்டு மைதானம்",
    pronunciation: "Vilaiyaddu maithanam",
    english: "Playground"
  },
  {
    audioSrc: "../../src/audio/words-audio/school/09.mp3",
    imageSrc: "../../src/img/words-img/school/09.jpg",
    tamil: "ஆய்வுகூடம்",
    pronunciation: "Aaivukudam",
    english: "Laboratory"
  },
  {
    audioSrc: "../../src/audio/words-audio/school/10.mp3",
    imageSrc: "../../src/img/words-img/school/10.jpg",
    tamil: "சங்கீத அறை",
    pronunciation: "Sangeetha arai",
    english: "Music room"
  },
  {
    audioSrc: "../../src/audio/words-audio/school/11.mp3",
    imageSrc: "../../src/img/words-img/school/11.jpg",
    tamil: "வரவேடு",
    pronunciation: "Varavedu",
    english: "Register"
  },
  {
    audioSrc: "../../src/audio/words-audio/school/12.mp3",
    imageSrc: "../../src/img/words-img/school/12.jpg",
    tamil: "நூலகம்",
    pronunciation: "Noolagam",
    english: "Library"
  },
  {
    audioSrc: "../../src/audio/words-audio/school/13.mp3",
    imageSrc: "../../src/img/words-img/school/13.jpg",
    tamil: "மண்டபம்",
    pronunciation: "Mandapam",
    english: "Hall"
  },
  {
    audioSrc: "../../src/audio/words-audio/school/14.mp3",
    imageSrc: "../../src/img/words-img/school/14.jpg",
    tamil: "காரியாலயம்",
    pronunciation: "Kaariyaalayam",
    english: "Office"
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