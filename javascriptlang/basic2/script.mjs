import { log } from "node:console";

const fruites = [
  "apple",
  "banana",
  "orange",
  "grape",
  "melon",
  "kiwi",
  "strawberry",
  "blueberry",
  "peach",
  "pear",
];

// log(fruites[0]); // apple
// log(fruites[1]); // banana
// log(fruites[2]); // orange
// log(fruites[3]); // grape
// log(fruites[4]); // melon
// log(fruites[5]); // kiwi
// log(fruites[6]); // strawberry
// log(fruites[7]); // blueberry
// log(fruites[8]); // peach
// log(fruites[9]); // pear

// for (let i = 0; i < fruites.length; i++) {
//   console.log(i, fruites[i]);
// }

// while (true) {
//   const randomIndex = Math.floor(Math.random() * fruites.length);
//   console.log(randomIndex);
//   console.log(fruites[randomIndex]);

//   if (randomIndex === 5) {
//     break;
//   }
// }

let index = 0;

while (index < 100) {
  const randomIndex = Math.floor(Math.random() * fruites.length);
  console.log(index, randomIndex, fruites[randomIndex]);
  index++;
}
