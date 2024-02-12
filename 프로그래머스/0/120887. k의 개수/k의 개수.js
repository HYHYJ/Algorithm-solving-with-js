// function solution(i, j, k) {
//     let a ='';
//     for(i; i<=j; i++){a += i}
// 	return a.split(k).length-1
// }
function solution(i, j, k) {
    return Array(j-i+1).fill(i).map((v,i)=>v+i).join('').split(k).length-1;
}


// function solution(i, j, k) {
//     let result = 0;
//     for(let v = i; v <= j ; v++){
//         if(String(v).includes(k)){
//             result++
//         }
//     }
//     return result
// }