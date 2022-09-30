const func = (arr1, arr2) => {
    if (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)) {
      return true;
    } 
    else
    return false;
  };
  
  console.log(func([1, 3, 2], [0, 6]));
  console.log(func([3, 1], [4, 0]));
  console.log(func([2, 3, 4], [1, 3]));