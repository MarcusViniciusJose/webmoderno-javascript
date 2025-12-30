function palavras(palavra1, palavra2){

    const s1 = palavra1.toLowerCase()
    const s2 = palavra2.toLowerCase()

    const set1 = new Set(s1)
    const set2 = new Set(s2)

    for(let char of set1){
        if(!set2.has(char)){
            return false
        }
    }

    for(let char of set2){
        if(!set1.has(char)){
            return false
        }
    }

    return true
}

console.log(palavras("abc", "CBA")); 
console.log(palavras("abc", "abcd"));