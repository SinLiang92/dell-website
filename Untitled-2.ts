import {question} from 'readline-sync'

function displayall(array){
    let i = 0
    while (i<3){
        console.log(i + '. ' + array[i].label + ', Price:' + array[i].price)
        i += 1
}
}

console.log('Choose your Resolution')
const resOption1 = [
    {
        label: '1920 x 1080',
        price: 300,
    },
    {
        label: '2560 x 1440',
        price: 600,
    },
    {
        label: '3280 x 1680',
        price: 900,
},
]
displayall(resOption1)
let ans1 = question('Select index\n')

console.log('Choose your Video Card')
const resOption2 = [
    {
        label: 'nVidia',
        price : 600,
    },
    {
        label: 'AMD Radeon',
        price : 550,
    },
    {
        label: 'Intel',
        price : 500,
},
]
displayall(resOption2)
let ans2 = question('Select index\n')


console.log('Choose your Processor')
const resOption3 = [
    {
        label:'i3', 
        price:500
    },
    {
        label:'i5', 
        price:600
    },
    {
        label:'i7', 
        price:700,
    },
]
displayall(resOption3)
let ans3 = question('Select index\n')


console.log('Choose your HardDisc')
const resOption4 = [
    {
        label:'128GB',
        price:200,
    },
    {
        label:'256GB',
        price:300,
    },
    {
        label:'512GB',
        price:400,
    },
]
displayall(resOption4)
let ans4 = question('Select index\n')


console.log('You have chosen the following options: ')
const prices = [
    resOption1[ans1].price,
    resOption2[ans2].price,
    resOption3[ans3].price,
    resOption4[ans4].price,
]

let total=0

for (let i in prices){
    total=total +prices[parseInt(i)]
}

console.log(resOption1[ans1].label)
console.log(resOption2[ans2].label)
console.log(resOption3[ans3].label)
console.log(resOption4[ans4].label)
console.log(total)