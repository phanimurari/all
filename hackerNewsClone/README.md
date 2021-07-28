In this assignment let's build a **Hacker News Clone** by applying the concepts we have learned till now.

### Refer to images below:

<br/>
<div style="text-align: center;">
    <img src="https://res.cloudinary.com/do4qwwms8/image/upload/v1623663524/hacker-news-clone-output-version2_tl6liz.gif" alt="Hacker News Clone Output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://res.cloudinary.com/do4qwwms8/image/upload/v1623427141/hacker-news-clone-mobile_u6opmr.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://res.cloudinary.com/do4qwwms8/image/upload/v1623427301/hacker-news-clone-desktop_osnumr.png)

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

 - An HTTP GET request should be made to the `https://apis.ccbp.in/hacker-news-clone/` URL with the `id` of the selected tab as path parameter.
 - Initially, the **Top Stories** tab should be active
 - When the **Top Stories** tab is clicked,
    - Make an HTTP GET request to the URL **storiesApiUrl** with path parameter **top-stories** and query parameter **limit** with value as `10` and another query parameter **offset** with the initial value as `0`.
    - Display _loader_ while fetching the response
    - After fetching the data, the updated stories list should be displayed
    - At the bottom of the page, Pagination Footer should be displayed
 - When the **latest stories** tab is clicked,
    - Make an HTTP GET request to the URL **storiesApiUrl** with path parameter **latest-stories** and query parameter **limit** with value as `10` and another query parameter **offset** with the initial value as `0`.
    - Display _loader_ while fetching the response
    - After fetching the data, the updated stories list should be displayed
    - At the bottom of the page, Pagination Footer should be displayed
 - The Pagination Footer should have the below mentioned Functionality
    - Initally, the activePage will be 1 and the total number of pages can be calculated using the below formula 
    
        ```js
        const totalPagesCount = (total_news_count/limit)
        ```
    - The value of the query parameter **limit** should always be `10`
    - The value of the query parameter **offset** can be calculated using the below formula 
    
        ```js
        const offset = (activePage - 1) * limit
        ```
    - When the right button is clicked the `activePage` will be incremented and make an HTTP GET request to the URL so that the next 10 stories will be displayed
    - When the left button is clicked the `activePage` will be decremented and make an HTTP GET request to the URL so that the previous 10 stories in the list will be displayed.
    - When the active tab is changed by clicking any of the given tabs, the active page should be reset to 1
 - The `HackerNewsClone` component will consist **tabsList**. It consists of a list of category option objects with the following properties in each category option object

  | Key          | Data Type |
  | ------------ | --------- |
  | id           | String    |
  | displayValue | String    |

</details>
<details>
<summary>Click to view the Example response</summary>

- The example response received from the HTTP GET request to the storiesApiUrl with id of selected tab as path parameter will be as mentioned below

    ```json
    {
        news_list: [
            {
                title: "Front Load Machine",
                brand: "Samsung",
                price: 22490,
                id: 24,
                image_url:
                    "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-washing-machine.png",
                rating: 4.5,
            },
            ....
        ],
        total_news_count : 500
    }
    ```

</details>

<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/components/HackerNewsClone/index.js`
  - `src/components/HackerNewsClone/index.css`
  - `src/components/TabItem/index.js`
  - `src/components/TabItem/index.css`
  - `src/components/StoryItem/index.js`
  - `src/components/StoryItem/index.css`
  - `src/components/PaginationFooter/index.js`
  - `src/components/PaginationFooter/index.css`
</details>

#### Quick Tips

- To show the animated loader, we need to import the `Loader` component as
  - `import Loader from 'react-loader-spinner'`
- In order to render the given animated loader, use **ThreeDots** for `type`
  attribute & also use **#0284c7** for `color` attribute of `Loader` component
  ```
  <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
  ```
<br/>

> #### Important Note
>
> **The following HTML attributes are required for the HTML button and image
> elements for the tests to pass**
>
> - Wrap the Loader component with an HTML container element and add the
>   `testid` attribute value as `loader` to it
>
>   ```
>   <div testid="loader">
>      <Loader type="Rings" color="#ffffff" height={80} width={80} />
>   </div>
>   ```
>
> - `BiChevronLeft`, `BiChevronRight` icons from react icons should be used for **leftArrow** and **rightArrow** buttons in Pagination.
> - `BiRightArrowAlt` icon from react icons should be used after **Read More** in each story item.
> - The Page should consist of two HTML button elements with `testid` attribute values as **leftArrow** and **rightArrow** respectively.

### Resources

<details>
<summary>Data fetch URLs</summary>

#### Data Fetch URLs

- [https://apis.ccbp.in/hacker-news](https://apis.ccbp.in/hacker-news)

```js
// Example URL with query parameters and values
const apiUrl = 'https://apis.ccbp.in/hacker-news/top-stories?limit=10&offset=0';
```

</details>

<details>
<summary>Image URLs</summary>

#### Images

- [https://assets.ccbp.in/frontend/react-js/api-failure-view.png](https://assets.ccbp.in/frontend/react-js/api-failure-view.png) - alt should be **failure view**

</details>


#### Colors

<div style="background-color: #171531; width: 150px; padding: 10px; color: white">Hex: #171531</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<div style="background-color: #e2e8f0; width: 150px; padding: 10px; color: black">Hex: #e2e8f0</div>
<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: white">Hex: #3b82f6</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #232048; width: 150px; padding: 10px; color: white">Hex: #232048</div>
<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: white">Hex: #cbd5e1</div>
<div style="background-color: #94a3b8; width: 150px; padding: 10px; color: white">Hex: #94a3b8</div>


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
