function solution(li) {
    let answer = 0;
    li.map((i)=>{
        while(i !== 1){
           i%2? i = (i -1)/2 : i /= 2  
           answer++;
        }   
    })
    return answer;
}