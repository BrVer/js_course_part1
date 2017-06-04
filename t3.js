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
    },
    test: function(array, callback) {
        var filteredArray = this.filter(array, callback);
        console.log("------------------- #3 --------------------");
        console.log("array: [" + array + "]");
        console.log("callback: " + callback);
        console.log("var filteredArray = this.filter(array, callback);");
        console.log("filteredArray: [" + filteredArray + "]");
        console.log("-------------------------------------------");
    }
};