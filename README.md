# Redux-02 Homework

For this session, you have to create a website based on what you've learned.

## Description

### homepage

You must use React to create your components. You can use any CSS framework you prefer, such as React-Bootstrap, Tailwind, Material UI, Pure CSS, etc.

You will have some cards that display data about plants for sale. By clicking on these cards, users can add the plants to their cart. (Hint: use the useDispatch() hook.)

**Note:** The "Add to Cart" text shown when hovering over the cart icon is not necessary.

A toast notification must be displayed on the screen, and the number of added plants must be shown on the cart at the top of the page each time the user clicks on any basket icon. Additionally, the total price of the plants added should be displayed. (Hint: use the useSelector() hook.)

**Note:** A simple message indicating that an item has been added to the cart is sufficient as a toast notification; animation is not required.

The images used will be provided for you.

This website consists of two pages: the Homepage and the Shopping Cart page.

You must use React Router DOM to connect the pages.

### cart page

The cart page must contain a table that includes the plants the user has added previously, showing the quantity, price, and star rating of each plant, along with the total price.

Below that, there should be a list of all the plants added, displayed as cards. Each card should have a delete button; clicking on it should open a modal asking if they are sure they want to delete the item. The modal should contain two buttons: "Delete" and "Cancel." When the "Delete" button is clicked, the plant's card should be removed from the list, along with its data from the table.

## Final Result

The final result of your work should look like [THIS](https://aps-plants-website.netlify.app)

## Deployment

Once you have completed your project, you should deploy your website using any method you prefer (e.g., Netlify, GitHub Pages).

Please upload 1)"the link of your project on your github" and 2)"the link of your deployed website" in your classroom.


## Scores
#### Home Page:

--show cards: 35

(provider 5,
store 2,
reducer 3,
use selector 25)

--click on icon: 35

(reducer 5,
action creator/type 5,
use dispatch 25)

shopping cart: 20

(use selector 10,
toast 10)

--responsive: 10


#### Shopping Page: 

--react router dom: 20

(path 15,
link 5)

--delete functionality: 50

(modal 10,
action 5,
reducer 15,
use dispatch 20)

--show table: 25

(use selector 25)

--responsive: 5
