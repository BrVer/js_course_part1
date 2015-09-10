// assuming we have 'clear' arrays, without manually added enumerable properties
var array = [6, 8, 10, 7, 2, 1, 9, 3, 5, 4];

task1.test(array.slice());
task2_1.test(array, function (x) {
    return x % 5 == 0;
});
task2_2.test(array, function (x) {
    return x % 5 == 0;
});
task3.test(array, function (x) {
    return x % 3 == 0;
});
task4.test(array, function (x) {
    return x * x;
});
task5.test(array);

test_robot_func = function(robot){
    robot.move();
    robot.move();
    robot.move();
    robot.right();
    robot.move();
    robot.move();
    robot.report(); // should be "2,3,EAST"
};
task6_1.test(test_robot_func);
task6_2.test(test_robot_func);
