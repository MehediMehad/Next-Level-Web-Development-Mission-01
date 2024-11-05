{
  // Inheritance in OOP

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  // Student
  class Student extends Person {
    //
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mehedi", 22, "Dhaka");
  student1.name;
  student1.address;
  student1.age;
  student1.getSleep(7)

  // Teacher
  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take ${numberOfClass}`);
    }
  }

  const teacher1 = new Teacher("Mir", 22, "Dhaka", "mentors");
  teacher1.address;
  teacher1.age;
  teacher1.designation;
  teacher1.getSleep(8)
  teacher1.takeClass(5)
}
