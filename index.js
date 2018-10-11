function takeANumber(currentLine, newName){
currentLine.push(newName)
return (`Welcome, ${newName}. You are number ${currentLine.length} in line.`)
}