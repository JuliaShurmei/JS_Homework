function countVowels(str) {
    var vowel_list = 'аяуюоеёэиы';
    var vcount = 0;

    for (var i = 0; i < str.length; i++) {
        var lower=str.toLowerCase();
        if (vowel_list.indexOf(lower[i]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
alert(countVowels("Хорошего дня"));