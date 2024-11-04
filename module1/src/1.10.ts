{
  // Union types
  type ReactDeveloper = "FakibazDeveloper" | "JuniorDeveloper"
  type NodeDeveloper = "frontendDeveloper" | "expertDeveloper"

  type Developer = ReactDeveloper | NodeDeveloper

  const newDeveloper: ReactDeveloper = "FakibazDeveloper"
  const developer: Developer = "expertDeveloper"

  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "O+" | "A-" | "AB+"    
  }
  const user: User = {
    name: "Mehedi",
    email:"m@gmail.com",
    gender: "male",
    bloodGroup:"A+",
  }



  // Intersection types

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer"
  }
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer"
  }

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

  const fullstackDeveloper: FullstackDeveloper ={
    skills:["HTML, CSS, JavaScript", "Node"],
    designation1:"Frontend Developer",
    designation2:"Backend Developer"
  }



}
