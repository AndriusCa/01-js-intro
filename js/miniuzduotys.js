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

const vardas = 'Jonas';
const pavarde = 'Jonaitis';
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
const sumaSkaiciai = (numeris + numeris2 + numeris3)
console.log(sumaSkaiciai);

// 2.Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console

console.log(`${vardas} ${pavarde} ${profesija}`)

//3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//1-2+3-4+5
//Rezultatą išvesti į console





//4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const reversedZodziai = zodziai1.reverse()
console.log(reversedZodziai)



//KINTAMUJU PALYGINIMAS

/*const variable1 = '10';
const variable2 = '11';

if (variable1 > variable2) {
  return 'Pomidoras';
} else {
  return 'Bandykite kitą kartą' }
*/











//Ciklo for panaudjoimas






/*panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba” */



const letters = 'abcdef';
for (let i = letters.length - 1; i >= 0; i--) {
  console.log(i, letters[i]);
 }






                                     //Funkcijos

//1. TusciaFunkcija


function tusciaFunkcija() {
  return false
}

console.log(tusciaFunkcija())
console.log(tusciaFunkcija(1))
console.log(tusciaFunkcija("asdas"))
console.log(tusciaFunkcija(true))


//2. DAUGYBA

/*function multiplay(a, b) {
  if (typeof a !== 'number') 
  return "Error - pirmas skaicius netinkamas";
}

if (typeof b !== 'number') {
  return "Error - antras skaicius netinkamas";

}

const result = a * b;
return result;

console.log(multiplay(5, 6));
console.log(multiplay(-5, -2));  

// 3. SkaitmenuKiekisSkaiciuje



// Kintamųjų palyginimas#
*/

const variable1 = 15;
const variable2 = 11;






