function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            arr = swap(arr, i, lowest);
        }
    }
    return arr;
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

    // [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; //ES6 way
    return arr;
}
console.log(selectionSort([5, 3, 4, 1, 2]));