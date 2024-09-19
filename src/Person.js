class Person{
  constructor(firstName, lastName, age, job){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.job = job;

  }
  getAge(){
    return `${this.firstName} is ${this.age}!`
  }
  getFullName(){
    return `${firstName} ${lastName}`
  }
}
