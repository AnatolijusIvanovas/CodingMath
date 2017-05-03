window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;
	var circle = {
	        x: width / 2,
	        y: height / 2,
	        radius: 50 + Math.random() * 100
	    };
    document.body.addEventListener("mousemove", function(event) {
        if (utils.circlePointCollision(event.clientX, event.clientY, circle)) {
            context.fillStyle = "#123456";
        } else {
            context.fillStyle = "#999";
        }
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
        context.fill();
    })
}