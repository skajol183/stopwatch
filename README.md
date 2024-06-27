# stopwatch
In this project, let's build a **Stopwatch** by applying the concepts we have learned till now.

You can try using the link
[Click here to see the live demo](https://stopwatch-one-weld.vercel.app/)
<br/>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the **Start** button is clicked, then the Stopwatch should start running after it will go **Pause** button then it will change in **Resume** button
- When the **Stop** button is clicked, then the Stopwatch should stop running and after **2 seconds** it will set to **Zero value**
- When the **Reset** button is clicked, then the Stopwatch should be reset to zero
</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/Components/Stopwatch/index.js`
- `src/Components/Stopwatch/index.scss`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- You can use the `box-shadow` CSS property to apply the box-shadow effect to containers

  ```
    box-shadow: 0px 4px 16px 0px #bfbfbf;
  ```

  <br/>
  <img src="https://assets.ccbp.in/frontend/content/react-js/box-shadow-img.png" alt="box shadow" style="width:200px" />

- You can use `Math.floor()` function that returns the **largest integer less than or equal to a given number**

  ```js
  console.log(Math.floor(5.95)); // output: 5
  ```
</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #ffffff ; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: ##483d8b ; width: 150px; padding: 10px; color: black">Hex: #483d8b</div>
<div style="background-color: #333333 ; width: 150px; padding: 10px; color: white">Hex: #333333</div>
<div style="background-color: #1db05f ; width: 150px; padding: 10px; color: white">Hex: #1db05f</div>
<div style="background-color: #ef0d36 ; width: 150px; padding: 10px; color: white">Hex: #ef0d36</div>
<div style="background-color: #eaa800 ; width: 150px; padding: 10px; color: white">Hex: #eaa800</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
