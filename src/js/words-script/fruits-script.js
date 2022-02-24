const audio = [
  {
    audioSrc: "../../src/audio/words-audio/fruits/01.mp3",
    imageSrc: "../../src/img/words-img/fruits/01.jpg",
    tamil: "வாழைப்பழம்",
    pronunciation: "Vaalaippalam",
    english: "Banana"
  },

  {
    audioSrc: "../../src/audio/words-audio/fruits/02.mp3",
    imageSrc: "../../src/img/words-img/fruits/02.jpg",
    tamil: "மாதுளம்பழம்",
    pronunciation: "Mathulampalam",
    english: "Pomegranate"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/03.mp3",
    imageSrc: "../../src/img/words-img/fruits/03.jpg",
    tamil: "மாம்பழம்",
    pronunciation: "Maampalam",
    english: "Mango"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/04.mp3",
    imageSrc: "../../src/img/words-img/fruits/04.jpg",
    tamil: "வத்தகைப்பழம்",
    pronunciation: "Vaththakappalam",
    english: "Watermelon "
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/05.mp3",
    imageSrc: "../../src/img/words-img/fruits/05.jpg",
    tamil: "பப்பாசிப்பழம்",
    pronunciation: "Pappasippalam",
    english: "Papaw"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/06.mp3",
    imageSrc: "../../src/img/words-img/fruits/06.jpg",
    tamil: "சீதாப்பழம்",
    pronunciation: "Sithappalam",
    english: "Sugar-apple"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/07.mp3",
    imageSrc: "../../src/img/words-img/fruits/07.jpg",
    tamil: "பனம்பழம்",
    pronunciation: "Panampalam",
    english: "Palmyrah fruit"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/08.mp3",
    imageSrc: "../../src/img/words-img/fruits/08.jpg",
    tamil: "திராட்சை",
    pronunciation: "Thiradsai",
    english: "Grapes"
  },

  {
    audioSrc: "../../src/audio/words-audio/fruits/09.mp3",
    imageSrc: "../../src/img/words-img/fruits/09.jpg",
    tamil: "அன்னாசி",
    pronunciation: "Annasi",
    english: "Pineapple"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/10.mp3",
    imageSrc: "../../src/img/words-img/fruits/10.jpg",
    tamil: "தோடம்பழம்",
    pronunciation: "Thodampalam",
    english: "Orange"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/11.mp3",
    imageSrc: "../../src/img/words-img/fruits/11.jpg",
    tamil: "நெல்லி",
    pronunciation: "Nelli",
    english: "Amla fruit"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/12.mp3",
    imageSrc: "../../src/img/words-img/fruits/12.jpg",
    tamil: "பலாப்பழம்",
    pronunciation: "Palaappalam",
    english: "Jackfruit"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/13.mp3",
    imageSrc: "../../src/img/words-img/fruits/13.jpg",
    tamil: "மங்குஸ்தான்",
    pronunciation: "Mankusthan",
    english: "Mangosteen"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/14.mp3",
    imageSrc: "../../src/img/words-img/fruits/14.jpg",
    tamil: "ரம்புட்டான்",
    pronunciation: "Rambutaan",
    english: "Rambutan"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/15.mp3",
    imageSrc: "../../src/img/words-img/fruits/15.jpg",
    tamil: "கொய்யாப்பழம்",
    pronunciation: "Koiyaappalam",
    english: "Guava"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/16.mp3",
    imageSrc: "../../src/img/words-img/fruits/16.jpg",
    tamil: "நாவல்பழம்",
    pronunciation: "Navalpalam",
    english: "Java plum"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/17.mp3",
    imageSrc: "../../src/img/words-img/fruits/17.jpg",
    tamil: "பேரீச்சம்பழம்",
    pronunciation: "Perichchippalam",
    english: "Dates"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/18.mp3",
    imageSrc: "../../src/img/words-img/fruits/18.jpg",
    tamil: "கொடித்தோடை",
    pronunciation: "Kodiththoodai",
    english: "Passion fruit"
  },
  {
    audioSrc: "../../src/audio/words-audio/fruits/19.mp3",
    imageSrc: "../../src/img/words-img/fruits/19.jpg",
    tamil: "ஈச்சம்பழம்",
    pronunciation: "Eechampalam",
    english: ""
  },

  {
    audioSrc: "../../src/audio/words-audio/fruits/20.mp3",
    imageSrc: "../../src/img/words-img/fruits/20.jpg",
    tamil: "ஜம்பு",
    pronunciation: "Jambu",
    english: "Bell fruit"
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