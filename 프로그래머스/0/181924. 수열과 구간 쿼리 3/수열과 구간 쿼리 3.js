function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++){
        let prev = arr[(queries[i][0])];        
        arr[(queries[i][0])] = arr[(queries[i][1])];
        arr[(queries[i][1])] = prev;
    }
    
    return arr;
}