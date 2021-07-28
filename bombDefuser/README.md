In this assignment let's build a **Bomb Defuser** by applying the concepts we have learned till now.

### Refer to images below:

<br/>
<div style="text-align: center;">
    <img src="https://res.cloudinary.com/do4qwwms8/image/upload/v1623474939/bomb-defuser-output_hzudo0.gif" alt="bomb defuser output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>


#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://res.cloudinary.com/do4qwwms8/image/upload/v1623477294/bomb-defuser-sm-img_jxnzes.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://res.cloudinary.com/do4qwwms8/image/upload/v1623477269/bomb-defuser-lg-img_seqs0e.png)

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

- When the app is gets started,
    - The *Bomb* Image should be displayed.
    - The timer limit should start with 10 seconds.
    - The timer should start running backward.
    - The timer should decrement by 1 from 10 for each second.
- If the value *defuse* is provided in the input irrespective of the case and pressed entered before 10 seconds,
    - The timer should stop running
    - successfully defused view should be displayed
- If the value *defuse* is not provided in the input before 10 seconds,
    - The timer should stop running.
    - The bomb blast view should be displayed.
    
</details>
<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/components/BombDefuser/index.js`
  - `src/components/BombDefuser/index.css`
  </details>

#### Quick Tips
<details>
<summary>Click to view Quick Tips</summary>

The onKeyDown event occurs when a key on the keyboard is pressed.
  </details>

### Resources

<details>
<summary>Image URLs</summary>

#### Images

- [https://assets.ccbp.in/frontend/react-js/bomb-difuser/bomb-img.png](https://assets.ccbp.in/frontend/react-js/bomb-difuser/bomb-img.png) alt should be **bomb**
- [https://assets.ccbp.in/frontend/react-js/bomb-difuser/bomb-blast-img.png](https://assets.ccbp.in/frontend/react-js/bomb-difuser/bomb-blast-img.png) alt should be **blast**
- [https://assets.ccbp.in/frontend/react-js/bomb-difuser/defuse-success-img.png](https://assets.ccbp.in/frontend/react-js/bomb-difuser/defuse-success-img.png) alt should be **defuse success**


</details>

<details>
<summary>Colors</summary>

#### Colors

<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #7e858e; width: 150px; padding: 10px; color: black">Hex: #7e858e</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #22c55e; width: 150px; padding: 10px; color: white">Hex: #22c55e</div>


<br/>
</details>

#### Font-families

- Roboto

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
