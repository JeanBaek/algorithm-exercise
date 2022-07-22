// 아직 해결하지 못한 문제! 지속적으로 시도 예정!

/* 
양수로 이루어진 m x n 그리드를 인자로 드립니다.
상단 왼쪽에서 시작하여, 하단 오른쪽까지 가는 길의 요소를 다 더했을 때,
가장 작은 합을 찾아서 return 해주세요.

한 지점에서 우측이나 아래로만 이동할 수 있습니다.

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]

Output: 7

설명: 1→3→1→1→1 의 합이 제일 작음
*/



const minPathSum = grid => {
    const lengthNum = grid.map((arr, i) => i);

    // const allPath = [(grid[0][0] + grid[0][1] + grid[0][2] + grid[1][2] + grid[2][2])];
  
  // const allPath = [(grid[0][0] + grid[1][0] + grid[2][0] + grid[2][1] + grid[2][2])];
  
  // const allPath = [(grid[0][0] + grid[0][1] + grid[1][1] + grid[1][2] + grid[2][2])];
  
  // const allPath = [(grid[0][0] + grid[0][1] + grid[1][1] + grid[2][1] + grid[2][2])];
  
  // const allPath = [(grid[0][0] + grid[1][0] + grid[1][1] + grid[2][1] + grid[2][2])];
  
  // const allPath = [grid[0][0] + grid[1][0] + grid[1][1] + grid[1][2] + grid[2][2]];
    
    // 1. 6가지 인덱스 경우의 수를 배열방식으로 추출한다.
    // for (let i=0; i< grid.length; i++) {
        // for (let j=0; i< grid.length; j++) {
    
    let i=0; 
    let j=0;
    const idxArr = [];
          idxArr.push([[i, j], [i, j+1], [i, j+2], [i+1, j+2], [i+2, j+2]]);
        idxArr.push([[i, j], [i, j+1], [i+1, j+1], [i+1, j+2], [i+2, j+2]]);
        idxArr.push([[i, j], [i, j+1], [i+1, j+1], [i+2, j+1], [i+2, j+2]]);
        idxArr.push([[i, j], [i+1, j], [i+1, j+1], [i+1, j+2], [i+2, j+2]]);
        idxArr.push([[i, j], [i+1, j], [i+1, j+1], [i+2, j+1], [i+2, j+2]]);
        idxArr.push([[i, j], [i+1, j], [i+2, j+0], [i+2, j+1], [i+2, j+2]]);
    //   }
    // }
    
    
    // 2. 1번의 인덱스로 grid.map을 돌려서 각각의 수를 배열로 추출한다.
    
    
  
    
    return Math.min(...allPath);
};
  
const grid = [
[1,3,1],
[1,5,1],
[4,2,1]
]

minPathSum(grid);

/*
00 01 02 12 22
00 01 11 12 22
00 01 11 21 22
00 10 11 12 22
00 10 11 21 22
00 10 20 21 22
*/