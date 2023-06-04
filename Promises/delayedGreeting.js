function delayedGreeting(name, time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Hello ${name}`);
        },time); 
    })
}
delayedGreeting('Meow', 3000)
    .then((message)=>{
        console.log(message);
    })