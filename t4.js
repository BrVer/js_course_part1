var task4 = {
    map: function (arr, func) {
        var fArray = [];
        for (var i in arr) {
            fArray[i] = func(arr[i]);
        }
        return fArray;
    },
    test: function(array, someFunction) {
        var newArray = this.map(array, someFunction);
        console.log("------------------- #4 --------------------");
        console.log("array: [" + array + "]");
        console.log("someFunction: " + someFunction);
        console.log("var newArray = this.map(array, someFunction);");
        console.log("newArray: [" + newArray + "]");
        console.log("-------------------------------------------");
    }
};