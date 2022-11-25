const questions=[
    {
        'ques': 'How can a datatype be declared to be a constant type?',
        'a': 'const',
        'b': 'var',
        'c': 'let',
        'd': 'constant',
        'correct' : 'a'
    },
    {
        'ques': 'Which of the following methods can be used to display data in some form using Javascript?',
        'a': 'document.write()',
        'b': 'console.log()',
        'c': 'window.alert()',
        'd': 'All of the above',
        'correct':'d'
    },
    {
        'ques': 'HTML is what type of language ? ',
        'a': ' Markup Language',
        'b': 'Scripting Language',
        'c': ' Programming Language',
        'd': ' Network Protocol',
        'correct':'a'
    }
]


let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
let question = document.getElementById('question') // making this to edit the question //
let input = document.querySelectorAll('span')  // making this to edit the options //
let radio = document.querySelectorAll('.radio')  // making this to check weather the radio button is on or off //


let loadQuestion = ()=>{
    if(index === total){
        return quizEnd();
    }
    reset();
    let data = questions[index];
    question.innerText = ` ${index + 1}) ${data.ques}`;
    input[0].innerText = data.a;
    input[1].innerText = data.b;
    input[2].innerText = data.c;
    input[3].innerText = data.d;    
}



let submitQuiz = ()=>{
    let data = questions[index];
    let ans = getAnswer();
    if(ans === data.correct){
        right++;
    } else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}



function getAnswer(){
    let answer;
    radio.forEach(
        (x) =>{
            if(x.checked){
               answer =  x.value;
               //return answer --if we do like this it wont return to the get Answer function but it will go to the for each func //
            } 
        }
    )
    return answer;
}

let reset = ()=>{
    radio.forEach(
        (x) => {
            x.checked = false;
        }
    )
}


let quizEnd = ()=>{
    document.getElementById('container').innerHTML = `
        <h3 style='padding:10px; text-align:center;'>Thank you for Playing the Quiz</h3>
        <h2 style='color:red; padding:10px;  text-align:center;'>${right}/${total} are correct answer.</h2>
    `
}
//initial call
loadQuestion();