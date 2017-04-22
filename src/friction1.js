window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    var p = particle.create(width / 2, height / 2, 10, Math.random() * Math.PI * 2, 0),
        friction = vector.create(0.15, 0);
    p.color = '#123456';
    p.radius = 10;
    update();
    function update() {
        context.clearRect(0, 0, width, height);
        friction.setAngle(p.velocity.getAngle());
        if (p.velocity.getLength() > friction.getLength()) {
            p.velocity.subtractFrom(friction);
        } else {
            p.velocity.setLength(0);
        }
        p.update();
        context.beginPath();
        context.fillStyle = p.color;
        context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
        context.fill();
        requestAnimationFrame(update);
    }
};