const employeeDetails= {
    name: 'Deepali',
    lastName: 'Mehroliya',
    dob: '11th August, 1995',
    city: 'Nashik',
    country: 'India',
    hobbies: ['Dancing', 'Sketching', 'Cooking', 'Music'],
    formulateDetails : function(){
        fullDetails =`
        ${this.name} ${this.lastName}
        ${this.dob}
        ${this.city}
        ${this.country}` 
    return fullDetails
    }
}

console.log(employeeDetails)
console.log(typeof employeeDetails)
console.log(employeeDetails.name)

employeeDetails.age = 28;
console.log(employeeDetails.age)