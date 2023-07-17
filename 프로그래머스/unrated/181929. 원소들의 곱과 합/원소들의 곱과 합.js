function solution(num_list) {
    const num = num_list.reduce((acc, item)=>{
      return  acc * item
    },1)
    const add = num_list.reduce((acc, item)=>{
      return  acc + item
    },0)
    let result = (num < add**2) ? 1 : 0;
    return result;
}