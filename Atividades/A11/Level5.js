function init(robot) {
    console.log("Robot starting")
}

function loop(robot) {
    robot.action = { type: 'move', amount: 40 };
    if ((360 <= robot.info().x && robot.info().x <= 500) || (540 <= robot.info().x && robot.info().x <= 700)) {
        robot.action = { type: 'jump', amount: 10 };
    }
}