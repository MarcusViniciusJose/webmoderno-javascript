function inverter(obj){

    return obj = Object.fromEntries(Object.entries(obj).map(([key,value]) =>[value,key]));
}

console.log(inverter({ a: '1', b: '2', c: '3' }))