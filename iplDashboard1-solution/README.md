In this assignment let's build a **IPL Dashboard App** by applying the concepts
we have learned till now.

### Refer to images below:

<!-- TODO: need to update output images -->
<br/>
<div style="text-align: center;">
    <img src="https://res.cloudinary.com/lalitha/image/upload/v1619095476/ipl-dashbaord-output_occ2zg.gif" alt="ipl-dashboard-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://res.cloudinary.com/lalitha/image/upload/v1619149708/ipl-dashboard-home-sm-output_ua0qo2.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Team Matches](https://res.cloudinary.com/lalitha/image/upload/v1619091308/ipl-dashboard-team-matches-sm-output_t7kzfv.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://res.cloudinary.com/lalitha/image/upload/v1619091308/ipl-dashboard-home-lg-output_w5oyp2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - RCB Team Matches](https://res.cloudinary.com/lalitha/image/upload/v1619091308/ipl-dashboard-team-matches-lg-output_ryzmrq.png)

### Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- When the app is opened Home Route should be displayed.
- When the Home Route is opened,

  - **_loader_** should be displayed
  - Make HTTP GET request to the following URL `https://apis.ccbp.in/ipl`
  - After fetching the data, the updated list of teams should be displayed

- When a team card in Home Route is clicked,

  - Page should be navigated to the Team Matches route with the URL
    `/team-matches/:id`

- When the Team Matches Route is opened,

  - **_loader_** should be displayed
  - Make HTTP GET request to the following URL
    `https://apis.ccbp.in/ipl/<team_id>` with the team id to get the matches
    data of the team

    Example: `https://apis.ccbp.in/ipl/KKR`

  - After fetching the data, the updated team banner, latest match and, list of
    recent matches should be displayed

- The data fetched from `https://apis.ccbp.in/ipl` contains a list of team
  objects accessible with the key `teams`.
- Each team object will have the following properties.

  | Key            | Data Type |
  | -------------- | --------- |
  | id             | String    |
  | name           | String    |
  | team_image_url | String    |

- The data fetched from `https://apis.ccbp.in/ipl/<team_id>` will contain the
  following keys

  | Key                  | Data Type       |
  | -------------------- | --------------- |
  | team_banner_url      | String          |
  | latest_match_details | Object          |
  | recent_matches       | Array\<Object\> |

- Each Team Matches route should have different gradient colors as background
  based on the selected team.

- Your task is to complete the implementation of
  - `src/components/Home/index.js`
  - `src/components/Home/index.css`
  - `src/components/TeamCard/index.js`
  - `src/components/TeamCard/index.css`
  - `src/components/TeamMatches/index.js`
  - `src/components/TeamMatches/index.css`
  - `src/components/LatestMatch/index.js`
  - `src/components/LatestMatch/index.css`
  - `src/components/MatchCard/index.js`
  - `src/components/MatchCard/index.css`

#### Quick Tip

- To show the animated loader, we need to import the loader component as
  - `import Loader from 'react-loader-spinner'`
- In order to form the given animated loader, use **Oval** for `type` attribute
  & also use **#ffffff** for `color` attribute of `Loader` component

  ```
  <Loader type="Oval" color="#ffffff" height={50} width={50} />
  ```

> #### Important Note
>
> **The following HTML attributes are required for the HTML for the tests to
> pass**
>
> - The IPL logo in the Home Route should have the HTML alt attribute value as
>   `ipl-logo`
> - The API response received from the given apiUrl should be converted to camel
>   case
>
> - Wrap the Loader component with an HTML container element and add the
>   `testid` attribute value as `loader` to it as shown below
>
> ```
> <div testid="loader">
>      <Loader type="Oval" color="#ffffff" height={80} width={80} />
> </div>
> ```

### Resources

#### Data Fetch URLs

- `https://apis.ccbp.in/ipl`

#### Images

- [https://assets.ccbp.in/frontend/reactjs/ipl-dashboard-sm-bg.png](https://assets.ccbp.in/frontend/reactjs/ipl-dashboard-sm-bg.png)
- [https://assets.ccbp.in/frontend/reactjs/ipl-dashboard-lg-bg.png](https://assets.ccbp.in/frontend/reactjs/ipl-dashboard-lg-bg.png)
- [https://assets.ccbp.in/frontend/reactjs/ipl-logo-img.png](https://assets.ccbp.in/frontend/reactjs/ipl-logo-img.png)

#### Colors

**Background Colors**:

<div style="background-color: #ffffff33; width: 150px; padding: 10px; color: black">Hex: #ffffff33</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #a4261d; width: 150px; padding: 10px; color: white">Hex: #a4261d</div>
<div style="background-color: #5755a7; width: 150px; padding: 10px; color: white">Hex: #5755a7</div>
<div style="background-color: #d91c1f; width: 150px; padding: 10px; color: white">Hex: #d91c1f</div>
<div style="background-color: #f7db00; width: 150px; padding: 10px; color: white">Hex: #f7db00</div>
<div style="background-color: #da237b; width: 150px; padding: 10px; color: white">Hex: #da237b</div>
<div style="background-color: #13418b; width: 150px; padding: 10px; color: white">Hex: #13418b</div>
<div style="background-color: #f26d22; width: 150px; padding: 10px; color: white">Hex: #f26d22</div>
<div style="background-color: #4f5db0; width: 150px; padding: 10px; color: white">Hex: #4f5db0</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>

<br />

**Border Color**

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: black">Hex: #475569</div>

<br />

**Text Colors**

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #18ed66; width: 150px; padding: 10px; color: black">Hex: #18ed66</div>
<div style="background-color: #e31a1a; width: 150px; padding: 10px; color: black">Hex: #e31a1a</div>

#### Font-families

- Bree Serif

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
