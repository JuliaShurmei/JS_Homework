var x = document.getElementById('X'),
    y = document.getElementById('Y'),
    button = document.getElementById('button'),
    wrapper = document.getElementById('wrapper');


function logKey() {
    if (x.value && y.value) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

y.addEventListener('keyup', logKey);
x.addEventListener('keyup', logKey);


function Checkinput() {
    if ((x.value % 1 !== 0 || x.value < 1 || x.value > 10) || (y.value % 1 !== 0 || y.value < 1 || y.value > 10)) {
        alert('Ошибка. Введите значение от 1 до 10');
        x.value = '';
        y.value = '';
        button.disabled = true;
    } else {
        x.onchange = function change() {
            x.value = this.value;
            Checkinput();
        };
        y.onchange = function change1() {
            y.value = this.value;
            Checkinput();
        };
        var i, j, clas;
        for (i = 0; i < y.value; i++) {
            for (j = 0; j < x.value; j++) {
                clas = '';

                if (j === 0) clas = 'first ';
                else if (j === x.value) clas = 'last ';
                clas += (i % 2 === j % 2) ? 'white' : 'black';

                var field = document.createElement('div');
                field.className = clas;
                wrapper.appendChild(field);
                button.removeEventListener('click', Checkinput);

                field.addEventListener('click', function func(event) {
                    var target = event.target;
                    var blackelems = document.getElementsByClassName('black');
                    var whiteelems = document.getElementsByClassName('white');
                    if (target.className === 'black') {
                        for (let i = 0; i < blackelems.length; i++) {
                            blackelems[i].classList.toggle('white')
                            for (let j = 0; j < whiteelems.length; j++) {
                                whiteelems[j].classList.add('black');
                            }
                        }

                    } else {
                        if (target.className !== 'black') {
                            for (let i = 0; i < blackelems.length; i++) {
                                blackelems[i].classList.toggle('white');
                                for (let j = 0; j < whiteelems.length; j++) {
                                    whiteelems[j].classList.add('black');
                                }
                            }
                        }
                    }
                    target.removeEventListener('click', func);
                })


            }
        }
    }
}

button.addEventListener('click', Checkinput);
