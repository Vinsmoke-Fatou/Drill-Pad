const validateUser = (data) => {
  let valid = true;
  let error = [];

  if ((data.name === undefined) || (typeof data.name !== "string") || (data.name.trim() === "")) {
    valid = false;
    error.push("The  name must be a non-empty string");
  }

  //   The most modern and common way to check if a string contains a specific character in JavaScript is using the includes() method.
  if (!(data.email.includes('@')) || !(data.email.includes('a'))) {
    valid = false;
    error.push("The email must contain '@' and 'a'");
  }

  if (data.age < 13 || data.age > 120) {
    valid = false;
    error.push("The age must be a number between 13 and 120");
  }

  // Check if 'data.password' contain at least one number (0-9
  const hasNumber = /\d/.test(data.password);
  if (data.password.length < 8 || !hasNumber) {
    valid = false;
    error.push(
      "The password must be at least 8 characters and contain at least one number",
    );
  }

  return { valid, error };
};

const user1 = {
  name: "",
  email: "fatousambgmail",
  age: 8,
  password: "jru",
};

const validation1 = validateUser(user1);

console.log(validation1.valid);
console.log(validation1.error);

const user2 = {
  name: "fatou",
  email: "fatousamb@gmail",
  age: 19,
  password: "jsuehd10",
};

const validation2 = validateUser(user2);

console.log(validation2.valid);
console.log(validation2.error);
