function findOdd(A) {
    let t = 0;
    for (let i = 0; i < A.length; i++) {
        if ((A[i] % 2 == 1 | -1) | (A[i] == 1)) {
            t ^= A[i];
        }
    }
    return t;
}


function towerBuilder(n) {
    var arr = [];
    for (var r = 1; r <= n; r++) {

        arr.push('*');
    }

    return arr;
}

function highAndLow(arr) {
    arr = arr.split(' ');


    arr = arr.sort(big);
    return (arr[arr.length - 1] + ' ' + arr[0]);
}

function big(a, b) {
    return a - b;
}


function songDecoder(song) {
    // ...
}