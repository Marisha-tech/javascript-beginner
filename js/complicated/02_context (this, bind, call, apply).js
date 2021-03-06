// Контекст
// this указывает на тот объект, в контексте которого оно было вызвано
function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Marina",
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

const lena = {
  name: "Elena",
  age: 22,
};

//bind возвращает новую функцию и ее можно вызвать тогла когда будет угодно
// person.logInfo.bind(lena, "Fronend", "89231410000")();

//call сразу вызывает функцию

// person.logInfo.call(lena, "Fronend", "89231410000"); //call сразу вызывает функцию

// apply сразу вызовет фунцию
// person.logInfo.apply(lena, ["Fronend", "89231410000"]);

// Примеры
const array = [1, 2, 3, 4, 5];

// Минус в том, что функию нужно будет импортировать всегда для того чтобы вызывать ее, передавать массив
// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n;
//   });
// }
// console.log(multBy(array, 15));

Array.prototype.multBy = function (n) {
  // console.log("multBy", this);
  return this.map(function (i) {
    return i * n;
  });
};

console.log(array.multBy(20));
