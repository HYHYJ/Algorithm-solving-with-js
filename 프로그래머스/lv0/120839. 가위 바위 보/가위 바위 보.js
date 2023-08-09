function solution(rsp) {
    var answer = '';
    
    for(item of rsp)
    if(item === '2'){
        answer+= '0'
    }else if(item === '5'){
        answer+= '2'
    }else if(item === '0'){
        answer+= '5'
    }

    return answer;
    
}