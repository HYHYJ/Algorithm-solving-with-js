function solution(n) {
    let s = n + '';
    s = s.split('')
    let l = s.map((item)=>{
         return +item ;
        
    })
    s = l.reduce((acc,item)=>{
         return acc + item ;
        
    }, 0)
    
    
    return s
}