function somentePares(arr){
    let arr2 = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0 && i % 2 == 0){
            arr2.push(arr[i]);
        }
    }

    return arr2
}

console.log(somentePares([1,2,3,4]))
console.log(somentePares([10,70,22,43]))