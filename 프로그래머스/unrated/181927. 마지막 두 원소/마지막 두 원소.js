function solution(num) {
    let result =0;
     if(num[num.length-1] > num[num.length-2]){
         result = num[num.length-1] - num[num.length-2]
         num.push(result)
     }else if(num[num.length-1] <= num[num.length-2]) {
        num.push(num[num.length-1]*2)
     }
    return num;
}