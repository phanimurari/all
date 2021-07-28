In this practice let's build a **NexTrendz - Product Details** by applying the concepts we have learned till now.

### Refer to images below:

<br/>
<div style="text-align: center;">
    <img src="https://res.cloudinary.com/lalitha/image/upload/v1622891560/nxtTrendz-product-details-output_bjb6uq.gif" alt="product details output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Success](https://res.cloudinary.com/lalitha/image/upload/v1622890532/nxtTrendz-product-details-success-sm-output_l14ci6.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Error](https://res.cloudinary.com/lalitha/image/upload/v1622890532/nxtTrendz-product-details-error-sm-output_g5umy6.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Success](https://res.cloudinary.com/lalitha/image/upload/v1622890521/nxtTrendz-product-details-success-lg-output_qwaw2o.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Error](https://res.cloudinary.com/lalitha/image/upload/v1622890520/nxtTrendz-product-details-error-lg-output_tfhfnn.png)

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

- When an authenticated user clicks on an product in the Products Route, then the page should be navigated to **Product Details** route.
- When the **Product Details** route is opened, 
    - An HTTP GET request should be made to productDetailsApiUrl with product id as path parameter.
    - **_loader_** should be displayed while the HTTP request is fetching the data
    - After the HTTP request is successful, the response received should be displayed.
- When the **Product Details** route is opened, if the response received in the HTTP GET request returns the status as `404`, then the Error view should be displayed.
- When an unauthenticated user tries to access the **Product Details** route, page should be navigated to Login Route


  </details>

<details>
<summary>Click to view the Example response</summary>

- The example response received from request to the **productDetailsApiUrl** will be 

    ```json
    {
        "id": 16,
        "image_url":
            "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-simple-formal.png",
        "title": "Embroidered Net Gown",
        "price": 62990,
        "description":
            "Color, style and ceremonial importance of the gown. Enhance your beauty by after wearing this Vibrant,Gorgeous and beautiful Wedding Gown. ",
        "brand": "Manyavar",
        "total_reviews": 879,
        "rating": 3,
        "availability": "In Stock",
    }
    
    ```


</details>

<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/components/ProductCard/index.js`
  - `src/components/ProductDetails/index.js`
  - `src/components/ProductDetails/index.css`
  </details>

#### Quick Tips

<details>
<summary>Click to view Quick Tips</summary>

- The `line-height` CSS property sets the height of a line box. It's commonly used to set the distance between lines of text.

    ```
    line-height: 1.5;
    ```

</details>
<br/>

> #### Important Note
>
> <details open>
> <summary>Click to view Important Note Points</summary>
>
> **The following HTML attributes are required for the HTML for the tests to
> pass**
>
> - `Home` route should consist of "/" in URL path
> - `Login` route should consist of "/login" in URL path
> - `Products` route should consist of "/products" in URL path
> - `Product Details` route should consist of "/product-details/:id" in URL path
> - `Cart` route should consist of "/cart" in URL path
> - No need to use the `BrowserRouter` in `App.js` as we have already included
>   in `index.js`
>
> - Prime User credentials
>
>   ```
>    username: rahul
>    password: rahul@2021
>   ```
> - Non-Prime User credentials
>
>   ```
>    username: raja
>    password: raja@2021
>   ```
>
> - The product image in Product Details Route should have the alt text as **product**
> - `BsPlusSquare`, `BsDashSquare` icons from react icons should be used for **plus** and **minus** buttons in Product Details route
> 
> </details>

### Resources

<details>
<summary>Data fetch URLs</summary>

#### Data Fetch URLs

- [https://apis.ccbp.in/products/:id](https://apis.ccbp.in/products/:id)

</details>

<details>
<summary>Image URLs</summary>

#### Images

- [https://assets.ccbp.in/frontend/react-js/star-img.png](https://assets.ccbp.in/frontend/react-js/star-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png)

</details>

<details>
<summary>Colors</summary>

#### Colors

<div style="background-color: #12022f; width: 150px; padding: 10px; color: white">Hex: #12022f</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #cbced2; width: 150px; padding: 10px; color: black">Hex: #cbced2</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>

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
