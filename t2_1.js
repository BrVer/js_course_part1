var task2_1 = {
    // assuming that implementations we use will iterate "for .. in" loop elements in ascending order.
    // If not - use task2_2
    search: function (arr, cond) {
        for (var i in arr) {
            var elem = arr[i];
            if (cond(elem)) {
                return elem;
            }
        }
        return null; // assuming array has no null values
    },
    test: function(array, condition) {
        var value = this.search(array, condition);
        console.log("------------------ #2.v1 ------------------");
        console.log("array: [" + array + "]");
        console.log("condition: " + condition);
        console.log("var value = this.search(array, condition);");
        console.log("value: " + value);
        console.log("-------------------------------------------");
    }
};

