
function Makeslice(arr, a, b){
        return arr.slice(a  , b + 1)
}

function solution(arr, intervals) {
    const [[a1, b1], [a2, b2]] = intervals
    return Makeslice(arr, a1, b1).concat(Makeslice(arr, a2, b2))
}
