function double(num){
    doubleNum= num*2;
    return doubleNum;
}
function square(num2){
    squareNum= num2*num2;
    return squareNum;
}

function doubleThenSquare(delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Square of doubled Num: ${square(double(4))}`)
        },delay)
    })
}

doubleThenSquare(2000)
    .then((message)=>{
        console.log(message);
    })