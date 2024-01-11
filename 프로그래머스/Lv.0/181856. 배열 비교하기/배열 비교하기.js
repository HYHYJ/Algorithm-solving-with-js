function solution(arr1, arr2) {
    var answer = 0;
    
    let arr1All =  arr1.reduce((acc, i)=>acc+ i)
    let arr2All =  arr2.reduce((acc, i)=>acc+ i)
    
    if(arr1.length > arr2.length){
        return  1
    }else if(arr1.length < arr2.length){
        return -1
    }else if(arr1.length === arr2.length){
        if(arr1All > arr2All){
            return 1
        } else if(arr1All<arr2All){
            return -1
        } else if(arr1All === arr2All) {
            return 0
        }
    }

}