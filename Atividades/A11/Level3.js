function init(robot) {
    console.log("Robot starting")
    robot.nextJump = true;
}

function loop(robot) {
    if (robot.nextJump) {
        robot.action = { type: 'jump', amount: 10 }
        robot.nextJump = false;
    } else {
        robot.action = { type: 'move', amount: 40 };
        robot.nextJump = true;
    }
}