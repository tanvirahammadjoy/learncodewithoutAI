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

// let index = 0;

// while (index < 100) {
//   const randomIndex = Math.floor(Math.random() * fruites.length);
//   console.log(index, randomIndex, fruites[randomIndex]);
//   index++;
// }

console.log(fruites);

// print the fruit which fruits only maches with b
// for (let index = 0; index < fruites.length; index++) {
// console.log(fruites[index]);
// expected output:
// banana
// blueberry

// not working
// if (fruites[index] == "banana" && fruites[index] == "blueberry") {
//   console.log(fruites[index]);
// }

// not working
// for (let j = 0; j < index; j++) {
//   console.log(index[j]);
// }

// console.log(fruites[index].charAt());

// worked
// if (fruites[index].charAt() == "b") {
//   console.log(fruites[index]);
// }
// }

let count = 0;

// for (let index = 0; index < fruites.length; index++) {
//   if (fruites[index][0] == "b") {
//     console.log(fruites[index]);
//     count++;
//   }
// }
// console.log(count);

// for (let index = 0; index < fruites.length; index++) {
//   if (fruites[index].startsWith("b")) {
//     console.log(fruites[index]);
//     count += 1;
//   }
// }

// console.log(count);

// for (let index = 0; index < fruites.length; index++) {
//   if (fruites[index].includes("b")) {
//     console.log(fruites[index]);
//     count++;
//   }
// }

// console.log(count);

// for (let i = 0; i < fruites.length; i++) {
//   if (fruites[i] == "banana" || fruites[i] == "blueberry") {
//     console.log(fruites[i]);
//   }
// }

for (let i = 0; i < fruites.length; i++) {
  if (/^b/.test(fruites[i])) {
    console.log(fruites[i]);
    console.log("it's call reg");
  }
}
