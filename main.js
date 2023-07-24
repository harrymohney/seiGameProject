
function startGame() {

}

function nextQuestion() {

}

function selectAnswer() {
  
}

// create object

const questions = [
  {
    question0: 'What css rule is used for changing any HTML element into a flexbox container?',
    options: ['flexbox', 'grid', 'container', 'display'],
    correctAnswer: 3
  },
  {
    question1: 'What is the functionality of the "mv" command in the terminal?',
    options: ['move', 'copy', 'rename', 'all of the above'],
    correctAnswer: 3
  },
  {
    question2: 'Which array property is used in `for loop` for iterating through the entire list?',
    options: ['.stretch', '.indexOf', '.length', '.forEach'],
    correctAnswer: 2
  },
  {
    question3: 'What is the method of adding and/or omitting an index in an array?'
    options: ['.push()', '.splice()', '.pop()', '.shift()'],
    correctAnswer: 1
  },
  {
    question4: 'A functions (answer1) are passed in when the function is invoked, it differs from (answer2) because they are variables declared in the function definition an used within the function body when invoked.',
    options: ['parameter, argument', 'argument, callback', 'parameter, return', 'argument, parameter'],
    correctAnswer: 3
  },
  {
    question5: 'What are an object`s `properties` made of?',
    options: ['key: value', 'value: key', 'array: string', 'value: property'],
    correctAnswer: 0
  },
  {
    question6: 'How would you select all <a> elements contained within a div with an id of globalNav?',
    options: ['document.querySelector(“#globalNav")', 'document.querySelectorAll(“#globalNav a”)', 'element.querySelectorAll(“#a”)', 'document.getElementById(“#globalNav a”)'],
    correctAnswer: 1
  },
  {
    question7: 'An application that revolves around the management and manipulation of data as its primary focus is what?',
    options: ['object-oriented', 'DOM-manipulation', 'data-centric', 'data-oriented'],
    correctAnswer: 2
  },
  {
    question8: 'Refers to the concept of bundling data and the functions that operate on that data within a single unit.',
    options: ['object oriented programming', 'DOM', 'array', 'DRY code'],
    correctAnswer: 0
  },
  {
    question9: 'A way to create blueprints for objects that share common properties and behavior.',
    options: ['CSS', 'JS classes', '<div>', 'pseudocode'],
    correctAnswer: 1
  }

];
function showQuestion(mv) {
  // select DOM element
  let titleDiv = document.getElementById('title');
  // modify it
  titleDiv.textContent = mv.title;
  // select li class
  let ops = document.querySelectorAll('.options');

  ops.forEach(function(el, idx) {
    el.textContent = mv.options[idx];

    el.addEventListener('click', function() {
      // check correct option
      if (mv.correctAnswer == idx) {
        console.log('Correct!');
      } else {
        console.log('So close!')
      }
    });
  });
}

showQuestion(question1);

let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  console.log('clicked');
});