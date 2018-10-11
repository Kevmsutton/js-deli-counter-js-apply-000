function takeANumber(currentLine, newName){
currentLine.push(newName)
return (`Welcome, ${newName}. You are number ${currentLine.length} in line.`)
}

function nowServing(currentLine){
let array = []
for (let i = 0; i < currentLine.length; i++){
array.push(currentLine[i])
let firstPerson = array.shift(currentLine[i])
return (firstPerson)
}
}
console.log(nowServing(["John", "Becky", "Jimmy"]))