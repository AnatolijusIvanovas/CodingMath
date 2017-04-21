window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;
	var particles = [];
	for (var i = 0; i < 500; i++) {
	    var p = particle.create(Math.random() * width, height, Math.random() * 8 + 5, -Math.PI / 2 + (Math.random() * .4 - .2), 0.1);
	    p.color = "#"+((1<<24)*Math.random()|0).toString(16);
	    p.radius = Math.random() * 5 + 5;
	    particles.push(p);
	}
	update();
    function update() {
        context.clearRect(0, 0, width, height);
		for (var i = 0; i < particles.length; i += 1) {
		    var p = particles[i];
		    p.update();
		    context.beginPath();
		    context.fillStyle = p.color;
		    context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
		    context.fill();
		}
		regen();
		requestAnimationFrame(update);
	}
	function regen() {
	    for (var i = 0; i < particles.length; i += 1) {
	        var p = particles[i];
	        if (p.position.getX() - p.radius > width ||
                p.position.getX() + p.radius < 0 ||
	            p.position.getY() - p.radius > height ||
	            p.position.getY() + p.radius < 0)
	        {
	            p.position.setX(Math.random() * width);
	            p.position.setY(height);
	            p.color = "#"+((1<<24)*Math.random()|0).toString(16);
	            p.radius = Math.random() * 5 + 5;
	            p.velocity.setLength(Math.random() * 8 + 5);
	            p.velocity.setAngle(-Math.PI / 2 + (Math.random() * .4 - .2));
	        }
	    }
	}
};