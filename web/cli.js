import parseArgs from "minimist"

let args = parseArgs(process.argv.slice(2))

// console.log(args)

function generateWhiteNote() {
  return pickRandomFromList(["A", "B", "C", "D", "E", "F", "G"])
  // return pickRandomFromList(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
}

function generateAccidental() {
  return pickRandomFromList(['#', 'b', ''])
}


function generateRandNoteScheme1(n) {
  let out = ''
  for(var i = 0; i<n; i++) {
    out += generateWhiteNote()// + generateAccidental()
    if (i < n-1) {
      out += ", "
    }
  }
  return out
}

function pickRandomFromList(array) {
  return array[Math.floor(Math.random() * array.length)]
}

console.log(generateRandNoteScheme1(4))