window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		sun = particle.create(width / 2, height / 2, 0, 0);
		planet1 = particle.create(width / 2 + 100, height / 2, 15, -Math.PI / 2);
		planet2 = particle.create(width / 2 + 200, height / 2, 10, -Math.PI / 2);
		planet3 = particle.create(width / 2 + 300, height / 2, 7.5, -Math.PI / 2);
	sun.mass = 20000;
	update();
	function update() {
		context.clearRect(0, 0, width, height);
		planet1.gravitateTo(sun);
		planet1.update();
		planet2.gravitateTo(sun);
		planet2.update();
		planet3.gravitateTo(sun);
        planet3.update();
		context.beginPath();
		context.fillStyle = "#ffff00";
		context.arc(sun.position.getX(), sun.position.getY(), 20, 0, Math.PI * 2, false);
		context.fill();
		context.beginPath();
		context.fillStyle = "#123456";
		context.arc(planet1.position.getX(), planet1.position.getY(), 5, 0, Math.PI * 2, false);
		context.fill();
        context.beginPath();
        context.fillStyle = "#123456";
        context.arc(planet2.position.getX(), planet2.position.getY(), 5, 0, Math.PI * 2, false);
        context.fill();
        context.beginPath();
        context.fillStyle = "#123456";
        context.arc(planet3.position.getX(), planet3.position.getY(), 5, 0, Math.PI * 2, false);
        context.fill();
		requestAnimationFrame(update);
	}
};