// task 6, v.2
var task6_2 = (function () {
    var Robot = function () {
        var coordinates = {x: 0, y: 0};
        var currentDirection = "NORTH";

        var moveCoordinate = function (coord) {
            coordinates[coord] = Math.max(coordinates[coord] + Robot.directions[currentDirection][coord], 0);
        };

        var move = function () {
            moveCoordinate("x");
            moveCoordinate("y");
        };
        var left = function () {
            var currentDirectionIndex = Robot.orderedDirections.indexOf(currentDirection);
            currentDirection = Robot.orderedDirections[(currentDirectionIndex - 1) % 4];
        };
        var right = function () {
            var currentDirectionIndex = Robot.orderedDirections.indexOf(currentDirection);
            currentDirection = Robot.orderedDirections[(currentDirectionIndex + 1) % 4];
        };
        var report = function () {
            console.log([coordinates.x, coordinates.y, currentDirection].join())
        };
        return {
            report: report,
            move: move,
            left: left,
            right: right
        };
    };

    Robot.directions = {
        NORTH: {x: 0, y: 1},
        EAST: {x: 1, y: 0},
        SOUTH: {x: 0, y: -1},
        WEST: {x: -1, y: 0}
    };
    Robot.orderedDirections = ["NORTH", "EAST", "SOUTH", "WEST"];

    var test = function(handler) {
        console.log("------------------ #6.v2 ------------------");
        var robot = this.Robot();
        handler(robot);
        console.log("-------------------------------------------");
    };

    return {
        Robot: Robot,
        test: test
    };

})();
