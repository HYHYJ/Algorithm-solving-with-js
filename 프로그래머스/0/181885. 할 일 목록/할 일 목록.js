function solution(todo_list, finished) {
    return todo_list.filter((i, idx)=>{
        if(finished[idx] === false){
            return i
        }
    })
    
}