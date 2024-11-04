{
  //  Type alias in typescript
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Mehedi",
    age: 22,
    gender: "male",
    contactNo: "0122222224",
    address: "Dhaka",
  };
  const student2: Student = {
    name: "Imran",
    age: 20,
    gender: "male",
    address: "ctg",
  };
  const student3: Student = {
    name: "Atik",
    age: 22,
    gender: "male",
    contactNo: "012555555",
    address: "Dhaka",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Mehedi";
  const isAdmin: IsAdmin = false;

  type StringOrNumber = string | number;

  let value: StringOrNumber;
  value = "Hello";
  value = 123; // উভয়ই বৈধ

  // Function Type alias
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
