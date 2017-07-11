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
    var all = /(WUB)+/gi;
    song = song.replace(all, ' ').trim();

    return song;
}

function order(words) {
    var arr = words.split(/\s/);
    arr.sort(function(a, b) { return a.match(/\d/) - b.match(/\d/) });
    return arr.join(' ');
}

function duplicateEncode(word) {
    return word.replace(/[a-z]/gi, '(')
}

function createPhoneNumber(arr) {
    var str = '';
    var nArr = [];
    nArr.push('(');
    nArr.push(arr[0].toString());
    nArr.push(arr[1].toString());
    nArr.push(arr[2].toString());
    nArr.push(')');
    nArr.push(' ');
    nArr.push(arr[3].toString() + arr[4].toString() + arr[5].toString());
    nArr.push('-');
    nArr.push(arr[6].toString() + arr[7].toString() + arr[8].toString() + arr[9].toString());

    return nArr.join('');
}

function friend(friends) {
    var arr = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
            arr.push(friends[i]);
        }
    }

    return arr;
}
var t;

function persistence(num) {


    t += 1;

    var arr = num.toString().split('');
    if (arr.length == 1) {
        return 0;
    }

    product = arr.reduce(function(x, y) {
        return parseInt(x) * parseInt(y);
    }); // 25
    if (product > 9) {
        return persistence(product)
    } else {
        return t;
    }

}

persistence(999);