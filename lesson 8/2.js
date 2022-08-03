function findPositive(arr) {
    var positive = arr.find(function (number) {
        return number > 0;
    });
    alert(positive);
}

findPositive([-7, -3, 0, 8]);