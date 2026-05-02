import bcrypt from "bcrypt";

const hashedPassword = await bcrypt.hash("password", 10);
console.log(hashedPassword);
const isMatch = await bcrypt.compare("password1", hashedPassword);
console.log(isMatch);