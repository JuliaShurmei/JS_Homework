function getName(arr) {
    var res = arr.map(function (item, i, arr) {
        var mass= {'name': item};
        return mass;
    });
    console.log(res);
}

getName(['Вася', 'Петя'])