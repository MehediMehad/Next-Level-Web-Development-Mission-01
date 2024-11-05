{
  // Utility types

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  // Pick
  type Name = Pick<Person, "name"> //
  type NameContactNo = Pick<Person, "name" | "contactNo"> //
  // Omit
  type ContactInfo = Omit<Person, "name" | "age"> //
  // Required
  type PersonRequired = Required<Person>
  // Partial
  type PersonPartial = Partial<Person>
  //Readonly 
  type PersonReadonly = Readonly<Person>
  
  const person1 : PersonReadonly = {
    name: "Mehedi",
    age: 20,
    contactNo: "0122552"
  }
    // person1.name= "Imaran"  // ! Readonly Ai vab a change kora jabe na because 

  // Record 
  type MyObj = Record<string, string>
  const obj1 : MyObj = {
    a:"aa",
    b:"bb",
    c:"cc",
    d:"dd",
    e:"ee",
  }

  const EmptyObj :Record<string, unknown> = {}


}
