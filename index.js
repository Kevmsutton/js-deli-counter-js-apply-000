function takeANumber(currentLine, newName){
let newLine = currentLine
newLine.push(newName)
return (`Welcome, ${newName}. You are number ${currentLine.length} in line.`)
}