console.clear()

// FOR loop/ciklas;
 
//kartojame operacijas tol kol reikia arba numatyta kieki kartu

/*//const marks = [10, 2, 8, 4, 6];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

for (let i = 2; i = 8; i++) { 
  console.log(i);
  break;
} 

for (let i = 0; i < 2; i += 0.1) { 
  console.log(i.toFixed, '-', i);

} 

const text1 = 'Labas!'

for (let i = text1.length -1; i + 1 > 0; --i) { 
 // console.log(i, '-', text[i]);
console.log (i - text1.length -1)
}

console.clear()
/*
For - loop/ ciklas
kartojame operacijas tol kol reikia,arba numatyta kiekį kartų. 
*/

const marks = [10, 2, 8, 4, 6]

console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
//tas pats sumos apskaiciavimas
//1 VARIANTAS
let sum = 0
let i = 0

sum += marks[i]
i += 1
sum += marks[i]
i += 1
sum += marks[i]
i += 1
sum += marks[i]
i += 1
sum += marks[i]
console.log(sum)
//2 VARIANTAS
let m = 0
let suma = 0

suma += marks[m++]
suma += marks[m++]
suma += marks[m++]
suma += marks[m++]
suma += marks[m++]
console.log(suma)

//For algoritmas
console.clear()
/*
// aprasoma starto pozicija (0) ir kartojimas iki 5 pozicijos (negalima naudoti = (auto infinite loop)), kartojimo eiga ++ (dideja vienetu))
const pazymiai = [1, 2, 4, 5, 8, 6, 7, 9, 3, 5]
const kasKelintas = 3
for (let i = kasKelintas - 1; i < pazymiai.length; i += kasKelintas) {
  console.log(i + 1, "-->", pazymiai[i])
}

console.log("---------------")
// Jeigu i dalinasi is triju ir nelieka liekanos spausdinam
for (let i = 0; i < pazymiai.length; i++) {
  if (i % kasKelintas === kasKelintas - 1) {
    console.log(i + 1, "--->", pazymiai[i])
  }
}
console.log("---------------")

//skaiciai po kablelio .toFixed()
// const cikle gali kist kas karta pasikeiciant ciklo skaiciui

for (i = 5; i <= 6; i += 0.1) {
  let suapvalintas = i.toFixed(1)
  suapvalintas += 1 // dadeda kaip text prie text
  console.log(suapvalintas, "-", i)
}
console.log("---------------")
//Parse INT (grazina sveika skaiciu),  parseFLOAT (grazina desimtaini)
console.log("5", parseInt("5"))
console.log("3.14", parseFloat("3.14"))
console.log("3.1425", +"3.1425")

for (i = 5; i <= 6; i += 0.1) {
  let suapvalintas = parseFloat(i.toFixed(3))
  suapvalintas += 1 // dadeda kaip text prie text
  console.log(suapvalintas, "-", i)
}

console.clear()
console.log("-------------")
const text = "Labas rytas, Lietuva!"

for (let i = 0; i < text.length; i++) {
  console.log(i, "-", text[i])
}
// backwards
console.log("---------------")
for (let i = text.length; i > 0; i--) {
  console.log(i, "-", text[i])
}

let atbulas = ""
console.log("---------------")
for (let i = 0; i < text.length; i++) {
  const index = text.length - i - 1
  let symbol = text[index]
  atbulas += symbol

  console.log(i, "-", text[i])
}
console.log(atbulas)

// ciklas kartojais kol salyga TRUE
// for (let i = 1; i <= 10; i++) {
//  console.log(`As dariau ${i} pakartojimu saleje`)
//}   */
/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
]

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
  

 // filling types array
 // types[i] = typeof jonas[i];
  
  
  types.push(typeof jonas[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];
                                 // i++ pakelia vienu skaiciu auksciau
for (let i = 0; i < years.length; i++) { 
  ages.push(2037 - years[i]);

}
console.log(ages)

// continue and break
//CONTINUE - is to exit the current iteration of the loop(cikla) and continue to the next one
//BREAK - is used to completely terminate the loop(cikla).

console.log('--- ONLY STRINGS---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue; 
//if typeof current elemen jonas[i] is not a string - then continue(logs only strings in the console)
// jeigu duomens tipas masyve ne stringas - tada tesia cikla/  
  console.log(jonas[i], typeof jonas[i]);
}


console.log("--- BREAK WITH NUMBER---")
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i])
}*/


/*const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  
  
] */

//for (let i = jonas.length - 1; i >= 0; i--) {
//  console.log(i, '-'jonas[i]);
//}
 
/*function biggest(list) { 
  let result = list[0];
  
  for (let i = 0; i < list.length; i++);
  if (list[i] > result) {
    result = list[i];
    }
}


console.log(biggest([-1, -2, -3, -4]); */