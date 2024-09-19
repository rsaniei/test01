class Person{
  constructor(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;

  }
  getAge(){
    return `${this.name} is ${this.age}!`
  }
}
