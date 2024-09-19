class Person{
  constructor(firstName, lastName, age, job){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.job = job;

  }
  getFullName(){
    return `${firstName} ${lastName}`
  }
}
