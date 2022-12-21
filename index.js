let ltr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let random = ltr[Math.floor(Math.random() * ltr.length)]
let color = [];


for (let i = 0; i < 6; i++) {
    color.push(ltr[Math.floor(Math.random() * ltr.length)]);
}

color = color.join('')
document.body.style.backgroundColor = `#${color}`
document.body.append(color)
console.log(color)
