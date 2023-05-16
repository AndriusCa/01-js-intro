console.clear()

//FOREACH i funkcija visada duos tris dalykus: 
//1. elementas
//2.jo indekas
//3. ir originalus masyvas per kuri keliavo
const marks = [10, 2, 8, 4, 6];
const words = ['labas', 'rytas', 'Lietuva'];

// for (let i = o; i < marks; i++); {
//  console.log(marks[i]);
//}

//for (const marks of marks) {
//  console.log(marks)
//}

function pavadinimas(item, index, list) {
  console.log(`Reiksme ${item} yra ${index + 1} is ${list.length}.`);
}

//marks.forEach(function (item,index, originaList) {
//  console.log(item, index, originaList);
// }); //inline anonimi nes funkcijos


function pavadinimas(item, index, list) {
    console.log(`Reiksme ${item} yra ${index + 1} is ${list.length}.`);
}

marks.forEach(pavadinimas);
words.forEach(pavadinimas);

marks.forEach(function (item, index, originalList) {
  console.log(item, index, originalList);
});
