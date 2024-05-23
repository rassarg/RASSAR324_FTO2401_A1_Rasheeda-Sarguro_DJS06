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

// (1) Log Products: Iterate over the products array, logging each product name
console.log(products.map((product) => product.product));
/*
Using the map() method, I created a new array
This array iterates over each element in the products array.
For each product object in the array, it returns product.product, which accesses only the product property of each object
This then becomes the new array, containing only the product names
*/

// (2) Filter by Name Length: Filter out products with names longer than 5 characters
console.log(names.filter((name) => name.length <= 5));
/*
filter() creates a new array with elements that pass a test based on a function
The function here looks at the length of each name in the names array and checks if it is less than or equal to 5 characters.
All 'true' results will be added to the new array.
*/

//(3) Price Manipulation:
//Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce
console.log(
  products
    // Filter out products without prices
    .filter(
      (product) => product.price !== "" && !isNaN(parseFloat(product.price))
    )
    // Convert string prices to numbers
    .map((product) => ({
      ...product,
      price: parseFloat(product.price),
    }))
    // Calculate the total price using reduce
    .reduce((total, product) => total + product.price, 0)
);
/*
I used filter() to create a new array with elements that meet the specified conditions:
product.price !== "" ensures that price is not an empty string &
!isNaN(parseFloat(product.price)) checks if product.price can be converted to a number using parseFloat.
map() then creates a new array of the following:
...product: Looks at all existing properties of each product
price: parseFloat(product.price) modifies the price property of each product by converting the price from a string to a number 
Lastly, with 0 being the initial value, reduce() reduces the array to a single value.to get the total price.
The total is accumulated by adding product.price to the total
*/

//(4) Concatenate Product Names:
//Use reduce to concatenate all product names into a single string
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
product: Each individual product object being processed in the array.
"" is the empty string that is the initial value for concatenatedNames.
The reduce() method iterates through each product in the products array and accumulates all product names into concatenatedNames
*/

//(5) Find Extremes in Prices:
//Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."

/*

*/

//(6) Object Transformation:
//Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values
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
