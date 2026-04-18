console.log("hello world");

// input from user
// import readline1 from "readline";

// wrong way it will not work because of the asynchronous nature of readline.question() method

// const rl = readline1.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let name;

// rl.question('What is your name? ', (inputName) => {
//   name = inputName;
//   console.log(`Hello ${name}`);
//   rl.close();
// });

// console.log(name);

// if(name === "") {
//   console.log("Please enter a name");
// }else if(name === "tanbir") {
//   console.log("Welcome back, tanbir! oh i see you again! hope you are doing well! nice to see you!");
// }else if(name === "admin") {
//   console.log("Welcome back, admin! nice to see you!");
// }else {
//   console.log("Hello " + name);
// }

// right way it will work because of the synchronous nature of readline.question() method
// const rl1 = readline1.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl1.question("What is your name? ", (inputName) => {
//   console.log(`Hello ${inputName}`);

//   if (inputName === "") {
//     console.log("Please enter a name");
//   } else if (inputName === "tanbir") {
//     console.log(
//       "Welcome back, tanbir! oh i see you again! hope you are doing well! nice to see you!",
//     );
//   } else if (inputName === "admin") {
//     console.log("Welcome back, admin! nice to see you!");
//   } else {
//     console.log("Hello " + inputName);
//   }
//   rl.close();
// });

// others way to get input from user using promise and async/await
// import readline2 from "readline/promises";

// const rl2 = readline2.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const name = await rl2.question("What is your name? ");
// console.log(`Hello ${name}`);

// if (name === "") {
//   console.log("Please enter a name");
// } else if (name === "tanbir") {
//   console.log(
//     "Welcome back, tanbir! oh i see you again! hope you are doing well! nice to see you!",
//   );
// } else if (name === "admin") {
//   console.log("Welcome back, admin! nice to see you!");
// } else {
//   console.log("Hello " + name);
// }

// rl2.close();

// another way
// import readline3 from "readline/promises";
// import { stdin as input, stdout as output } from "process";

// const rl3 = readline3.createInterface({ input, output });

// function askQuestion(question) {
//   return new Promise((resolve) => {
//     rl3.question(question, (answer) => {
//       resolve(answer);
//     });
//   });
// }

// const name = await askQuestion("What is your name? ");
// console.log(`Hello ${name}`);

// otehr way to get input from user using readline-sync package
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const name = await rl.question("What is your name? ");

console.log(`Hello ${name}`);

if (name === "") {
    console.log("Please enter a name");
} else if (name === "tanbir") {
    console.log(
        "Welcome back, tanbir! oh i see you again! hope you are doing well! nice to see you!",
    );
} else if (name === "admin") {
    console.log("Welcome back, admin! nice to see you!");
} else {
    console.log("Hello " + name);
}

rl.close();
