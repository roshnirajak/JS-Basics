function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = '🧀';
            resolve(cheese);
        }, 2000);
    });
}
function getBase(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const base = cheese + ' + ' + '🫓';
            resolve(base);
        }, 3000);
    });
}
function putToppings(base) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const top = base + ' + ' + '🫑🍅🌽';
            resolve(top);
        }, 2000);
    });
}
function bakePizza(top) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = top + ' = ' + '🍕';
            resolve(pizza);
        }, 3000);
    });
}

getCheese()
    .then((cheese) => {
        console.log("Here is the", cheese);
        return getBase(cheese);
    })
    .then((base) => {
        console.log("Making Pizza base ", base);
        
        return putToppings(base);
    })
    .then((top) => {
        console.log("Putting Toppings ", top);
        return bakePizza(top);
    })
    .then((pizza)=>{
        console.log("Serving Pizza ", pizza);
    })