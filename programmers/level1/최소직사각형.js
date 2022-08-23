
// sizes: [number, number][]
// return: number
function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    sizes.forEach(s => {
        maxW = Math.max(maxW, Math.min(...s));
        maxH = Math.max(maxH, Math.max(...s));
    })
    
    return maxW * maxH;
}

console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));
