"use strict"

// function Puodukas (spalva, maxTuris) { // konstruktorius puodukas
//     this.spalva = spalva;
//     this.kiekis = 0;
//     this.maxTuris = maxTuris;
// }



// Klases

class Puodukas {
    constructor(spalva, maxTuris) {  // klaseje turi buti constructor ir joje viskas rasosi taip pat kaip function 
        this.spalva = spalva;
        this.kiekis = 0;
        this.maxTuris = maxTuris;
    }
    ipilk(kiek) { // funkcija rasoma pacioje klaseje, nereikia naudoto prototype ir function
        if (kiek <= 0) {
            console.log("Ar zinai, ka darai?");
            return;
        }
        this.kiekis += kiek;
        if (this.kiekis > this.maxTuris) {
            console.log("Ant kelniu issipyle " + (this.kiekis - this.maxTuris));
            this.kiekis = this.maxTuris;
        } else {
            console.log("Sekmingai ipylem " + kiek + ". Liko laisvos vietos: " + (this.maxTuris - this.kiekis));
        }
    }
    isgerk (kiek) {
        if (kiek < 0) {
            console.log("Nespjaudyk i puoduka");
            return;
        }
        if (kiek === 0) {
            console.log("Tai gersim, ar akis vartysim?");
            return;
        }
        this.kiekis -= kiek;
        if (this.kiekis < 0) {
            console.log("Isgerem tik " + (this.kiekis + kiek));
            this.kiekis = 0;
        } else {
            console.log("Sekmingai isgerem " + kiek + ". Liko gerimo: " + this.kiekis);
        }
    }
}


class Termosas extends Puodukas { // extends yra paveldejimas // termosas paveldetas nuo puodukas
    constructor (spalva, maxTuris) { 
        super(spalva, maxTuris); // super paveldi tevines reiksmes, kurios naudojamos kitoje naujoje klaseje
        this.temp = 20; // pridedama nauja savybe, kurios nera tevineje klaseje

} 
pasildyk(kiek) { // pridedama dar kita funkcija, kuri bus naudojama naujoje klaseje, kurios nera tevineje klaseje
    this.temp += kiek;
}
atvesink(kiek) {
    this.temp -= kiek;
}
// vaikineje klaseje galima koreguoti funkcijas, kurios yra tevyneje klaseje
ipilk(kiek) { 
    console.log("Pilam i termosa");
    super.ipilk(kiek); // naudojama tevines klases funkcija tik pridedama dar viena papildoma salyga
    this.temp -= 5 // papildoma salyga
}
}


let p1 = new Puodukas ("Baltas", 150);
let t = new Termosas ("Zalias", 1000)

t.ipilk(550)
t.isgerk(60)
console.log(t);

p1.ipilk(50)
console.log(p1);

