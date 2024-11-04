{
  // Ternary Operator || Optional Chaining || Nullish Coalescing Operator
  const age : number = 18
  if (age >= 18) {
    console.log("Adult");
  }else{
    console.log("Not Adult");
  }
  const isAdult = age  >= 18 ? "Adult" : "Not Adult"


// Nullish Coalescing Operator
const isAuthenticated = null
const isAuthenticated2 = ""

const result1 = isAuthenticated ?? "Guest" // Sudu Null, undefined hoise Guest hobe
const result2 = isAuthenticated2 ?? "Guest"
console.log({result1, result2});

type User = {
    name : string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string;
    }
}

const user: User ={
    name: "Mehedi",
    address:{
        city:"Dhaka",
        road:"3",
        presentAddress:"Dhaka",
    }
}

//
const permanentAddress = user.address.permanentAddress ?? "No PermanentAddress"
console.log({permanentAddress});








}
