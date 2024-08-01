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


switch(day){
    case 0:
        console.log('mjdjkjn')
        break;
    case 1:
        console.log('ncjjff')
        break;
    default:
        console.log('eror')
        break;
}

if (day==6 || day==5){
    console.log('iliojkop')
}

while (day<5){
    console.log('gfbg')
    day++;
    day += 1
    
}

let a = prompt('enter a num:')

do {
    if ('a=0'){
        console.log(a)
    }
    else (
        console.log('eror')
    )

    }while (a<10)

function test (){
    let a = ('hello')
    console.log (a)
}
test(a)