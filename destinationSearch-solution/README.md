In this assignment let's build a **Destination Search** by applying the concepts we have learned till now.

### Refer to images below:

<br/>
<div style="text-align: center;">
    <img src="https://res.cloudinary.com/lalitha/image/upload/v1620729994/destination-search-output_qpam33.gif" alt="destination search output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://res.cloudinary.com/lalitha/image/upload/v1620729712/destination-search-sm-output_gv1sfb.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://res.cloudinary.com/lalitha/image/upload/v1620729729/destination-search-lg-output_fo81pk.png)

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

- Initially the complete list of destinations should be displayed
- When a value is provided in search input, then only the destination names that contain the value entered in the search input (irrespective of the case of the letters) should be displayed. 


</details>

<details>
<summary>Click to view the Example data</summary>

- The `DestinationSearch` component receives the `initialDestinationsList` as a prop. It consist of list of destination objects as mentioned below

    ```json
    [
        {
            id: 1,
            name: 'Melaka Mosque',
            imgUrl:
                'https://res.cloudinary.com/lalitha/image/upload/v1620725873/melaka-mosque-img_yaruzl.png',
        },
        ...
    ]
    ```


</details>

<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/components/DestinationSearch/index.js`
  - `src/components/DestinationSearch/index.css`
  - `src/components/DestinationItem/index.js`
  - `src/components/DestinationItem/index.css`

</details>

#### Quick Tips

<details>
<summary>Click to view Quick Tips</summary>

- You can use the `toLowerCase` method to convert a string in lower case letters.
    
    ```
    const text = "Learn JavaScript";
    console.log(text.toLowerCase()); // learn javascript
    ```

</details>


### Resources

<details>
<summary>Image URLs</summary>

#### Images

- [https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png](https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png)

</details>

<details>
<summary>Colors</summary>

#### Colors

<div style="background-color: #252627; width: 150px; padding: 10px; color: white">Hex: #252627</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>

<br/>
</details>

#### Font-families

- Roboto
- Open Sans

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
