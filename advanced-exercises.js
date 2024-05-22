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

// (2) Filter by Name Length: Filter out products with names longer than 5 characters
console.log(names.filter((name) => name.length <= 5));

//(3) Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce

//(4) Concatenate Product Names: Use reduce to concatenate all product names into a single string

//(5) Find Extremes in Prices: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."

//(6) Object Transformation: Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values
