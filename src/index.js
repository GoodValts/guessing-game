let min = 0;
let max = 2574;

let number = min + Math.ceil(Math.random() * (max - min));
let x = 0;
let cnt = 0;
//console.log('targ =', number);
//console.log('x =', x)

/*function setRange(min, max) {
    
}
*/

function guess() {
    x = min + Math.floor((max - min) / 2);
    console.log('let x =', x)
    return x;
}

function lower() {
    max = x - 1;
    return max;
}

function greater() {
    min = x + 1;
    return min;
}

console.log('start game');
console.log('targ =', number);

while (x > number || x < number) {
    console.log('---');
    cnt++;
    console.log('cnt =', cnt, 'min =', min, 'max =', max);
    guess();
    if (x > number) {
        lower();
        console.log(x, 'lower', number);
    } else  if (x < number) {
        greater();
        console.log(x, 'greater', number);
    } else {
        console.log('grats!', x, '=', number);
    }
}