
function showQuestion(question) {
  // select DOM element
  let containEl = document.getElementById('q-contain');
  // modify it
  containEl.textContent = question.question;
  
  let answer = document.querySelectorAll('.answer');

  answer.forEach(function(btn, idx) {
    // access the text of each answer option
    btn.textContent = question.options[idx].text;

    btn.addEventListener('click', function() {
      // check correct answer
      if (question.options[idx].correct) {
        console.log('Correct!');
      } else {
        console.log('So close!')
      }
    });
  });
};

// questions array
const questions = [
  {
    question: 'What css rule is used for changing any HTML element into a flexbox container?',
    options: [
      {
        text: 'flexbox',
        correct: false
      },
      {
        text: 'grid',
        correct: false
      },
      {
        text: 'container',
        correct: false
      },
      {
        text: 'display',
        correct: true
      }
    ]
  },
  {
    question: 'What is the functionality of the "mv" command in the terminal?',
    options: [
      {
        text: 'move',
        correct: false
      },
      {
        text: 'copy',
        correct: false
      },
      {
        text: 'rename',
        correct: false
      },
      {
        text: 'all of the above',
        correct: true
      },
    ]
  },
  {
    question: 'What css rule is used for changing any HTML element into a flexbox container?',
    options: [
      {
        text: 'flexbox',
        correct: false
      },
      {
        text: 'grid',
        correct: false
      },
      {
        text: 'container',
        correct: false
      },
      {
        text: 'display',
        correct: true
      }
    ]
  },
  {
    question: 'Which array property is used in `for loop` for iterating through the entire list?',
    options: [
      {
        text: '.stretch',
        correct: false
      },
      {
        text: '.indexOf',
        correct: false
      },
      {
        text: '.length',
        correct: true
      },
      {
        text: '.forEach',
        correct: false
      }
    ]
  },
  {
    question: 'What is the method of adding and/or omitting an index in an array?',
    options: [
      {
        text: '.push()',
        correct: false
      },
      {
        text: '.splice()',
        correct: true
      },
      {
        text: '.pop()',
        correct: false
      },
      {
        text: '.shift()',
        correct: false
      }
    ]
  },
  {
    question: 'A functions (answer1) are passed in when the function is invoked, it differs from (answer2) because they are variables declared in the function definition an used within the function body when invoked.',
    options: [
      {
        text: 'parameter, argument',
        correct: false
      },
      {
        text: 'argument, callback',
        correct: false
      },
      {
        text: 'parameter, return',
        correct: false
      },
      {
        text: 'argument, parameter',
        correct: true
      }
    ]
  },
  {
    question: 'What are an object`s `properties` made of?',
    options: [
      {
        text: 'key: value',
        correct: true
      },
      {
        text: 'value: key',
        correct: false
      },
      {
        text: 'array: string',
        correct: false
      },
      {
        text: 'value: property',
        correct: false
      }
    ]
  },
  {
    question: 'How would you select all <a> elements contained within a div with an id of globalNav?',
    options: [
      {
        text: 'document.querySelector("#globalNav")',
        correct: false
      },
      {
        text: 'document.querySelectorAll("#globalNav a")',
        correct: true
      },
      {
        text: 'element.querySelectorAll("#a")',
        correct: false
      },
      {
        text: 'document.getElementById("#globalNav a")',
        correct: false
      }
    ]
  },
  {
    question: 'An application that revolves around the management and manipulation of data as its primary focus is what?',
    options: [
      {
        text: 'object-oriented',
        correct: false
      },
      {
        text: 'DOM-manipulation',
        correct: false
      },
      {
        text: 'data-centric',
        correct: true
      },
      {
        text: 'data-oriented',
        correct: false
      }
    ]
  },
  {
    question: 'Refers to the concept of bundling data and the functions that operate on that data within a single unit.',
    options: [
      {
        text: 'object oriented programming',
        correct: true
      },
      {
        text: 'DOM',
        correct: false
      },
      {
        text: 'array',
        correct: false
      },
      {
        text: 'DRY code',
        correct: false
      }
    ]
  },
  {
    question: 'A way to create blueprints for objects that share common properties and behavior.',
    options: [
      {
        text: 'CSS',
        correct: false
      },
      {
        text: 'JS classes',
        correct: true
      },
      {
        text: '<div>',
        correct: false
      },
      {
        text: 'pseudocode',
        correct: false
      }
    ]
  }
];
      
// keep track of the current question
let currentQuestionIndex = 0; 

showQuestion(questions[currentQuestionIndex]);

let nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', function() {
  // iterate to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex <= questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    // if all questions have been answered
    console.log('End of the quiz, GREAT JOB!'); 
  }
});