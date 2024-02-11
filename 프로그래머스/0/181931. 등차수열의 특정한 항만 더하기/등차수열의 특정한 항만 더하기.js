function solution(a, d, included) {
    var answer = [];
    var value = [];
    var result = 0;
    
    for(let i = 0; i <= included.length; i++){
        answer.push(a+d*i)    
    }
    for(i = 0; i< included.length; i++) {
        if(included[i]) {
        value.push(i);
    }        
  }
    value.map((i)=>{
        result += answer[i]
    })
  return result
}