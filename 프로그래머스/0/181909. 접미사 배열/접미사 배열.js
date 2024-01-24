function solution(str) {

    return[...str].reduce((acc, i, idx)=>{
        const add = str.slice(idx, str.length)
        return [...acc, add]
    },[]).sort()
    }

