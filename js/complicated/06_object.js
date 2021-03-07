// Настройка объектов

//первый параметр это прототип
const person = Object.create(
  {
    calculateAge() {
      console.log('Age: ', new Date().getFullYear() - this.birthYear)
    },
  },
  {
    name: {
      value: 'Marina',
      enumerable: true, //можно видеть ключ в консоли
      writable: true, //можно перезаписывать ключ
      configurable: true, //можно удалять какой-то ключ из объекта
    },
    birthYear: {
      value: 1993,
      enumerable: true,
      writable: true,
      configurable: false,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear
      },
      set(value) {
        document.body.style.background = 'red'
        console.log('Set age', value)
      },
    },
  }
)

// person.name = 'Maxim'

for (let key in person) {
  //проверка чтобы не пробегаться по значениям прототипа
  if (person.hasOwnProperty(key)) {
    console.log('Key', key, person[key])
  }
}
