window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;
	var sun = particlex.create(width / 2, height / 2, 0, 0),
		planet = particlex.create(width / 2 + 200, height / 2, 10, -Math.PI / 2),
		satelite = particlex.create(width / 2 + 250, height / 2, 0.5, -Math.PI / 2);
	sun.mass = 20000;
	planet.mass = 5000;
	update();
	function update() {
		context.clearRect(0, 0, width, height);
		planet.gravitateTo(sun);
		planet.update();
		satelite.gravitateTo(sun);
		satelite.gravitateTo(planet);
		satelite.update();
		context.beginPath();
		context.fillStyle = "#ffff00";
		context.arc(sun.x, sun.y, 25, 0, Math.PI * 2, false);
		context.fill();
		context.beginPath();
		context.fillStyle = "#123456";
		context.arc(planet.x, planet.y, 5, 0, Math.PI * 2, false);
		context.fill();
		context.beginPath();
        context.fillStyle = "#123456";
        context.arc(satelite.x, satelite.y, 5, 0, Math.PI * 2, false);
        context.fill();
		requestAnimationFrame(update);
	}
};