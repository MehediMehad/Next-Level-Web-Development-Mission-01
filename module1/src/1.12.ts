{
  // Never,unknown and nullable type

  // Nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("Nothing to Search");
    }
  };
  searchName(null);

  // Unknown
  const getSpeedIdMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`User Sand Number The speed is ${convertedSpeed} ms^-1`);
    }
    if (typeof value === "string") {
      const [valueInNumber, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(valueInNumber) * 1000) / 3600;
      console.log(`User Sand String The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("Wrong input");
    }
  };

  getSpeedIdMeterPerSecond(1000);
  getSpeedIdMeterPerSecond("1000 kmh^-1");
  getSpeedIdMeterPerSecond(null);

  // Never
  const throwError = (msg:string): never =>{
    throw new Error(msg)
  }
  throwError("Error Hoise Bhai")



  // ts-node-dev --respawn --transpile-only module1/src/1.12.ts
}
