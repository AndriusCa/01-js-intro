console.clear()

function biggest(list) {
  // tikriname tipa- turi buti arejus
  if (!Array.isArray(list)) {
 

    //jeigu ne(typeof) array - return error
    if (!list.length)
      return "ERROR duok ne tuscia array";
  }
  // 1. atsikratyti kas nera array
  // 2. jeigu turiu array 
  // 3. jeigu tuscias  - return error
  

  // turiu ne tuscia array;
  // sakom, jog didziausias skaicius yra -infitniy;
  let biggest = -Infinity;

  // su ciklu(for) einame per array;
  for (let i = 0; i < list.length; i++) {

    //- tikriname ar array narys yra realus(ar ne NaN, Infinity -Infinity) skaicius;
    if (typeof list[i] !== 'number' || !isFinite(list[i])) {
      //  jeigu ne;
      //    - einam prie sekancio;
      continue;
    }
  }
  //  jeigu taip(yra skaiciaus tips);
  //    - lyginame su pries tai didziausia zinoma reiksme;
  //    - jeigu nauja reiksme didesne  - tada owerride;
  if (list[i] > biggest) {
    biggest = list[i];
  }

  // graziname didziausia skaiciu (sekmes atveju);

  // jeigu didziausias skaicius vis dar liko -Infinity;
  if (biggest === -Infinity) {
    return 'error - sarase nera nei vieno normalaus skaiciaus';
    // - return error - sarase nera nei vieno normalaus skaiciaus;
    //galima padarytio su isFinite
  }

  //visi tipai turi boolean reiksme, patikrinti 

  /*
    let result = list[0]
  
    for (let i = 1; i < list.length; i++) {
      if (list[i] > result) {
        result = list[i]
      }
    }
  
    return result
  }*/

  console.log(biggest([1]), "->", 1)
  console.log(biggest([1, 2, 3]), "->", 3)
  console.log(biggest([-5, 78, 14, 0, 18]), "->", 78)
  console.log(biggest([69, 69, 69, 69, 66]), "->", 69)
  console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]), "->", -1)

  console.log(biggest("true"))
  console.log(biggest('labas'));
  console.log(biggest('labas'));
  console.log(biggest(['labas', 5, '7']));
}

