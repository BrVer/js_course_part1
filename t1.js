// quicksort, modifies initial array, so need to be called with a copy of original array!
var task1 = (function() {

    function swap(array, indexA, indexB) {
        var temp = array[indexA];
        array[indexA] = array[indexB];
        array[indexB] = temp;
    }

    function partition(array, pivot, left, right) {

        var storeIndex = left,
            pivotValue = array[pivot];

        swap(array, pivot, right);
        for(var v = left; v < right; v++) {
            if(array[v] < pivotValue) {
                swap(array, v, storeIndex);
                storeIndex++;
            }
        }
        swap(array, right, storeIndex);
        return storeIndex;
    }

    function sort(array, left, right) {

        var pivot = null;

        if(typeof left !== 'number') {
            left = 0;
        }
        if(typeof right !== 'number') {
            right = array.length - 1;
        }
        if(left < right) {
            pivot     = left + Math.ceil((right - left) / 2);
            var newPivot  = partition(array, pivot, left, right);
            sort(array, left, newPivot - 1);
            sort(array, newPivot + 1, right);
        }
    }

    return {
        sort: sort,
        test: function(array) {
            console.log("------------------- #1 --------------------");
            console.log("array: [" + array + "]");
            this.sort(array);
            console.log("this.sort(array);");
            console.log("array: [" + array + "]");
            console.log("-------------------------------------------");
        }
    };

})();