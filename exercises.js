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
names.forEach((name) => console.log(`1 - Name: ${name}`));

// Log each province to the console
provinces.forEach((province) => console.log(`1 - Province: ${province}`));

// Log each name with a matching province in the format "Name (Province)"
names.forEach((name, index) =>
  console.log(`1 - ${name} (${provinces[index]})`)
);
/*
The forEach() method is applied to each element in the names and provinces arrays.
I then use the same index to log them both
*/

//(2) Uppercase Transformation:
const provinceNamesUppercase = provinces.map((province) =>
  province.toUpperCase()
);
console.log(`2 - ${provinceNamesUppercase}`);
/*
map() method returns a new array.
I applied it to each element in the provinces array, and then converted the new array to all upper case letters.
*/

//(3) Name Lengths:
names.map((name) => {
  const nameLengths = name.length;
  console.log(`3 - ${name}: ${nameLengths}`);
});
/*
I created a new array from the names array using the map() method. 
name.length checks the length of the 'name' item and stores this in nameLengths
Finally, I logged both the name and the length to the console.
*/

//(4) Sorting alphabetically:
provinces.sort();
console.log(`4 - ${provinces}`);
/*
sort() automatically sorts elements in an array alphabetically, which I then logged 
*/

//(5) Filtering Cape:
const provincesWithoutCape = provinces.filter(
  (province) => !province.includes("Cape")
);
// Log the count of remaining provinces
console.log(
  `5 - Number of provinces without 'Cape' = ${provincesWithoutCape.length}`
);
/*
Syntax: array.filter((element) => condition)
The filter() method creates a new array. I applied it to each element in the provinces array.
Then I created a function that checks if each element does not include the word 'Cape'.
And logged the amount of elements without 'Cape'
*/

//(6) Finding 'S':
const namesWithS = names.map((name) => name.toLowerCase().includes("s"));
namesWithS.some((item) => item);
console.log(`6 -`, names, namesWithS);
/*
map() is used to create a new array of booleans.
In this new array I first converted each name element to lower case and checked if they contain the letter 's'
Then some() is used to check if at least one element in the namesWithS array is true (i.e, it contains the letter 's')
*/

//(7) Creating Object Mapping
const namesAndProvinces = names.reduce((accumulatorObj, nameInArray, index) => {
  accumulatorObj[nameInArray] = provinces[index];
  return accumulatorObj;
}, {});
console.log(`7 -`, namesAndProvinces);
/* 
Syntax: array.reduce(callbackFn, initialValue)
In my solution names.reduce() starts to reduce the names array, ultimately storing the final result in namesAndProvinces
(accumulatorObj, nameInArray, index) is the callback Fn that runs on each element in the names array
accumulatorObj is the object that accumulates the new array
nameInArray is the current element from the names array.
index is the current index of the element in the names array.
accumulatorObj[nameInArray] = provinces[index] creates a key-value pair. key = name, value = province, using the same index.
return accumulatorObj returns the updated object to be used in the next iteration.
This is done until all elements are iterated over, pushing the final results to:
{} which is the initial value of the accumulatorObj, which started as an empty object.
*/
