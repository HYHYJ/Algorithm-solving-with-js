function solution(arr) {
    let answerFalse = 0;
    arr.map((i, idx) => {
        i.map((j, jidx) => {
            if (arr[idx][jidx] !== arr[jidx][idx] ) {
                answerFalse = 1;
            }
        });
    });
    return answerFalse? 0 : 1;
}