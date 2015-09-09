(function () {
    // assuming we have 'clear' arrays, without manually added enumerable properties
    var array = [6, 8, 10, 7, 2, 1, 9, 3, 5, 4];

    var task1 = {};

    var task2 = {
        // assuming that implementations we use will iterate "for .. in" loop elements in ascending order.
        // If not - use search2
        search1: function (arr, cond) {
            for (var i in arr) {
                var elem = arr[i];
                if (cond(elem)) {
                    return elem;
                }
            }
            return null; // assuming array has no null values
        },
        search2: function (arr, cond) {
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                if ((i in arr) && cond(arr[i])) {
                    return arr[i];
                }
            }
            return null; // assuming array has no null values
        }
    };

    var condition = function (x) {
        return x % 5 == 0;
    };
    var value1 = task2.search1(array, condition);
    var value2 = task2.search2(array, condition);
    console.log("------------------- #2 --------------------");
    console.log("array: [" + array + "]");
    console.log("condition: " + condition);
    console.log("var value1 = task2.search1(array, condition);");
    console.log("var value2 = task2.search2(array, condition);");
    console.log("value1: " + value1);
    console.log("value2: " + value2);
    console.log("-------------------------------------------");

    var task3 = {
        filter: function (arr, callbck) {
            var fArray = [];
            for (var i in arr) {
                var elem = arr[i];
                if (callbck(elem)) {
                    fArray.push(elem);
                }
            }
            return fArray;
        }
    };

    var callback = function (x) {
        return x % 3 == 0;
    };
    var filteredArray = task3.filter(array, callback);
    console.log("------------------- #3 --------------------");
    console.log("array: [" + array + "]");
    console.log("callback: " + callback);
    console.log("var filteredArray = task3.filter(array, callback);");
    console.log("filteredArray: [" + filteredArray + "]");
    console.log("-------------------------------------------");

    var task4 = {
        map: function (arr, func) {
            var fArray = [];
            for (var i in arr) {
                fArray[i] = func(arr[i]);
            }
            return fArray;
        }
    };

    var someFunction = function (x) {
        return x * x;
    };
    var newArray = task4.map(array, someFunction);
    console.log("------------------- #4 --------------------");
    console.log("array: [" + array + "]");
    console.log("someFunction: " + someFunction);
    console.log("var newArray = task4.map(array, someFunction);");
    console.log("newArray: [" + newArray + "]");
    console.log("-------------------------------------------");

    var task5 = {
        averageOfEven: function (arr) {
            var even = function (x) {
                return x % 2 == 0;
            };
            // assuming we operate only with 'dense' arrays
            var avg = function (arr) {
                var sum = 0;
                for (var i in arr) {
                    sum += arr[i];
                }
                return sum / arr.length;
            };

            return avg(task3.filter(arr, even));
        }
    };

    var average = task5.averageOfEven(array);
    console.log("------------------- #5 --------------------");
    console.log("array: [" + array + "]");
    console.log("var average = task5.averageOfEven(array);");
    console.log("average: " + average);
    console.log("-------------------------------------------");

    // task 6, v.1
    var task61 = (function () {
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

        Robot.prototype._moveCoordinate = function (coord) {
            this._coordinates[coord] = Math.max(this._coordinates[coord] + Robot.directions[this._currentDirection][coord], 0);
        };

        Robot.prototype.move = function () {
            this._moveCoordinate("x");
            this._moveCoordinate("y");
        };
        Robot.prototype.left = function () {
            var currentDirectionIndex = Robot.orderedDirections.indexOf(this._currentDirection);
            this._currentDirection = Robot.orderedDirections[(currentDirectionIndex - 1) % 4];
        };
        Robot.prototype.right = function () {
            var currentDirectionIndex = Robot.orderedDirections.indexOf(this._currentDirection);
            this._currentDirection = Robot.orderedDirections[(currentDirectionIndex + 1) % 4];
        };
        Robot.prototype.report = function () {
            console.log([this._coordinates.x, this._coordinates.y, this._currentDirection].join())
        };
        return {Robot: Robot};
    })();

    console.log("------------------- #6.1 --------------------");
    var robot = new task61.Robot();
    robot.move();
    robot.move();
    robot.move();
    robot.right();
    robot.move();
    robot.move();
    robot.report(); // should be "2,3,EAST"
    console.log("-------------------------------------------");


    var task62 = (function () {
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

        return {Robot: Robot};

    })();
    console.log("------------------- #6.2 --------------------");
    var robot2 = task62.Robot();
    robot2.move();
    robot2.move();
    robot2.move();
    robot2.right();
    robot2.move();
    robot2.move();
    robot2.report(); // 2,3,EAST
    console.log("-------------------------------------------");


})();