import parseArgs from "minimist"

let args = parseArgs(process.argv.slice(2))



const whites = ["A", "B", "C", "D", "E", "F", "G"]
const sharps = ["A#", "B#", "C#", "D#", "E#", "F#", "G#"]
const flats = ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"]

const accidentals = ['#', 'b', '']

function pickRandomFromList({list, n}) {
  let res = []
  for (var i = 0; i< n; i++) {
    res.push(list[Math.floor(Math.random() * list.length)])
  }
  return res
}

function run(args) {
  let command = args["_"][0]
  let {n} = args
  if (command == "whites") {
    console.log(pickRandomFromList({
      list: whites,
      n,
    }))
  } else if (command == "whitesAndSharps") {
    console.log(pickRandomFromList({
      list: [...whites, ...sharps],
      n,
    }))
  } else if (command = "whitesAndFlats") {
    console.log(pickRandomFromList({
      list: [...flats, ...whites],
      n,
    }))
  }
}

run(args)