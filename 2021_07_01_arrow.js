"use strict"

// arrow funkcijos
// kitoks funkcijos uzsrasymas
// vietoj zodzio function naudojama =>


const suma = (a, b) => {
    return a + b;
}

console.log(suma(2, 3));


// kai yra trumpa funkcija, galima rasyti be {} ir return 
const suma1  = (a, b) => a + b;

console.log(suma1(5, 3));

// suma ir suma1 funkcijos yra identiskos, atlieka toki pati veiksma 

const kvadratas = (a) => a * a;

console.log(kvadratas(5));

// jeigu yra vienas parametras galima nerasyti ()
const kvadratas1 = a => a * a;
console.log(kvadratas1(3));



// jeigu funkcija parametru neturi, privaloma rasyti tuscius ()
const atsitiktinis = () => {
    let sk = Math.random() * 10 + 1; // atsitiktinis skaicius nuo 1 iki 10
    sk = Math.floor(sk);
    return sk;
}

console.log(atsitiktinis());


const labas = (vardas, pavarde) => {
    console.log("Labas, ");
    console.log(vardas);
    console.log(pavarde);
    console.log("Kaip tau sekasi?");
}

labas("Jonas", "Jonaitis") // funkcijos labas iskvietimas su nurodytais parametrais 


let m = [3, 6, 2, 7, 1, -5, 2];

console.log(m);

m.sort((e1, e2) => {
    console.log("Lyginam", e1, e2);
    return e1 - e2; // rusiuojama didejimo tvarka // nurodzius e2 - e1 rusiuos mazejimo tvarka
});
console.log(m);

// sort - funkcija, kuri surusiuoja


// rusiuojama pagal eilutes ilgi mazejimo tvarka
let m1 = ["sjdjsd", "sjjd", "hs", "sdjdje", "sdjkjdjs"]

console.log(m1);

m1.sort((e1, e2) => {
    console.log("Lyginam", e1, e2);
    return e2.length - e1.length // e2.lenght ir e1.lenght ziurimas kiekvieno zodzio ilgis(kiek elementu yra) e2 - e1 padaro mazejimo tvarka
});

console.log(m1);


let s = "sjdsjdjjdjeekwldlklcldlcv;e''ekldckkcnke"
console.log(s.length); // atspausdina kiek elementu yra 


// ne daznas uzrasymas
// pasleptas funkcionalumas
(() => {
    console.log("Labas pasauli");
})();
// sukurta funkcija ir ji iskart iskvieciama