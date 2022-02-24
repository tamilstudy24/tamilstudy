const audio = [
  {
    audioSrc: "../../src/audio/words-audio/relations/01.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "அம்மா",
    pronunciation: "Amma",
    english: "Mother"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/02.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "அப்பா",
    pronunciation: "Appa",
    english: "Father"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/03.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "தம்பி",
    pronunciation: "Thampi",
    english: "Younger Brother"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/04.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "தங்கை",
    pronunciation: "Thankai",
    english: "Younger Sister"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/05.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "அக்கா",
    pronunciation: "Akka",
    english: "Elder Sister"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/06.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "அண்ணா",
    pronunciation: "Anna",
    english: "Elder Brother"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/07.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "பாட்டி",
    pronunciation: "Paaddi",
    english: "Grand Mother"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/08.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "பாட்டன் ",
    pronunciation: "Paaddan",
    english: "Grand Father"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/09.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "மாமி",
    pronunciation: "Maami",
    english: "Aunt"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/10.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "சித்தி",
    pronunciation: "Siththi",
    english: "Mothers younger sister"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/11.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "சித்தப்பா",
    pronunciation: "Siththappa",
    english: "Fathers younger brother"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/12.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "மாமா",
    pronunciation: "Mama",
    english: "Uncle"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/13.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "அத்தை",
    pronunciation: "Aththai",
    english: "Aunt"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/14.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "மச்சான்",
    pronunciation: "Machan",
    english: "Cousin"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/15.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "மச்சாள் ",
    pronunciation: "Machaal",
    english: "Cousin"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/16.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "அண்ணி",
    pronunciation: "Anni",
    english: "Sister in Law"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/17.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "அத்தான்",
    pronunciation: "Aththtan",
    english: "Brother in law"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/18.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "பெரியம்மா",
    pronunciation: "Periyamma",
    english: "Mothers elder sister"
  },
  {
    audioSrc: "../../src/audio/words-audio/relations/19.mp3",
    imageSrc: "../../src/img/words-img/relations/01.jpg",
    tamil: "பெரியப்பா",
    pronunciation: "Periyappa",
    english: "Fathers elder sister"
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