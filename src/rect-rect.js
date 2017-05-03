window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;
	var rect0 = {
	        x: 500,
	        y: 250,
	        width: -100,
	        height: 200
	    },
	    rect1 = {
	        x: 0,
	        y: 0,
	        width: 200,
	        height: -100
	    };
    document.body.addEventListener("mousemove", function(event) {
        rect1.x = event.clientX - rect1.width / 2,
        rect1.y = event.clientY - rect1.height / 2,
        context.clearRect(0, 0, width, height);
        if (utils.rectIntersect(rect0, rect1)) {
            context.fillStyle = "#123456";
        } else {
            context.fillStyle = "#999";
        }
        context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
        context.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
    })
}