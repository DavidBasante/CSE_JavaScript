/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

let myName = "David";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = myName;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = 2023;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPic = 'images/myPicture.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#photo').setAttribute('src', myPic);




/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFood = ["Churrasco", "Corn cake", "baked fish", "Scotch broth"];
let foodList = favoriteFood.join(", ");

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = foodList;

// Step 3: declare and instantiate a variable to hold another favorite food
let addFavoriteFood = "irish stew";

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFood.push(addFavoriteFood);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = favoriteFood.join(", ");

// Step 6: remove the first element in the favorite foods array
favoriteFood.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favoriteFood.join(", ");


// Step 8: remove the last element in the favorite foods array
favoriteFood.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favoriteFood.join(", ");