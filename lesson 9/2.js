function returnString(time) {
    var res = time.reduce(function (prev, curr, ind, time) {
        var timer = prev + ': ' + curr;
        return timer;
    });
    alert("Текущее время: " + res);
}

returnString(['00', '13', '24']);