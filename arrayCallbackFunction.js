const array= [5, 6, 7, -4, -5, -1, 0, 4, 3];

const findnegative= (num)=>{
  return num < 0;
}

const result = array.findIndex(findnegative);

console.log(result);
