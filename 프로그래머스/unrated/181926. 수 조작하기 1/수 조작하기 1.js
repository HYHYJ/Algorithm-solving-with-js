function solution(n, control) {
    let num = n;
    for(let i = 0; i < control.length; i++ ){
        if(control[i] === "w"){
            num++
        }else if(control[i] === "s"){
            num--
        }else if(control[i] === "d"){
            num += 10 
        }else if(control[i] === "a"){
            num -= 10
        }
    }
    return num;
}