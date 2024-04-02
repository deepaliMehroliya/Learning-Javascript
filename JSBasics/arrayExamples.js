let employee = new Array('Deepshikha', 'Somanath', 'Taha', 'Deepali')

console.log(employee)

console.log(employee[0])
console.log(employee[4])

employee[0] = "Deepshikha Pingle"

console.log(employee)
//append at the end of array
employee.push('Pranita')
console.log(employee)
//append at the start of array
employee.unshift('Arjun')
console.log(employee)
//remove at the end of array
employee.pop()
console.log(employee)
//remove at the start of the array
employee.shift()
console.log(employee)

console.log(employee.indexOf('Taha'));
console.log(employee.includes('Pranita'));
console.log(employee.length)

let newEmployee = employee.reverse()

console.log(newEmployee);