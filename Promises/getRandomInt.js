function random(a,b){
    let min= a;
    let max= b;
    let randomInt = Math.floor(Math.random() * (max-min) + min);
    return randomInt;
}

function getRandomInt(delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`RandomInt: ${random(1,6)}`);
        }, delay);
    })
}
getRandomInt(2000)
    .then((message)=>{
        console.log(message);
    })