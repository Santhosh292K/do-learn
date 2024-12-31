function moveobject() {
    var object = document.getElementById('mock');
    var position = 0;
    var speed = 2;
    function move() {
        position += speed;
        object.style.left = position + 'px';

        if (position<=1400){
            requestAnimationFrame(move);
        }
        else{
            moveobject();
        }

    }
    move();
    
}
