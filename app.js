var person = {
    name: "max",
    age: 36,
    hobbies: ["sports", "cooking"],
};
var favoriteActivities = [];
favoriteActivities.push("four");
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
