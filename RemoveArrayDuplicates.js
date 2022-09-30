function removeDuplicates(arr1, arr2){

 
    let arr = [...arr1, ...arr2];

    let newArr = [...new Set(arr)];

    console.log(newArr);
}

const arr1 = [4, 5, 3];
const arr2 = [1, 3, 4]


removeDuplicates(arr1, arr2)