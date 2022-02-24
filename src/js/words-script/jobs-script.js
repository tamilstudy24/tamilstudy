const audio = [
  {
    audioSrc: "../../src/audio/words-audio/jobs/01.mp3",
    imageSrc: "../../src/img/words-img/jobs/01.jpg",
    tamil: "ஆசிரியர்",
    pronunciation: "Asiriyar",
    english: "Teacher"
  },

  {
    audioSrc: "../../src/audio/words-audio/jobs/02.mp3",
    imageSrc: "../../src/img/words-img/jobs/02.jpg",
    tamil: "வைத்தியர்",
    pronunciation: "Vaiththiyar",
    english: "Doctor"
  },
  {
    audioSrc: "../../src/audio/words-audio/jobs/03.mp3",
    imageSrc: "../../src/img/words-img/jobs/03.jpg",
    tamil: "தாதி",
    pronunciation: "Thaathi",
    english: "Nurse"
  },
  {
    audioSrc: "../../src/audio/words-audio/jobs/04.mp3",
    imageSrc: "../../src/img/words-img/jobs/04.jpg",
    tamil: "வாகனஓட்டுனர்",
    pronunciation: "Vakana oddunar",
    english: "Driver"
  },
  {
    audioSrc: "../../src/audio/words-audio/jobs/05.mp3",
    imageSrc: "../../src/img/words-img/jobs/05.jpg",
    tamil: "வடிவமைப்பாளர்",
    pronunciation: "Vadivamaipalar",
    english: "Designer"
  },
  {
    audioSrc: "../../src/audio/words-audio/jobs/09.mp3",
    imageSrc: "../../src/img/words-img/jobs/09.jpg",
    tamil: "காவலாளர்",
    pronunciation: "Kavalalar",
    english: "Security guard"
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