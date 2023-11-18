const person = {
  name: "max",
  age: 36,
  hobbies: ["sports", "cooking"],
};

let favoriteActivities: string[] = [];

favoriteActivities.push("four");

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
