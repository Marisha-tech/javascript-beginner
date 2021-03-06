const person = new Object({
    name: 'Test',
    age: 25,
    greet: function(){
        console.log('Hello');
    }
})

Object.prototype.sayHello = function(){
    console.log('Hello')
}

const lena = Object.create(person)//здесь person будет прототип объекта
console.log(len.greet())
console.log(lena.toSrting())
lena.name = 'Elena'
// Прототип работает сверху вниз
// Прототип - определенный объект, который присутствует у объектов и он вызывается по цепочки сверху вниз
// Прототип - некоторый объект, с помощью которого расширяем свойства объектов или классов и с помощью него можем выстраивать определенное наследование внутри JS

const str = new String('I am srting')
console.log(str.length);
console.log(str.bold);
