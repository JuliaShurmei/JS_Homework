function Animal(name) {
    var foodAmount = 50;
    var self = this;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 30 || amount > 100) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;

    };

    this.name = name;

    this.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');

    };

}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function () {
        animalFeed();
        console.log('Кот доволен ^_^');
        return this;
    };
    this.stroke = function () {
        console.log('Гладим кота.');
        return this;
    };
}




function DeepClone(input) {
    var clone=(Array.isArray(input))?[]:{};
    for (var key in input) {
        if (typeof (input[key]) == 'object' && input[key] != null) {
            clone[key] = DeepClone(input[key])
        } else {
            clone[key] = input[key];
        }
    }
    return clone;
}

























var barsik = new Cat('Барсик');
console.log(barsik.dailyNorm(75));
barsik.feed();
barsik.stroke().feed();
