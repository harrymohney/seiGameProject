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

- It's a two player card game.
- The player's will compete to:
    a. end up with the most cards in a set amount of time
    b. eliminate the opponents stack of cards in battle.
    (possible easier method to see who has the most cards after going through the starting cards // or tracking points where the regular two card win is a point and the 6+ card win is 3 points..(double war))

- Each player starts with half a deck of cards.
- To win the the players will each:
    a. draw a card with a set value - the player with the higher value card wins that round and adds those card to their hand.
    b. if the cards are equal in value, the players go to war.
        -during war each player adds an additional card face down and one face up which will be the new cards of comparison. The winner collects all cards.


### 2. Determine the overall design (look & feel) of the app

The game will appear to be played on a basic green card table with a straightforward UI.

### 3. Wireframe the UI

Wireframes provide a blueprint for the HTML & CSS.

They also help reveal what state variables need to be defined.

Here's the wireframe that will guide us today:



<table>
    <tr>
      <td>
        <h2>Player 1</h2>
        <div class="card"></div>
      </td>
      <td>
        <h2>Player 2</h2>
        <div class="card"></div>
      </td>
    </tr>
  </table>

### 4. Pseudocode

Pseudocode outlines the app's logic using plain language. It provides a road map to writing the code itself.

I'll regularly be typing pseudocode as comments within the functions as I code.

### 5. Identify the application's state (application-wide data)

What information does the application need to "remember" throughout its execution?

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
