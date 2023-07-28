# seiTriviaGameProject
(https://harrymohney.github.io/seiGameProject/)

## Intro

So far, we've covered the fundamentals of:

- HTML
- CSS
- JavaScript
- The DOM

Now I'll bring my knowledge together to build the game of Trivia.

As I code, I will be following the concepts we covered in the [Guide on How to Build a Browser Game](https://gist.github.com/jim-clark/6f1919291f6007b2c0b2c93d925d6bac).

## Planning & Project Setup

### 1. Analyze the app's functionality

- A one player trivia game testing knowledge of Unit 1.
- The player will have a multiple choice question and given points for each correct answer.
- The game ends when the player completes all 10 questions and is given a total score based on correct response.
- You only have one guess to select the correct respone, so choose wisely!
- Once the questions are over, you can restart and try again.


### 2. Determine the overall design (look & feel) of the app

The game will be formatted in a standard quiz layout with the question on top and multiple choice answers to select below.

### 3. Wireframe the UI

Wireframes provide a blueprint for the HTML & CSS.

They also help reveal what state variables need to be defined.

Here's the wireframe that will guide us today:

<div class="q-box">
    <div id="q-contain">Test Your Knowledge!</div>
    <div id="options-btn">
      <button class="answer"></button>
      <button class="answer"></button>
      <button class="answer"></button>
      <button class="answer"></button>
    </div>
    <div>
      <button id="start-btn">Start Quiz</button>
      <button id="next-btn" style="display: none;">Next</button>
      <button id="reset-btn" style="display: none;">Reset Quiz</button>
    </div>
    <div id="score">Score: 0</div>
  </div>


### 4. Pseudocode

Pseudocode outlines the app's logic using plain language. It provides a road map to writing the code itself.

I'll regularly be typing pseudocode as comments within the functions as I code.

### 5. Identify the application's state (application-wide data)

What information does the application need to "remember" throughout its execution?

-It will need to count the number of correct responses.

Use the wireframe and pseudocode to help identify what state needs to be tracked.

### 6. Set up the project
(https://github.com/harrymohney/seiGameProject)

## Code away!

### Start with some HTML & CSS

Our goal is to code the HTML & CSS that results in a UI that looks like our wireframe.

We will need to add elements in **index.html** for the following from top to bottom:

- The heading
- Three buttons
- The player labels
- The win values

We will also include:

- A start button
- A gameover message
- A restart button

If an element's content is going to come from the `render()` function, you may want to temporarily include mocked content in the HTML to help with layout and styling. However, once the content is being provided by the `render()` function, you should remove the mocked content from **index.html**.

Along the way, we'll code CSS in **style.css** to layout and style the UI.

