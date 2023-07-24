# seiWarGameProject

## Intro

So far, we've covered the fundamentals of:

- HTML
- CSS
- JavaScript
- The DOM

Now I'll bring my knowledge together to build the game of War

I will be describing my thought process as I make programming decisions in regards to using data structures, coding functions, etc.

## Planning & Project Setup

### 1. Analyze the app's functionality

- A one player trivia game testing knowledge of Unit 1.
- The player will be timed and given points for each correct answer.
- Each question will have four multiple choice answers to choose from.
- The game ends when the player completes all the questions and is given a total score based on correct response.


### 2. Determine the overall design (look & feel) of the app

The game will be formatted in a standard quiz layout with the question on top and multiple choice answers to select below.

### 3. Wireframe the UI

Wireframes provide a blueprint for the HTML & CSS.

They also help reveal what state variables need to be defined.

Here's the wireframe that will guide us today:

<div id="title">What is the functionality of the "mv" command in the terminal?</div>
  <ul>
    <li class="options"></li>
    <li class="options"></li>
    <li class="options"></li>
    <li class="options"></li>
  </ul>
  <button id="btn">Submit</button>


### 4. Pseudocode

Pseudocode outlines the app's logic using plain language. It provides a road map to writing the code itself.

I'll regularly be typing pseudocode as comments within the functions as I code.

### 5. Identify the application's state (application-wide data)

What information does the application need to "remember" throughout its execution?

-It will need to count the number of correct responses.

Use the wireframe and pseudocode to help identify what state needs to be tracked.

### 6. Set up the project



### 7. **Organize the app's JS into sections**

Copy/paste the following comment headings to help you organize your app's code:

```js
/*----- constants -----*/

/*----- state variables -----*/

/*----- cached elements  -----*/

/*----- event listeners -----*/

/*----- functions -----*/
```

The above headings are gold!

> 🚀 With the setup complete, please navigate to the next page where we will begin the code-along!

## Code away!

Again, programming is as much art as science.

I'm going to be developing from scratch while following the process described in Guide on How to Build a Browser Game!

### Start with some HTML & CSS

Our goal is to code the HTML & CSS that results in a UI that looks like our wireframe.

We will need to add elements in **index.html** for the following from top to bottom:

- The heading
- Three buttons
- The player labels
- The win values

We will also include:

- The card visual
- A gameover message
- A restart button

If an element's content is going to come from the `render()` function, you may want to temporarily include mocked content in the HTML to help with layout and styling. However, once the content is being provided by the `render()` function, you should remove the mocked content from **index.html**.

Along the way, we'll code CSS in **style.css** to layout and style the UI.

<details>
<summary> 
Click for starter HTML/CSS

**Example HTML / CSS / JS starter code**
