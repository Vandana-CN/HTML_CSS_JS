function Boomerang(arr) {

    let count = 0;

    for(let i = 2; i<arr.length; i++){

        if(arr[i] == arr[i-2] && arr[i]!==arr[i-1]){

            count++;

        }

    }

    return count;

}



console.log(Boomerang([9, 5, 9, 5, 1, 1, 1]));

console.log(Boomerang([5, 6, 6, 7, 6, 3, 9]));

console.log(Boomerang([4, 4, 4, 9, 9, 9, 9]));