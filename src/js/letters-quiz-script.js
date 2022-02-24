console.log('hello');

const op1 = document.querySelector(".option1")
const op2 = document.querySelector(".option2")
const op3 = document.querySelector(".option3")
const op4 = document.querySelector(".option4")

const question = document.querySelector(".question")
const questionNumberSpan = document.querySelector(".question-num-value")
const totalQuestionSpan = document.querySelector(".total-question")
let questionIndex ;
let index =0 ;
const options = document.querySelector(".options").children
const answerTrackerContainer = document.getElementById("answers-tracker")
var myArray=[];
let myArr = [];
var score = 0;

const correctAnswerSpan = document.querySelector(".correct-answers") 
const totalQuestionSpan2 = document.querySelector(".total-question2") 
const percentage = document.querySelector(".percentage") 



// question and answer

const questions = [
    {
        q:'Select the type of the letter "ல்"',
        options:['Consonants','Vowels'],
        answer:0
    },
    {
        q:'Select the type of the letter "ர் "',
        options:['Consonants','Vowels'],
        answer:0
    },  {
        q:'Select the type of the letter "அ "',
        options:['Vowels','Consonants'],
        answer:0
    },  {
        q:'Select the type of the letter "க் "',
        options:['Consonants','Vowels'],
        answer:0
    },  {
        q:'Select the type of the letter "ஏ "',
        options:['Consonants','Vowels'],
        answer:1
    },  {
        q:'Select the type of the letter "ம்"',
        options:['Vowels','Consonants'],
        answer:1
    },  {
        q:'Select the type of the letter "இ"',
        options:['Consonants','Vowels'],
        answer:1
    },  {
        q:'Select the type of the letter "ம்"',
        options:['Vowels','Consonants'],
        answer:1
    },  {
        q:'Select the type of the letter "ஐ"',
        options:['Consonants','Vowels'],
        answer:1
    },  {
        q:'Select the type of the letter "உ "',
        options:['Consonants','Vowels'],
        answer:1
    }
]
//check the answer
function check(element) {
    console.log(element);
    if (element.id == questions[questionIndex].answer) {
        element.classList.add("correct")
        updateAnswerTracker("correct")
        score++
        console.log('score:'+score);
            console.log(element);


    }else{
        element.classList.add("wrong")
        updateAnswerTracker("wrong")

    }
    disableOptions();
}

function disableOptions() {
    let i = 0
    for (let i = 0; i < options.length; i++) {
    options[i].classList.add("disabled")        
    if (options[i].id == questions[questionIndex].answer) {
        options[i].classList.add("correct")
        // console.log('correct');

    }  
    }
}

function enableOptions() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("disabled","correct","wrong")
        
    }
}
// set the questions and answwer
totalQuestionSpan.innerHTML=questions.length;

function load() {
    questionNumberSpan.innerHTML=index+1
    question.innerHTML=questions[questionIndex].q
    op1.innerHTML=questions[questionIndex].options[0]
    op2.innerHTML=questions[questionIndex].options[1]
    op3.innerHTML=questions[questionIndex].options[2]
    op4.innerHTML=questions[questionIndex].options[3]
    index++;
}

function validate() {
    if (!options[0].classList.contains("disabled")) {
        alert("Please choose one ")
    } else {
        randomQuestion(); 
        enableOptions()
    }
}

function next() {
    validate();
    
}

function randomQuestion() {
    let hitDuplicate = 0
    let randomNumber = Math.floor(Math.random()*questions.length)
    if (index==questions.length ) {
        quizOver()    }
    else{
        if (myArray.length>0) {
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i]==randomNumber  ) {
                    hitDuplicate =1
                    break;
                }
            }
            if (hitDuplicate ==1) {
                randomQuestion()
            }
            else{
                questionIndex=randomNumber
                load();
                myArr.push(questionIndex)
                }
            }
            if (myArray.length==0) {
                questionIndex=randomNumber
                load();
                myArr.push(questionIndex)
            }
            
            myArray.push(randomNumber)
        }
    }

    // myArray.push(questionIndex)
    // console.log("myArray:"+myArray);
    // }
    


function answersTracker() {
    var i;
    for (let i = 0; i < questions.length; i++) {
        const div = document.createElement("div");
        answerTrackerContainer.appendChild(div);
    }
}

function updateAnswerTracker(classNam) {
    answerTrackerContainer.children[index-1].classList.add(classNam)
}

function quizOver() {
    console.log('heloo quiz over');
    
    document.querySelector(".quiz-over").classList.add("show")
    console.log('heloo quiz over22');

    correctAnswerSpan.innerHTML=score;
    totalQuestionSpan2.innerHTML=questions.length;
    percentage.innerHTML=(score/questions.length)*100 + "%"
    console.log('heloo quiz lastt');

}

function tryAgain() {
    window.location.reload();
}

window.onload = function () {
    randomQuestion();
    answersTracker();}

