const vowels = [
    {
        id: "a1",
        src: "../src/img/letters-img/vowel-words/a1.png",
        header: "அம்மா,அவன்,அணில்,அக்கா,அன்பு",
        titleTam: "<span style='color:red;'>அ</span>ம்மா",
        titleEng: "Amma - Mother",
    },
    {
        id: "a2",
        src: "../src/img/letters-img/vowel-words/a2.png",
        header: "ஆடு,ஆணி,ஆசை",
        titleTam: "<span style='color:red;'>ஆ</span>டு",
        titleEng: "Aadu - Goat",
    },
    {
        id: "a3",
        src: "../src/img/letters-img/vowel-words/a3.png",
        header: "இலை ,இல்லம் ,இசை ",
        titleTam: "<span style='color:red;'>இ</span>லை",
        titleEng: "Elai - Leaf",
    },
    {
        id: "a4",
        src: "../src/img/letters-img/vowel-words/a4.png",
        header: "ஈட்டி ,ஈ ,ஈசல் ",
        titleTam: "<span style='color:red;'>ஈ</span>ட்டி",
        titleEng: "Eeddi - Javelin",
    },
    {
        id: "a5",
        src: "../src/img/letters-img/vowel-words/a5.png",
        header: "உலகம் ,உடல் ,உணவு ,உடை",
        titleTam: "<span style='color:red;'>உ</span>லகம்",
        titleEng: "Ulakam - Earth",
    },
    {
        id: "a6",
        src: "../src/img/letters-img/vowel-words/a6.png",
        header: "ஊஞ்சல் ,ஊசி ,ஊர்",
        titleTam: "<span style='color:red;'>ஊ</span>ஞ்சல்",
        titleEng: "Uunchal - Swing",
    },
    {
        id: "a7",
        src: "../src/img/letters-img/vowel-words/a7.png",
        header: "எலி ,எழுத்து , எறும்பு",
        titleTam: "<span style='color:red;'>எ</span>லி",
        titleEng: "Eli - Rat",
    },
    {
        id: "a8",
        src: "../src/img/letters-img/vowel-words/a8.png",
        header: "ஏணி ,ஏழு , ஏழை ",
        titleTam: "<span style='color:red;'>ஏ</span>ணி",
        titleEng: "Eeni - Ladder",
    },
    {
        id: "a9",
        src: "../src/img/letters-img/vowel-words/a9.png",
        header: "ஐந்து ,ஐயம் ,ஐப்பசி",
        titleTam: "<span style='color:red;'>ஐ</span>ந்து",
        titleEng: "Ainthu - Five",
    },
    {
        id: "a10",
        src: "../src/img/letters-img/vowel-words/a10.png",
        header: "ஒட்டகம் ,ஒன்று ,ஒளி ",
        titleTam: "<span style='color:red;'>ஒ</span>ட்டகம்",
        titleEng: "Oddakam - Giraffe",
    },
    {
        id: "a11",
        src: "../src/img/letters-img/vowel-words/a11.png",
        header: "ஓடம் ,ஓசை ,ஓணான்",
        titleTam: "<span style='color:red;'>ஓ</span>டம்",
        titleEng: "Oodam - Boat",
    },
    {
        id: "a12",
        src: "../src/img/letters-img/vowel-words/a12.png",
        header: "ஔடதம் ,ஔவையார்",
        titleTam: "<span style='color:red;'>ஔ</span>டதம்",
        titleEng: "Owdatham - Medicine",
    },
    {
        id: "a13",
        src: "../src/img/letters-img/vowel-words/a13.jpg",
        header: "எஃகு",
        titleTam: "எ<span style='color:red;'>ஃ</span>கு",
        titleEng: "Ehu - Sword",
    }
];

function getWord(n) {
    vowels.map((letter) => {
        if (letter.id === n) {
            document.getElementById("wordHeader").innerText = letter.header;
            document.getElementById("wordTitleEng").innerText = letter.titleEng;
            document.getElementById("wordTitleTam").innerHTML = letter.titleTam;
            document.getElementById("wordImg").src = letter.src;
            console.log(letter.fname);
        }
    });
}
