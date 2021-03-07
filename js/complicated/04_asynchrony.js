// Асинхронность - вывод чего-то через какое-то время
// Event Loop - http://latentflip.com/loupe

/* Пример синхронности
console.log("Start");
console.log("Start2");
 */

function timeout2sec() {
  console.log("timeout2sec");
}

window.setTimeout(function () {
  console.log("Inside timeout after 2 seconds");
}, 5000);

setTimeout(timeout2sec, 2000);

console.log("End");
