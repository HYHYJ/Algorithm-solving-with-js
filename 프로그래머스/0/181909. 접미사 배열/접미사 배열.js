function solution(str) {

    return[...str].reduce((acc, i, idx)=>{
        const add = str.slice(idx)
        return [...acc, add]
    },[]).sort()
    }

