///////////////////////////////////////1
items = [
  {
    id: 1,
    name: "HP desktop G200",
    category: "Electronics",
    price: 299,
  },
  {
    id: 2,
    name: "Canon MFP 400",
    category: "Electronics",
    price: 399,
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    category: "Phones",
    price: 1999,
  },
  {
    id: 4,
    name: "Apple Watch",
    category: "Smart watches",
    price: 599,
  },
  {
    id: 5,
    name: "Lenovo optical mouse",
    category: "Electronics",
    price: 9,
  },
];


let sirala = items.sort((x, y) => (x.price-y.price));
console.log(sirala)


// /////////////////////////////////////2
// my_arr = [];
// for (i = 0; i < 5; i++) {
//   my_arr.push(Math.trunc(Math.random() * 100));
// }
// console.log(my_arr);
