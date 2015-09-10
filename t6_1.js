// task 6, v.1
var task6_1 = (function () {
    function Robot() {
        this._coordinates = {x: 0, y: 0};
        this._currentDirection = "NORTH";
    }

    Robot.directions = {
        NORTH: {x: 0, y: 1},
        EAST: {x: 1, y: 0},
        SOUTH: {x: 0, y: -1},
        WEST: {x: -1, y: 0}
    };

    Robot.orderedDirections = ["NORTH", "EAST", "SOUTH", "WEST"];

    // alternative way is to consider directions as [0, 0.5, 1 and 1.5] pi
    // and add sinuses/cosinuses of direction on moving
    Robot.prototype._moveCoordinate = function (coord) {
        this._coordinates[coord] = Math.max(this._coordinates[coord] + Robot.directions[this._currentDirection][coord], 0);
    };

    Robot.prototype.move = function () {
        this._moveCoordinate("x");
        this._moveCoordinate("y");
    };
    Robot.prototype.left = function () {
        var currentDirectionIndex = Robot.orderedDirections.indexOf(this._currentDirection);
        this._currentDirection = Robot.orderedDirections[(4 + currentDirectionIndex - 1) % 4]; // in the case index was 0
    };
    Robot.prototype.right = function () {
        var currentDirectionIndex = Robot.orderedDirections.indexOf(this._currentDirection);
        this._currentDirection = Robot.orderedDirections[(currentDirectionIndex + 1) % 4];
    };
    Robot.prototype.report = function () {
        console.log([this._coordinates.x, this._coordinates.y, this._currentDirection].join())
    };

    var test = function(handler) {
        console.log("------------------ #6.v1 ------------------");
        var robot = new this.Robot();
        handler(robot);
        console.log("-------------------------------------------");
    };

    return {
        Robot: Robot,
        test: test
    };
})();

