{
  // Mapped types
  const arrOfNumbersManually: number[] = [10, 20, 30, 40]; // manually
  const arrOfStringManually: string[] = ["10", "20", "30", "40"]; // manually

  //
  const arrOfStrings: string[] = arrOfNumbersManually.map(
    (number) => number.toString() //
  );
  console.log(arrOfStrings); // ["10", "20", "30", "40"]
  // Mapped types
  type AreaNumber = {
    height: number;
    width: number;
  };
  type Hight = AreaNumber["height"]; // look up


  // 
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1 : AreaString<{height: string; width: number;}> = {
    height: "110",
    width: 250
  }

}
