







function task1(numb, value){
let arr = []
for ( let i = 0; i < numb; i++){
    arr.push(value)
}
return arr;
}
console.log(task1(5,"a"));


function task2(arr) {
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(task2([1, 2, 3]));
