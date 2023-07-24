// create object
const questions = [
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