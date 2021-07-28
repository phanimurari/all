In this assignment let's build a **Rock Paper Scissors** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://res.cloudinary.com/do4qwwms8/image/upload/v1625899174/Rock%20paper%20scissor/rock-paper-scissors-output_qlx52s.gif" alt="rock paper scissors output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Playing View](https://res.cloudinary.com/do4qwwms8/image/upload/v1625899789/Rock%20paper%20scissor/rock-paper-scissors-sm-playing-output_oe4mmy.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Playing View](https://res.cloudinary.com/do4qwwms8/image/upload/v1625899789/Rock%20paper%20scissor/rock-paper-scissors-lg-playing-output_t8atjx.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Results View](https://res.cloudinary.com/do4qwwms8/image/upload/v1625899789/Rock%20paper%20scissor/rock-paper-scissors-sm-results-output_hz2ytu.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Results View](https://res.cloudinary.com/do4qwwms8/image/upload/v1625899788/Rock%20paper%20scissor/rock-paper-scissors-lg-results-output_ja8xcn.png)

</details>

### Project Set Up Instructions

<details>
<summary>Click to view the Set Up Instructions</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Project Completion Instructions

<details>
<summary>Click to view the Functionality to be added</summary>

#### Add Functionality

The app must have the following functionalities

- When you click on the `Rules` button, it should trigger a popup, and rules image should be displayed
- Initially, the score displayed should be **0**
- When any of the 3 buttons is clicked, then the game result should be displayed
- In the game result, the opponent choice should be generated a random number in the range of `choicesList` and displayed
- When the **rock** button is clicked, then your choice should be a rock in the game result and displayed
- When the **paper** button is clicked, then your choice should be paper in the game result and displayed
- When the **scissors** button is clicked, then your choice should be scissors in the game result and displayed

  #### Game Rules

    <details>
    <summary>Click to view the Game Rules</summary>
    <br/>
    <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png" alt="cursor pointer" style="width:500px","height:300px" />
    <br/>
    - Game result should be based on you and your opponent choices
        - When your choice is **rock** and your opponent choice is **rock** then the result will be `IT IS DRAW`
        - When your choice is **paper** and your opponent choice is **rock** then the result will be `YOU WON`
        - When your choice is **scissors** and your opponent choice is **rock** then the result will be `YOU LOSE`
        - When your choice is **rock** and your opponent choice is **paper** then the result will be `YOU LOSE`
        - When your choice is **paper** and your opponent choice is **paper** then the result will be `IT IS DRAW`
        - When your choice is **scissors** and your opponent choice is **paper** then the result will be `YOU WON`
        - When your choice is **rock** and your opponent choice is **scissors** then the result will be `YOU WON`
        - When your choice is **paper** and your opponent choice is **scissors** then the result will be `YOU LOSE`
        - When your choice is **scissors** and your opponent choice is **scissors** then the result will be `IT IS DRAW`
    </details>
- When the result is `YOU WON`, then the count of the score should be incremented by 1
- When the result is `IT IS DRAW`, then the count of the score should be the same 
- When the result is `YOU LOSE`, then the count of the score should be decremented by 1
- When the **PLAY AGAIN** button is clicked, then the initial playing state should be displayed
</details>

#### Quick Tips

<details>
<summary>Click to view Quick Tips</summary>

- You can use [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function to get a random number (float value) in range 0 to less than 1 (0 <= randomNumber < 1).
    
    ```
    Math.random()
    ```

- You can use the [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) function returns the largest integer less than or equal to a given number.

    ```
    console.log(Math.floor(5.95)); // 5
    ``` 
<br/>
- You can use the `react-modal` for the showing modals, a pop-up should be displayed when a button is clicked
   - Refer this website for installation, documentation and examples about `react-modal`: [https://www.npmjs.com/package/react-modal](https://www.npmjs.com/package/react-modal)
- `RiCloseLine` icon from react icons can be used for the **close** button at modal.
- You can use the below cursor CSS property for buttons to set the type of mouse
  cursor, to show when the mouse pointer is over an element,

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />
- You can use the below outline CSS property for buttons and input elements to
  remove the highlighting when the elements are clicked,

  ```
    border: none;
    outline: none;
  ```

  </details>

> #### Important Note
>
> **The following HTML attributes are required for the HTML button and image
> elements for the tests to pass**
>
> - The Page should consist of HTML button with text content as **RULES** and the HTML button element with `testid` attribute values as **rules**.
> - The Page should consist of three HTML button elements with `testid` attribute values as **rockImageButton**, **scissorImageButton** and **paperImageButton** respectively.
> - In game results view the page should consist of two HTML image elements with attribute values as **your choice** and **opponent choice**

### Resources

#### Images

- [https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png](https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png) alt should be **rules**

<details>
<summary>Colors</summary>

#### Colors
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #223a5f; width: 150px; padding: 10px; color: white">Hex: #223a5f</div>
<br/>
</details>

#### Font-families
- Roboto
- Bree Serif

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.