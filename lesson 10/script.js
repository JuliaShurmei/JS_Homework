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















function func() {
    console.log( 'Привет' );
  }
  
  setTimeout(func, 5000);





  Написать функцию-интервал, выводящую в консоль целые числа от 1 до 5 включительно каждые 2 секунды. setTimeout не
  использовать.


  var timerId = setInterval(function() {
    for (i=1; i<6; i++)
    console.log(i);
  }, 2000);
  


  function showNumbers(beg, end) {
    
     var timerId = setInterval(function() {
      console.log(beg);
      if (beg == end) {
        clearInterval(timerId);
      }
      beg++;
    }, 2000);
  }


  showNumbers(1, 5);
