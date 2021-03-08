// Proxy - некоторый класс в JS, который позволяет создавать ловушки для объектов/классов/тд

// Объекты - проксирование объектов
const person = {
  name: 'Marina',
  age: 25,
  job: 'Fullstack',
}
// первый параметр - таргет, те та цель, на которую хотим повесить прокси
// второй параметр - набор хендлеров, те методы, которые позволяют сделать ловушки, в данном случае для объекта
const op = new Proxy(person, {
  get(target, prop) {
    console.log(`Getting prop ${prop}`)
    return target[prop]
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No ${prop} field in target`)
    }
  },
  has(target, prop) {
    return ['age', 'name', 'job'].includes(prop)
  },
  // удаление свойства из объекта
  deleteProperty(target, prop) {
    console.log('Deleting...', prop)
    delete target[prop]
    return true
  },
})

// Функции
const log = (text) => `Log: ${text}`

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log('Calling fn...')

    return target.apply(thisArg, args).toUpperCase()
  },
})

// Классы
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
consct = PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log('Constract....')

    // return new target(...args)
    return new Proxy(new target(...args), {
      get(t, prop) {
        console.log(`Gettimg prop "${prop}"`)
        return t[prop]
      },
    })
  },
})

const p = new PersonProxy('Maxim', 30)
