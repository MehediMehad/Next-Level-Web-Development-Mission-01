{
  // Interface, type vs interface

  // type
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRoll = User1 & { role: string };

  const userWithRoll: UserWithRoll = {
    name: "Mehad",
    age: 21,
    role: "Student",
  };

  // interface
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRoll2 extends User2 {
    role: string;
  }

  const userWithRoll2: UserWithRoll2 = {
    name: "Mehad",
    age: 21,
    role: "Student",
  };

  // type
  type Roll = number[];

  // interface
  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber: Roll = [1, 2, 3, 4];
  const rollNumber2: Roll2 = [1, 2, 3, 4];

  //
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
  //
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add2: Add2 = (num1, num2) => num1 + num2;

  const user1: User1 = {
    name: "Mehedi",
    age: 22,
  };

  const user2: User2 = {
    name: "Mehad",
    age: 21,
  };
}
