function getCheese(callback){
    setTimeout(()=>{
        const cheese= '🧀';
        console.log("Here is the ", cheese);
        callback(cheese);
    }, 2000);
}

function getBase(cheese,callback){
    setTimeout(()=>{
        const base='🫓';
        console.log("Here is the ", base);
        callback(base);
    }, 5000)
}

function getToppings(callback){
    setTimeout(()=>{
        const top= '🫑🍅🌽';
        console.log("Here are the toppings ", top);
        callback(top);
    },4000)
}

function bakePizza(callback){
    setTimeout(() => {
        const pizza= '🍕';
        console.log("Here is the Pizza ", pizza);
        callback(pizza);
    }, 4000);
}
getCheese((cheese)=>{
    console.log("Got the ", cheese);
    getBase((base)=>{
        console.log("Arranging ", cheese,'+',base);
        getToppings((top)=>{
            console.log("Adding Toppings to ",cheese,base,'+',top);
            bakePizza((pizza)=>{
                console.log(pizza, "Served");
            })
        })
    })
})