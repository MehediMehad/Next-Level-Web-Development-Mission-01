{
  // What is Conditional types ?

  type A1 = null;
  type B1 = undefined;

  type X = A1 extends null ? true : false; // Conditional types
  type Y = A1 extends null ? true : B1 extends undefined ? undefined : any; // Conditional types

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

//   keyof Sheikh  "bike" | "car" | "ship" 

  type CheckVehicle <T> = T extends keyof Sheikh ? true : false

  type HasBike = CheckVehicle<"bike"> 
  type HasCar = CheckVehicle<"car"> 

}
