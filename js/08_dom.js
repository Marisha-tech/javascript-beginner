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
const heading2 = document.querySelector('#sub-hello')//возвращает всегда один элемент
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
    addStylesTo(heading, 'JavaScript')
    // ИЛИ
    // heading.textContent = 'Changed from JS'
    // heading.style.color = 'white'
    // heading.style.textAlign = 'center'
    // heading.style.backgroundColor = 'green'
    // heading.style.padding = '2rem'
}, 1500)

// ДЛя перехвата события
const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click', event, event.target.getAttribute('href'));
    const url = event.target.getAttribute('href')

    window.location = url
})

setTimeout(() => {
    addStylesTo(heading3.children[0], 'Практикуйся', 'yellow')
}, 3000)

setTimeout(() => {
    addStylesTo(heading2, 'И всё получится', 'blue', '2rem')
}, 4500)

// Функция, которая переданному элементу будет задавать стили
function addStylesTo(node, text, color = 'red', fontSize){
    // node.textContent = 'Changed from JS'
    node.textContent = text
    // node.style.color = 'white'
    node.style.color =  color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'green'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'


    if(fontSize){
        node.style.fontSize = fontSize
    }
}

// События

heading.onclick = () => {
    if(heading.style.color === 'red'){
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else{
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if(heading2.style.color === 'red'){
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else{
        heading2.style.color = 'red'
        heading2.style.backgroundColor = '#000'
    }
})

// Отмена поведения ссылки

