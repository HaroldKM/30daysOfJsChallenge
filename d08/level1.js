// 1 -creating an object
const dog = {};

// 2 -Print the dog object to the console
console.log(dog);

// 3 -Add name, legs, color, age and bark properties for the dog object
(dog.name = "zeus"),
  (dog.legs = 4),
  (dog.color = "black-brown"),
  (dog.bark = () => console.log("woof, woof"));

// 4 get all values from object dog
const getObjectValue = (obj) => {
  console.log("heko");
  const objKeys = Object.keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    let value = obj[objKeys[i]];
    if (typeof value === "function") {
      value();
    } else {
      console.log(`${objKeys[i]}: ${value}`);
    }
  }
};

getObjectValue(dog);
