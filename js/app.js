// Работа с DOM - работа с API браузера

// window.alert('1') // тоже самое что и alert('1')

const heading = document.getElementById('hello')
// Устаревшие способы
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// Современный способ
// const heading2 = document.querySelector('h2')
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello')//возвращает всегда один элемент
// console.log(heading2)

// Получить второй h2 - I способ
// const heading2 = document.querySelector('#sub-hello')//возвращает всегда один элемент
// console.dir(heading2);
// const heading3 = heading2.nextElementSibling
// console.log(heading3.textContent);
// Получить второй h2 - II способ
const h2List = document.querySelectorAll('h2')
// const heading3 = h2List[1]
const heading3 = h2List[h2List.length - 1]
// console.log(h2List)
console.log(heading3)

// console.dir(heading.id)
// console.dir(heading.textContent)
setTimeout(() => {
    addStylesTo(heading)
    // ИЛИ
    // heading.textContent = 'Changed from JS'
    // heading.style.color = 'white'
    // heading.style.textAlign = 'center'
    // heading.style.backgroundColor = 'green'
    // heading.style.padding = '2rem'
}, 1500)

setTimeout(() => {
    addStylesTo(heading3)
}, 3000)

// Функция, которая переданному элементу будет задавать стили
function addStylesTo(node){
    node.textContent = 'Changed from JS'
    node.style.color = 'white'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'green'
    node.style.padding = '2rem'
}
