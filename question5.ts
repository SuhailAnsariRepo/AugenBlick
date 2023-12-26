function sumOfAll(x) {
    var splits = x.split(',');
    var sum = 0;
    for (var i = 0; i < splits.length; i++) {
        var c = splits[i].split('');
        sum += Sum(c);
    }
    return sum;
}

function Sum(chars) {
    var currentValue = 0;
    var Ascii = 0;
    var rv = 0;
    var resinEach = [];
    for (var i = 0; i < chars.length; i++) {
        Ascii = chars[i].charCodeAt(0);
        currentValue += Ascii;
        currentValue *= 17;
        currentValue %= 256;
    }
    return currentValue;
}

var s = "rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7";
var n = sumOfAll(s);
console.log(n);
//1320
