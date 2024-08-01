const age = 17;
const year = '1355'
let result = age >= 20 
console.log(result)
 
if (age > 18){
    console.log('welcome')
}else if (age < 15){
    console.log('you are young')
}
else{
    console.log('you are old')
}
console.log(age+5)
console.log(Number(year)+5)
console.log('hello you are'+age+'years old')

console.log(Boolean(22))
console.log(Boolean(null))

// const day = Number( prompt ('enter your score:'))
// const name = prompt('enter:')


// switch(day){
//     case 0:
//         console.log('mjdjkjn')
//         break;
//     case 1:
//         console.log('ncjjff')
//         break;
//     default:
//         console.log('eror')
//         break;
// }

// if (day==6 || day==5){
//     console.log('iliojkop')
// }

// while (day<5){
//     console.log('gfbg')
//     day++;
//     day += 1
    
// }

// let a = prompt('enter a num:')

// do {
//     if ('a=0'){
//         console.log(a)
//     }
//     else (
//         console.log('eror')
//     )

//     }while (a<10)

// function test (){
//     let a = ('hello')
//     console.log (a)
// }
// test(a)


// dictionary

const obj = {
    name:'kiana',
    age : 19,

}

const d = obj.name
console.log(d)

// list

const zed = [2,3,4,5];
const y = zed[2];
console.log(y);
console.log(zed);
let v ;
v = `i like number ${zed[0]}`
console.log(v)
zed[1] = 9
console.log(zed)

const fruits = ['apple','pear']
fruits [2] = 'orange'
console.log (fruits)

zed.push[40]
zed.pop()


// upper case charechters
const w = 'hello'
let newW = w.charAt(0).toUpperCase()
console.log(newW);

let newW2 = w[1].toUpperCase();
console.log(newW2 + w)

// date and time

let u = Date.now();
console.log(u);


