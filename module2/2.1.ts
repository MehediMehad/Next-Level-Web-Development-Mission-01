{

  // Type assertion / type narrowing


  // Type Assertion
  let anything : any;


  anything = 'Mehedi';

  (anything as string)
  console.log(anything);
  
  anything= 22;

  (anything as number)
  console.log(anything);

  const KgToGm = (value: string | Number) : string | number | undefined =>{
    if(typeof value === 'string'){
      const convertedValue = parseFloat(value)*1000
      return `The converted value is:${convertedValue} `
    }
    if (typeof value === "number") {
      return value *1000
    }
  }
  const result1 = KgToGm("1000") as string //
  const result2 = KgToGm(1000) as number  //


  //
  type CustomError ={
    massage: string
  }

  try{
    
  }catch(error){
    console.log((error as CustomError).massage); //
    
  }



  
}
