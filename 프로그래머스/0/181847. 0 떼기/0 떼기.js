function solution(str) {
    arr = str.split('')
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            arr[i] = ''
        } else{
         break;
         } 
    }
   
    return arr.join('');
}