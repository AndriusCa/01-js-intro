console.clear()

//Kintamuju inicijavimas

//1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console

const numeris = 5;
const numeris2 = 9;
let numeris3 = 9;
console.log( numeris, numeris2, numeris3);

//2.Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console

const vardas = 'Petras';
const pavarde = 'Petraitis';
const profesija = 'Statybininkas';
console.log(vardas, pavarde, profesija);

//3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const numberList = [1, 2, 3, 4, 5];
const numberList1 = [6, 7, 8, 9, 10];
const numberList2 = [11, 12, 13, 14, 15];
console.log(numberList);
console.log(numberList1);
console.log(numberList2);

//4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console

const zodziai = ['vienas', 'du', 'trys', 'keturi', 'penki'];
const zodziai1 = ['sesi', 'septyni', 'astuoni', 'devyni', 'desimt'];
const zodziai2 = ['vienuolika', 'dvylikta', 'trylika', 'keturiolika', 'penkiolika'];
console.log(zodziai);
console.log(zodziai1);
console.log(zodziai2);



//Veiksmai su kintamaisiais

// 1 .Susumuoti visus skaičiaus tipo kintamuosius

console.log(numeris + numeris2 + numeris3);

// 2.Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console

console.log(`${vardas} ${pavarde} ${profesija}`)

// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//1-2+3-4+5
//Rezultatą išvesti į console

/*suma = 0;

for (i = 0; i < numberList.length; i++) { 
  suma += numberList[i]; 
  console.log(suma = numberList);
}*/

//4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const reversedZodziai = zodziai1.reverse()
console.log(reversedZodziai)


//Ciklo for panaudjimas
/*panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba” */


const letters = 'abcdef';
for (let i = letters.length - 1; i >= 0; i--) {
  console.log(i, '-', letters[i]);
 }

