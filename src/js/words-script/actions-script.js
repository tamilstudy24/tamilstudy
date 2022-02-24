const audio = [
  {
    audioSrc: "../../src/audio/words-audio/actions/01.wav",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "நட",
    pronunciation: "Nada",
    english: "Walk"
  },

  {
    audioSrc: "../../src/audio/words-audio/actions/02.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "இரு",
    pronunciation: "Iru",
    english: "Sit"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/03.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "போ",
    pronunciation: "Po",
    english: "Go"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/04.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "வா",
    pronunciation: "vaa",
    english: "Come"
  },

  {
    audioSrc: "../../src/audio/words-audio/actions/05.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "கேள்",
    pronunciation: "Kel",
    english: "Listen"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/06.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "கதை",
    pronunciation: "Kathai",
    english: "Talk"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/07.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "எழும்பு",
    pronunciation: "Elumpu",
    english: "Wakeup"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/08.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "ஓடு",
    pronunciation: "Odu",
    english: "Run"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/09.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "பாய்",
    pronunciation: "Paai",
    english: "Jump"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/10.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "அடி",
    pronunciation: "Adi",
    english: "Slap"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/11.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "தொடு",
    pronunciation: "Thodu",
    english: "Touch"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/12.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "பார்",
    pronunciation: "Paar",
    english: "See"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/13.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "எழுது",
    pronunciation: "Eluthu",
    english: "Write"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/14.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "வாசி",
    pronunciation: "Vaasi",
    english: "Read"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/15.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "அழி",
    pronunciation: "Ali",
    english: "Destroy"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/16.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "அழு",
    pronunciation: "Alu",
    english: "Cry"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/17.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "சிரி",
    pronunciation: "Siri",
    english: "Smile"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/18.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "நடி",
    pronunciation: "Nadi",
    english: "Act"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/19.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "பாடு",
    pronunciation: "Paadu",
    english: "Sing"
  },
  {
    audioSrc: "../../src/audio/words-audio/actions/20.mp3",
    imageSrc: "../../src/img/words-img/actions/01.jpg",
    tamil: "வேலை செய்",
    pronunciation: "Velai sei",
    english: "Work"
  },

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