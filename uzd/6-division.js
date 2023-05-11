console.clear()


function division(a, b) {
  if (typeof a !== "number") {
    return "ERROR: pirmas parametras ne skaicius"
  }
  if (!isFinite(a)) {
    return "ERROR: pirmas parametras turi buti tikras skaicius"
  }

  if (typeof b !== "number") {
    return "ERROR: antras parametras ne skaicius"
  }
  if (Math.abs(b) === Infinity) {
    return "ERROR: antras parametras negali buti Infinity"
  }
  if ("" + b === "NaN") {
    return "ERROR: antras parametras negali buti NaN"
  }
  if ( a === 0 || b === 0) { 
    return "ERROR: skaicius negali buti dalinamas is 0"
  }

  const result = a / b
  return result
}

// tipai
console.log(division("labas", 5))
console.log(division(5, "labas"))
console.log(division("labas", "rytas"))
console.log(division(7, false))
console.log(division(true, 5))

console.log('---------');
// ne skaicius
console.log(division(Infinity, 5))
console.log(division(5, Infinity))
console.log(division(Infinity, Infinity))
console.log(division(-Infinity, 5))
console.log(division(5, -Infinity))
console.log(division(-Infinity, -Infinity))

console.log(division(NaN, 5))
console.log(division(5, NaN))
console.log(division(NaN, NaN))

console.log('-------------')
// ne tipai
console.log(division([], 1))
console.log(division([], []))
console.log(division(2, []))

console.log(division({}, 1))
console.log(division({}, {}))
console.log(division(2, {}))

console.log(division(division, 1))
console.log(division(division, division))
console.log(division(2, division))

// dalinimas is 0
console.log(division(0, 0))
console.log(division(0, 1))
console.log(division(1, 0))


// ok
console.log(division(7, 5))
console.log(division(-7, 5))
console.log(division(-7, -5))
console.log(division(7, -5))
