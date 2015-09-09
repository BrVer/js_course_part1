var task2_2 = {
    search: function (arr, cond) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            if ((i in arr) && cond(arr[i])) {
                return arr[i];
            }
        }
        return null; // assuming array has no null values
    },
    test: function(array, condition) {
        var value = this.search(array, condition);
        console.log("------------------ #2.v2 ------------------");
        console.log("array: [" + array + "]");
        console.log("condition: " + condition);
        console.log("var value = this.search(array, condition);");
        console.log("value: " + value);
        console.log("-------------------------------------------");
    }
};

