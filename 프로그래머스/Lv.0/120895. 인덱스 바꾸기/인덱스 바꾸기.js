function solution(str, num1, num2) {
    return str.split('').map((i, index)=>{
        if(index === num1){
           return i.replace(i, str[num2])
        }else if(index === num2){
           return i.replace(i, str[num1])
        }
        return i
    }).join("")
    
}