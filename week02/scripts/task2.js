/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

const myName = "David";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = 2023;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const myPic = 'images/myPicture.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#photo').setAttribute('src', myPic);




/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFood = ["Churrasco", "Corn cake", "baked fish", "Scotch broth"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favoriteFood.join(", ");

// Step 3: declare and instantiate a variable to hold another favorite food
const addFavoriteFood = "irish stew";

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFood.push(addFavoriteFood);

// Step 5: repeat Step 2

// Step 6: remove the first element in the favorite foods array
favoriteFood.shift();

// Step 7: repeat Step 2

// Step 8: remove the last element in the favorite foods array
favoriteFood.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFood.join(", ");