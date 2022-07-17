var newraw = document.getElementById('addraw'),
    firstone = document.getElementById('firstone'),
    tbody = document.getElementById('tbody'),
    table = document.getElementById('table');

table.addEventListener('click', function func(event) {
    var target = event.target;

    if (target === newraw) {

        var firstsraw = document.createElement('tr');

        for (var i = 0; i < 3; i++) {
            var td1 = document.createElement('td');
            firstsraw.appendChild(td1);
        };

        tbody.insertBefore(firstsraw, firstone);
    };


    if (target.tagName === 'TD' && target.id !== 'addraw') {
        var input = document.createElement('input');
        input.value = target.innerHTML;
        target.innerHTML = '';
        target.appendChild(input);
        input.focus();


        var td = target;

        input.onblur = function blur() {
            td.innerHTML = input.value;
            input.remove();
        };

        input.addEventListener("keypress", function (e) {
            if (e.keyCode === 13) {
                input.blur();
            }
        });

    }

    target.removeEventListener('click', func);

})

