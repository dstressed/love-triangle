module.exports = function getLoveTrianglesCount(arr) {
    var count = 0;
    var triangles = {};

    for (i = 0; i < arr.length; i++) {
        var one = arr[i];
        var two = arr[one - 1];
        var three = arr[two - 1];
        if (one && two && three) {
            if (one == two && two == three) continue;
            var keys = [one, two, three];
            var values = [two, three, arr[three - 1]];
            keys.sort(sort);
            values.sort(sort);
            keys = keys.join('');
            values = values.join('');
            if (keys == values)
                if (triangles[values]) continue;
                else {
                    triangles[values] = true;
                    count++;
                }
        }
    }

    return count;

    function sort(a, b) {
        return a - b;
    }
};
