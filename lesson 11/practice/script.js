var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);


var button = document.querySelector('button');
button.addEventListener('click', function () {
    var nodes = firstPar.children;
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].classList.add('color');
    }
});


var nodes2 = secondPar.children;
for (var i = 0; i < nodes2.length; i++) {
    nodes2[i].onclick = function (e) {
        e.preventDefault();
        var href = e.target.getAttribute('href');
        var text = this.innerHTML;
        if (localStorage.getItem(text) === null) {
            localStorage.setItem(text, JSON.stringify({path: (href)}));
            this.setAttribute('href', '#');
            alert('Ссылка была сохранена');
        } else if (localStorage.getItem(text) != null) {
            alert((localStorage.getItem(text)))
        }
        ;
    }
}
window.addEventListener('unload', function (e) {
    localStorage.clear()
})





