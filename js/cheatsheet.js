console.clear()

// lengviausiais budas padaryti nauja masyvo kopija su .map
const marks = [10, 2, 8, 4, 6];
console.log(marks);

const marksCopy = marks.map(m => m);
console.log(marksCopy);

// pakeisti tikros kopijos kintamuosius/ pasiimi ir grazini tokia pat
// nereikia modifikuoti

marks[0] = 100;
console.log(marks);
console.log(marksCopy);

// kaip pasidaryti objekto nauja kopija su primityviais irankiais:
// 1. kintamieji const, let
// if
// for ()
// function

// turime tureti

const user = {
  name: 'Petras',
  age: 99,
  isMarried: true,
};

const userCopy = user;

console.log(user);
console.log(userCopy);

user.name = "Maryte"


// turime tureti tuscia objekta
const user2 = {};

for (const key in user) { 
  //console.log(key);
  user2[key] = user[key]; //kintamasis kuris po saves slepia name,age,isMarried siuo atveju
 // user2.key //su tasku verte yra butent KEY

}

