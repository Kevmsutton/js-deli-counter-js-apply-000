function takeANumber(currentLine, newName){
currentLine.push(newName)
return (`Welcome, ${newName}. You are number ${currentLine.length} in line.`)
}

function nowServing(currentLine){
let firstPerson = currentLine.shift(currentLine)
if (currentLine.length === 0){
return `There is nobody waiting to be served!`
}
else{
	return firstPerson
}
}