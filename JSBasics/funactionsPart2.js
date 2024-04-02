const person = {

    firstName: "John",
  
    lastName: "Doe",
  
    fullName() {
  
      return this.firstName + " " + this.lastName;
  
    },
  
  };
  
  console.log(person.fullName());
  
   
  
  const abc = person.fullName;
  
  //console.log(abc());
  
   
  
  const person1 = {
  
    firstName: "Sahana",
  
    lastName: "Johnson",
  
  };
  
  console.log(abc.call(person1));


  function salutation(salutation) {

    console.log(
  
      `Hello ${salutation} ${this.firstName} ${this.lastName}, how are you?`
  
    );
  
  }

salutation.call(person, "Mr");
salutation.call(person1, "Mrs");