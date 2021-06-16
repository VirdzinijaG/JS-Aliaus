// Daugybos lentele 

var nuo = 1;
var iki = 3; 

// turi atspausdinti 1*1=1 1*2=2 1*3=3   2*1=2 2*2=4 2*3=6   3*1=3 3*2=6 3*3=9 rezultatus

var i = nuo;

while (i <= iki) {
    var j = nuo;
    while (j <= iki) {
        console.log (i * j);
        j = j + 1;
    }
    i = i + 1;
}

// dar kitas variantas

var a = 1;

do {
    var b = 1;
    do {
        console.log(a, b, a*b);
        b+= 1;
    } while (b <= 3);
    a+= 1;
} while (a <= 3);
