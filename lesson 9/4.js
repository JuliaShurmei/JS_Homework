function getStatement(text) {
    var quant = ': Letters quantity is: ';
    var res = text.split(/[!?.]/);
    res.forEach(function (item, i, res) {
        var letter = item.split(/[^a-zа-яё]/gi).join('');
        if (letter.length != 0) {
            alert(item + quant + letter.length);
        }
    });
}

getStatement('Привет, студент! Студент... Как дела, студент?')
