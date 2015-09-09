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
    },
    test: function(array) {
        var average = this.averageOfEven(array);
        console.log("------------------- #5 --------------------");
        console.log("array: [" + array + "]");
        console.log("var average = this.averageOfEven(array);");
        console.log("average: " + average);
        console.log("-------------------------------------------");
    }
};