function changebackground() {
    document.getElementById("asd").style.backgroundColor = "yellow";
}
function myMove() {
    var elem = document.getElementById("animete");
    var pos = 0;
    var id = setInterval (frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval (id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}