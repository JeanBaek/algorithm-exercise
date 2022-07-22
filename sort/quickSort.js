const quickSort = arr => {
	if (arr.length < 2) {
  	return arr;
  }
  const pivot = [arr[0]];
  const left = [];
  const right = [];
  
  for (let i=1; i < arr.length; i++) {
  	if (arr[i] < pivot) {
    	left.push(arr[i]);
    } else if (arr[i] > pivot) {
    	right.push(arr[i]);
    } else {
    	pivot.push(arr[i]);
    }
  }
  console.log({left, right});
  return quickSort(left).concat(pivot, quickSort(right));
};

quickSort([5, 3, 7, 1, 9]);