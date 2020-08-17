var pos = 0;
var dx = 1;

function faster() {
    var el = document.getElementById('innerbox');
    var t = setInterval(move, 5);

    function move() {
        pos += dx;
        el.style.left = pos + 'px';
        el.style.top = pos + 'px';
        if (pos >= 250 || pos <= 0) {
            dx *= -1;
        }
    }
}