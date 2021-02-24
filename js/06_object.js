//Объекты

//Создание объекта
const person = {
    name: 'Marina',
    age: 30,
    isProgrammer: true,
    lang: ['ru', 'en'],
    'complex key': 'Complex value',
    ['key_' + (1 + 3)]: 'Computed key',
    greet: function(){}, //greet в данном случае метод, тк находится внутри объекта
    greet(){
        console.log('greet from person');
    }, //greet в данном случае метод, тк находится внутри объекта. В новых версиях js в функции можно опустить function и :
    info() {
        // console.log('Информация про человека по имени:', person.name)
        console.log('Информация про человека по имени:', this.name)//this это person
    }
}

// Обращение к полям объекта
// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// console.log(person['age'])
// console.log(person)

// Получение методов объекта
// person.greet()

// Добавление значения de
// person.age++ //прибавление на 1
// person.lang.push('de')
// console.log(person.lang);

// Удалить значение 'Computed key'
// person['key_4'] = undefined //в данном случае ключ не удалится, а ему присвоится undefined
// delete person['key_4']
// console.log(person);

// Новый синтаксис и десктурктуризация
// const name = person.name
// const age = person.age
// const lang = person.lang
// const {name, age, lang} = person //десктурктуризация
// const {name, age: personAge = 10, lang} = person //десктурктуризация
// console.log(name, personAge, lang);

// Объекты не итерируемые, те невозможно обойти циклом, но можно использоваться цикл for in
// Данный цикл опасен, ткт бежит не только по ключам объекта, но может заходить и в его прототип
// for(let key in person){
//     console.log('key:', key)
//     console.log('value:', person[key])
// }
// Чтобы этого избежать, то необходимо делать проверку
// for(let key in person){
//     if(person.hasOwnProperty(key)){
//         console.log('key:', key)
//         console.log('value:', person[key])
//     }  
// }
// Можно использовать глобальный объект object и обойти его forEach
// const keys =  Object.keys(person)
// keys.forEach((key) =>{
//     console.log('key:', key)
//     console.log('value:', person[key])
// })
// console.log(keys);

// КОНТЕКСТ
// person.info()
// const logger = {
//     keys(obj){
//         console.log('Object Keys: ', Object.keys(obj))
//     }
// }
// logger.keys(person)
// c помощью this
const logger = {
    keys(){
        console.log('Object Keys: ', Object.keys(this))
    },

    keysAndValues(){
       Object.keys(this).forEach( key => {
           console.log(`"${key}": ${this[key]}`);
       })
    },

    withParams(top = false, between = false, bottom = false){
        if(top){
            console.log('---------- Start ----------')
        }
        Object.keys(this).forEach( (key, index, array) => {
            console.log(`"${key}": ${this[key]}`);
            // Вывод кроме последнего элемента
            if(between && index !== array.length - 1){
                console.log('--------------------')
            }
        })
        if(bottom){
            console.log('---------- End ----------');
        }
    }
}
// logger.keys(person)
// const bound = logger.keys.bind(logger)//bind возвращает новую функцию, которую можно вызывать когда угодно
// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)//вызывает сразу функцию
// logger.keysAndValues.call(person)

// Передача параметров в функции
// logger.withParams.call(person, true, true, true)//call принимает неограниченное количество параметров, зависит от функции
logger.withParams.apply(person, [true, true, true])//apply всегда принимает 2 параметра
