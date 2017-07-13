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


function persistence(num) {

    var t = 0;


    if (num < 10) {
        return 0;
    }


    while (num > 9) {
        var arr = num.toString().split('');
        num = arr.reduce(function(x, y) {
            return parseInt(x) * parseInt(y);
        });
        t++
    }

    return t;
}

function big(a, b) {
    return a - b;
}


function sumTwoSmallestNumbers(numbers) {
    var arr = numbers.sort(big);
    return arr[0] + arr[1];
};


function likes(names) {
    let len = names.length;
    switch (len) {
        case 0:
            return 'no one likes this';
        case 1:
            return names[0] + ' likes this';
        case 2:
            return names[0] + ' and ' + names[1] + ' like this';
        case 3:
            return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
        default:

            return names[0] + ', ' + names[1] + ' and ' + (len - 2) + ' others like this';

    }
}

function isPrime(number) {
    //判断输入是否为number类型，是否为整数
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        return false;
    };
    //小于2都不是素数
    if (number < 2) { return false };
    //2是素数，被2整除的都不是素数
    if (number === 2) {
        return true
    } else if (number % 2 === 0) {
        return false;
    };
    //依次判断是否能被奇数整除，最大循环为数值的开方
    var squareRoot = Math.sqrt(number);
    for (var i = 3; i <= squareRoot; i += 2) {
        if (number % i === 0) {
            return false;
        };
    }
    return true;
}


var palindromeChainLength = function(n) {
    var t = 0;
    if (n < 10) {
        return 0;
    }

    var num = n.toString();
    var arr = num.split('');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    if (arr.toString() == arr.reverse().toString()) {
        console.log(arr);
        return t;
    }
    while (arr.toString() !== arr.reverse().toString()) {
        arr = parseInt(arr.join('')) + parseInt(arr.reverse().join(''));
        arr = arr.toString().split('').map(Number);
        console.log(arr)
        t++;
    }
    return t;
};
palindromeChainLength(87);

function humanReadable(seconds) {
    function two(num) {
        if (num < 10) {
            return '0' + num.toString();
        } else {
            return num.toString();
        }
    }
    if (seconds < 60) {
        return '00:00:' + two(seconds);
    } else if (seconds >= 60 & seconds < 3600) {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        return '00:' + two(min) + ':' + two(sec);
    } else if (seconds >= 3600) {
        let min = Math.floor(seconds / 60) % 60;
        let sec = seconds % 60;
        let hours = Math.floor(Math.floor(seconds / 60) / 60);
        return two(hours) + ':' + two(min) + ':' + two(sec);
    }
}


function solution(digits) {
    var arr = digits.toString().split('');
    arr = arr.map(Number);
    var str = [];

    for (let i = 0; i < arr.length - 4; i++) {
        let narr = []
        narr.push(arr[i], arr[i + 1], arr[i + 2], arr[i + 3], arr[i + 4]);
        str.push(parseInt(narr.join('')));
    }
    console.log(arr);
    return Math.max.apply(null, str);
}