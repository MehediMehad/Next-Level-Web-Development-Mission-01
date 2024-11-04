{
  const rollNumber: number[] = [1, 2, 4, 5];
  const mentors: string[] = ["Mir", "Mahabub", "Robin"];
  const boolArray: boolean[] = [true, false, true];

  // Introduction to generics

  // Use Array Generics
  const rollNumberG: Array<number> = [3, 4, 5, 5];
  const mentorsG: Array<string> = ["Mir", "Mahabub", "Robin"];
  const boolArrayG: Array<boolean> = [true, false, true];

  type GenericArray<T> = Array<T>;

  // Dynamic
  const rollNumberGD: GenericArray<number> = [3, 4, 5, 5];
  const mentorsGD: GenericArray<string> = ["Mir", "Mahabub", "Robin"];
  const boolArrayGD: GenericArray<boolean> = [true, false, true];

  //
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Mehedi",
      age: 100,
    },
    {
      name: "Robin",
      age: 200,
    },
  ];


  // Generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["Mr.X", "Mr.Y"];
  const UserWithId :GenericTuple<number, {name: string}> = [751962, {name: "Mehedi"}]

}
