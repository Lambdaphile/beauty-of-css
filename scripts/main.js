var html = document.querySelector('html');

html.onclick = function () {
    var h1 = document.createElement('h1');
    h1.textContent = 'Hellooo?!';
    document.body.appendChild(h1);
}