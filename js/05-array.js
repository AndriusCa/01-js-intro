console.clear();
/*
ARRAY - arėjus (slang), sąrašas, listas(slang), matrica, masyvas.

Masyvas prasideda index = 0;
array.length - masyve esanciu reiksmiu kiekis;

*/

const empty = [];
console.log(empty);

//                 0  1  2  3  4
const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

// stengtis isvengti tokio atvejo
const random = [1, 'antras', 3, '4', 3.14, 'asdasd'];

//                  0         1        2       3
const vardai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(vardai);

const vardas1 = vardai[0];
console.log(vardas1);

const vardas2 = vardai[1];
console.log(vardas2);

console.log('--------------');
console.log(vardai[0]);
console.log(vardai[1]);
console.log(vardai[2]);
console.log(vardai[3]);
console.log(vardai[4]);
console.log(vardai[10000000]);
console.log(vardai[-1]);
console.log(vardai[1.5]);

console.log('--------------');

//              0  1  2  3  4
const marks = [10, 2, 8, 4, 6];
console.log(marks);

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);

console.clear();

const marks1 = [10, 9, 8];
const marks2 = [6, 7, 8];
const marks3 = [5, 5, 5];

function average(marks) {
    let sum = 0;
    sum += marks[0];
    sum += marks[1];
    sum += marks[2];

    return sum / marks.length;
}

console.log('Vidurkis 1:', marks1, '=', average(marks1));
console.log('Vidurkis 2:', marks2, '=', average(marks2));
console.log('Vidurkis 3:', marks3, '=', average(marks3));

console.clear();

const dict1 = ['pirmas', 'zodis', 'labas'];
const dict2 = ['Labas', 'rytas', 'Lietuva'];
const dict3 = ['Labas', 'rytas', 'suraitytas'];

// Zodynas: a, b, c.

function dictionary(words) {
    let result = 'Zodynas: ';

    result += words[0] + ', ';
    result += words[1] + ', ';
    result += words[2] + '.';

    return result;
}

console.log(dictionary(dict1));
console.log(dictionary(dict2));
console.log(dictionary(dict3));

console.clear();

console.log(7 + 5);
console.log(7 - 5);
console.log(7 / 5);
console.log(7 % 5);

console.log('labas' + 'rytas');
console.log(777 + 'rytas');
console.log('labas' + 888);

console.log('labas' - 888);
console.log('labas' * 2);
console.log('labas' / 2);
console.log('labas' % 2);
console.log('labas' * 'rytas');

console.log(2 ** 3);
console.log(9 ** 2);
console.log(9 ** 0.5);

console.clear();

const text = 'Labas rytas';
console.log(text);
console.log(text[-1]);
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
console.log(text[6]);
console.log(text[7]);
console.log(text[8]);
console.log(text[9]);
console.log(text[10]);
console.log(text[1100000000]);

console.log(text.length);
console.log(''.length);
console.log(' '.length);
console.log('  '.length);
console.log('   '.length);