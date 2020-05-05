const questions = [
    {
        "question": "Who founded Facebook",
        "answer": "Mark Zuckerberg",
        "other_options": ["Bill Gate", "Larry Page", "Mark Zuckerberg"],
        "id": 2
    },
    {
        "question": "Who founded Google",
        "answer": "Larry Page",
        "other_options": ["Larry Page", "Bill Gate", "Mark Zuckerberg"],
        "id": 0
    },
    {
        "question": "Who founded Microsoft",
        "answer": "Bill Gate",
        "other_options": ["Bill Gate", "Mark Zuckerberg", "Larry Page"],
        "id": 0
    },
    {
        "question": "Most Populated Nation",
        "answer": "India",
        "other_options": ["USA", "China", "India"],
        "id": 2
    },
    {
        "question": "Capital of Slovakia",
        "answer": "Bratislava",
        "other_options": ["Poprad","Bratislava", "Tatranska"],
        "id": 1
    }
];


// ui variables
const question = document.querySelector('.question');
const correctAnswer = document.querySelector('.correct_answers');
const answers = document.querySelector('.answers');
const options = document.querySelectorAll('.answers button')
const next = document.querySelector('.next');
const restart = document.querySelector('.restart');
const result = document.querySelector('.result');
const resultContainer = document.querySelector('.result-container');
const quizContainer = document.querySelector('.flex-container');


// variables
let runningQuestion = 0;
let scores = 0;

function renderQuestion() {
    if (runningQuestion === 5) {
        return;
    }
    question.textContent = questions[runningQuestion].question;
    options.forEach((i, index) => {
        i.textContent = questions[runningQuestion].other_options[index]
        if(runningQuestion === 0) {
            options[0].id = 'red';
            options[1].id = 'red';
            options[2].id = 'green';
        } 
        if(runningQuestion === 1) {
            options[0].id = 'green';
            options[1].id = 'red';
            options[2].id = 'red';
        } 
        if(runningQuestion === 2) {
            options[0].id = 'green';
            options[1].id = 'red';
            options[2].id = 'red';
        } 
        if(runningQuestion === 3) {
            options[0].id = 'red';
            options[1].id = 'red';
            options[2].id = 'green';
        } 
        if(runningQuestion === 4) {
            options[0].id = 'red';
            options[1].id = 'green';
            options[2].id = 'red';
        } 
    });
    
}

window.addEventListener('load', () => {
    renderQuestion();
})

answers.addEventListener('click', (e) =>{
    
    if (e.target.matches('button')) {
        if (e.target.textContent === questions[runningQuestion].answer) {
            scores += 1;
            correctAnswer.textContent = scores;
            options.forEach((i)=> {

                if (i.id === 'green') {
                    i.style.backgroundColor = 'green'
                    i.style.color = 'white'
                }
                i.disabled = true;
            })
            
        } else {
            options.forEach((i)=> {
                if (i.id === 'green') {
                    i.style.backgroundColor = 'green'
                    i.style.color = 'white'
                } 
                if (i.id === 'red') {
                    i.style.backgroundColor = 'red'
                    i.style.color = 'white'
                }
                i.disabled = true;
            })
        }
        runningQuestion++;
    }
})

next.addEventListener('click', () => {
    if (runningQuestion === 5) {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'flex';
        result.textContent = `YOU SCORED ${scores}/5`;
        restart.addEventListener('click', () => {
            window.location.reload()
        })
    }
    options.forEach(i =>{
        i.disabled = false;
        i.style.backgroundColor = 'rgba(3, 31, 3, 0.562)'
    })
    renderQuestion();
})


