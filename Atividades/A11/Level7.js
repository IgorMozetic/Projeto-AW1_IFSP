function init(robot) {
    console.log("Robot starting")
}

function loop(robot) {
   robot.action = { type: 'move', amount: 40 };
   if ((200 <= robot.info().x && robot.info().x <= 300)) {
        robot.action = { type: 'jump', amount: 10 };
    }
}
