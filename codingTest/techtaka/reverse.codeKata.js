// reverse 함수에 정수인 숫자를 인자로 받습니다.
// 그 숫자를 뒤집어서 return해주세요.

const reverse = (x) => {
	return (
  	parseFloat(
    	x
      	.toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(x)
  )
}

reverse(-12358);