const ticket = new Promise(function(resolve, reject){
    const bill = true;

    if(bill){
        resolve("You can board the flight");
    }
    else{
        reject("You cant't board the fight");
    }
});

ticket
    .then((data)=>{
        console.log(data);
    })
    .catch((data)=>{
        console.log(data);
    })
    .finally(()=>{
        console.log("It will be printed");
    })