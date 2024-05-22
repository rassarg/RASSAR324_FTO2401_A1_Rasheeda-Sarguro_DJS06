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

// ************************************** EXERCISES ************************************* //

//(1) ForEach Basics:

// Log each name to the console
names.forEach((name) => console.log(`Exercise 1 - Name: ${name}`));

// Log each province to the console
provinces.forEach((province) =>
  console.log(`Exercise 1 - Province: ${province}`)
);

// Log each name with a matching province in the format "Name (Province)"
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

//(2) Uppercase Transformation:

// Use map to create a new array of province names in all uppercase
const provinceNamesUppercase = provinces.map((province) =>
  province.toUpperCase()
);
console.log(`Exercise 2 - ${provinceNamesUppercase}`); // Log the new array to the console

//(3) Name Lengths:

// Create a new array using map that contains the length of each name
const nameAndLengths = names.map((name) => {
  const nameLengths = name.length;
  console.log(`Exercise 3 - ${name}: ${nameLengths}`);
});

//(4) Sorting:

// Use sort to alphabetically sort the provinces
provinces.sort();
console.log(`Exercise 4 - ${provinces}`);

//(5) Filtering Cape:

// Use filter to remove provinces containing "Cape"
const provincesWithoutCape = provinces.filter(
  (province) => !province.includes("Cape")
);
// Log the count of remaining provinces
console.log(
  `Exercise 5 - Number of provinces without 'Cape' = ${provincesWithoutCape.length}`
);

//(6) Finding 'S': Create a boolean array using map and some to determine if a name contains the letter 'S'
const namesWithS = names.map((name) => name.toLowerCase().includes("s"));
const nameHasS = namesWithS.some((item) => item);
console.log(`Exercise 6 -`, names, namesWithS);

//(7) Creating Object Mapping

//Use reduce to transform the names array into an object mapping names to their respective provinces. */
