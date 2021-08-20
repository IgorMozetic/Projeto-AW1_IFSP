function init(robot) {
	console.log("Robot starting")
}

function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins % 2 == 1) {
		robot.action = {type: 'move', amount: -40};
	}
}