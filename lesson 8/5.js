function divideArr(arr, separator) {
    var i,
        newarr = [];
    if (separator != 0) {
        for (i = 0; i < arr.length; i += separator) {
            newarr.push(arr.slice(i, i + separator))
        }
        return newarr;
    } else {
        return arr;
    }
}

divideArr([1, 2, 3, 4], 2);