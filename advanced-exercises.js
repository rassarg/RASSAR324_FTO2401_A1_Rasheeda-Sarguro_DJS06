// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// ************************************** ADVANCED EXERCISES ************************************* //

// (1) Log Products:
console.log(products.map((product) => product.product));
/*
Using the map() method, I created a new array
This array iterates over each element in the products array.
For each product object in the array, it returns product.product, which accesses only the product property of each object
This then becomes the new array, containing only the product names
*/

// (2) Filter by Name Length:
console.log(
  products
    .filter((product) => product.product.length <= 5)
    .map((product) => product.product)
);
/*
filter() creates a new array with elements that passes a test based on a function
The function here looks at the length of each product in the products array and checks if it's less than or equal to 5 characters.
All 'true' results will be added to the new array.
The map() method creates a new array to return an array of the product names
*/

//(3) Price Manipulation:
console.log(
  products
    // Filter out products without valid prices
    .filter(
      (product) => product.price !== "" && !isNaN(parseInt(product.price))
    )
    // Converts prices to integers using parseInt()
    .map((product) => ({
      ...product,
      price: parseInt(product.price),
    }))
    // Calculate the total price using reduce
    .reduce((total, product) => total + product.price, 0)
);
/*
I used filter() to create a new array with elements that meet the specified conditions:
product.price !== "" ensures that price is not an empty string &
!isNaN(parseInt(product.price)) ensures that product.price can be turned into a valid number.
map() then creates a new array of the following:
...product: Looks at all existing properties of each product
price: parseInt(product.price) ensures all prices are converted into numbers.
Lastly, with 0 being the initial value, reduce() reduces the array to a single value.to get the total price.
The total is accumulated by adding product.price to the total
*/

//(4) Concatenate Product Names:
console.log(
  products
    // concatenate product names
    .reduce(
      (concatenatedNames, product) =>
        // Append each product name to the concatenated string
        concatenatedNames + product.product,
      "" // Initial value for concatenatedNames is an empty string
    )
);
/*
Using the reduce() method on the products array, the callback function has two parameters:
concatenatedNames: the accumulator that stores the concatenated string of product names.
product: Each individual product object being processed in the array. I wasn't sure if I was supposed to separate the product names with + " "?
"" is the empty string that is the initial value for concatenatedNames.
The reduce() method iterates through each product in the products array and accumulates all product names into concatenatedNames
*/

//(5) Find Extremes in Prices:
console.log(
  (() => {
    const priceVariants = products.reduce((accumulatorObj, product) => {
      const parsedPrice = parseInt(product.price);
      if (!accumulatorObj.highest || parsedPrice > accumulatorObj.highest) {
        accumulatorObj.highest = parsedPrice;
      }
      if (!accumulatorObj.lowest || parsedPrice < accumulatorObj.lowest) {
        accumulatorObj.lowest = parsedPrice;
      }
      return accumulatorObj;
    }, {});

    return `Highest: ${priceVariants.highest}. Lowest: ${priceVariants.lowest}.`;
  })()
);
/*
For this solution, I put the logic into an immediately invoked Function Exp to log the formatted string directly.
I used the reduce() method to determine the highest and lowest prices in the products array by updating the accumulatorObj based on the conditions provided.
The reduce() method also initializes with an empty object {} as the initial value.
parseInt converts the price property of each product object into an integer.
To get the highest and lowest prices:
I check if accumulatorObj.highest is undefined or if parsedPrice is greater than the current accumulatorObj.highest value.
If either condition is true, it updates accumulatorObj.highest to parsedPrice.
I then check for the lowest price using the same logic.
Finally the Highest and Lowest values are returned as a string to the console.
*/

//(6) Object Transformation:
console.log(
  Object.entries(products).reduce((accumulatorArr, [, { product, price }]) => {
    accumulatorArr.push({ name: product, cost: price });
    return accumulatorArr;
  }, [])
);
/*
Here Object.entries coverts the object in products array into key-value pairs.
The key is the index: [, 
The value is the object: { product, price }
The reduce() method iterates over each key-value pair, adding it to an accumulatorArr array, which starts as an empty array.
In the reduce() function { name: product, cost: price } is created and pushed onto the accumulatorArr array as the new value object.
The current state of the accumulatorArr is returned after each iteration and added becomes the accumulated result.
*/
