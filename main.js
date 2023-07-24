// create object
let question1 = {
  title: 'What is the functionality of the "mv" command in the terminal?',
  options: ['move', 'copy', 'rename', 'all of the above'],
  correctAnswer: 3
};

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