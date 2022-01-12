// code your solution here

function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
  }

function wrapAdjective (asterik) {
    return function (xyz = "special") {
        return `You are ${asterik}${xyz}${asterik}!`
    }
}


//   function demoChain(name) {
//     const pLevel = "Power level over 9000"
//     return function () {
//       const dbzName = "Vegeta"
//       return function () { 
//         console.log(`Who is ${name}? ${dbzName}, "His ${pLevel}!"`)
//       }
//     }
//   }
  
//   demoChain("Goku")()();