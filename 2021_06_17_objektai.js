"use strict"

// let ir const nera hoistinami
// jie pradeda vykt nuo savo skaupo pradzios 

/*Kintamuju tipai 
undefined - kintamojo reiksme neapibrezta
number - skaiciai
string - tekstas
boolean true false - reiksmes true arba false
*/


// object kitnamojo tipas saugo ne kintamojo reiksme, o nuoroda i objekta
// objektas savybiu rinkinys
// objektas deklaruojamas tarp curly brackets {}
// objekto aprasymno sintakse nurodoma savybe: reiksme

let puodukas = { // objekto sukurimas, viduje parasomos savybes
    turis: 300,
    kiekis: 200,
    spalva: "rudas"
};


// objekto savybiu reiksmes pasiekimas nurodomas objektas ir reiksme puodukas.kiekis

puodukas.kiekis -= 50; // is kiekio 200 atims 50
console.log(puodukas.kiekis); // isves objekto puoduko kiekio savybe 150
console.log(puodukas.spalva); // isves objekto puoduko spalvos savybe, kokia spalva yra objekte (rudas)


let tasPatsPuodukas = puodukas; // jo reiksme yra let puodukas, ima objekto savybes // abu turi nuoroda i ta pati objekta
tasPatsPuodukas.spalva ="zalias" // galima keisti tiek per puodukas, tiek per tasPatasPuodukas / pakeiciama objekto spalva
tasPatsPuodukas.kiekis += 100; // prie objekto kiekio prides 100 / 150 nes pries tai 50 atimta + 100 = 250

console.log(puodukas.spalva); // ivedama zalia spalva vietoj rudos, nes pakeista reiksme
console.log(puodukas.kiekis); // kiekis 250 pradzioj buvo 200 tada atimta 50 tada prideta 100 

console.log(puodukas);

// palyginimo operatorius === lygina du kintamuosius

tasPatsPuodukas = {
    turis: 300,
    kiekis: 250,
    spalva: "rudas"
}

if (puodukas === tasPatsPuodukas) { // patikrins ar abu kintamieji rodo i ta pati puoduka / lygina dvieju kintamuju adresus
    console.log("tas pats puodukas"); // jeigu tas pats objektas
} else {
    console.log("kitas objektas");// du objektai, kai tasPatsPuodukas sukurtas objektas, nesvarbu kad tokios pacios savybes
}


console.log(puodukas.gerimas); // undifined, nes objekte nera tokios savybes

puodukas.gerimas = "kava"; // sukuriama savybe objekte ir atspausdins objekta su nauja prideta reiksme
console.log(puodukas.gerimas); // jau yra savybe gerimas ir atspausdina
console.log(puodukas); // gaunamos visos savybes su pridetu 


 delete puodukas.spalva // istrina savybes reiksme

puodukas["kiekis"] = 20; // tokia pati reiksme kaip puodukas.kiekis = 20, pakeis buvusi kieki is 250 i 20

console.log(puodukas);


let savybe = "turis";
console.log(puodukas[savybe]); // atspausdins objekto savyber turis reiksme [cia nurodytas kintamasis] kintamojo reiksme = turis

puodukas["medziaga"] = "stiklas"; // toklia pati reiksme reiksmes pridejimas objekte kaip puodukas.gerimas = "kava"
console.log(puodukas);

// objekta galima susikurti ir tuscia  ir atskirai prideti savybes, kurios bus objekte
// let puodukas = {};
// puodukas.turis = 300;
// puodukas.kiekis = 200;
// puodukas.spalva = "rudas"

let zmogus = {    // objektas objekte, du objektai su savo savybemis
    vardas: "Jonas",
    pavarde: "Jonaitis",
    adresas: {  // adreso reiksme dar vienas objektas
        miestas: "Vilnius",
        gatve: "Gedimino",
        namas: 9
    }
}

let s = "gatve";

console.log(zmogus); // objekto pavadinimas
console.log(zmogus.adresas.gatve); // objekto pavadinas, kitas objekto pavadinimas ir viena savybe
console.log(zmogus["adresas"].namas);
console.log(zmogus["adresas"]["miestas"]);
console.log(zmogus["adresas"][s]); // objekto pavadininimas, objekto viena savybe, kintamasis
console.log(zmogus.adresas["miestas"]);
// skirtingi budai isvedimo visi galimi ir tinkami ir gausis rezultatai 