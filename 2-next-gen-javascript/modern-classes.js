class Human {
  gender = "Male";

  printMyGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Sabrina";
  gender = "Female";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printMyGender();
