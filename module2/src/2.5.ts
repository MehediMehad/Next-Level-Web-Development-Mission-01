{
  // Function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("BNG");
  const res = createArrayWithGeneric<boolean>(true);

  type User = { id: number; name: string }
  const resGenericsObj = createArrayWithGeneric<User>({id: 125, name: "Mehedi",});
  //
  const createArrayWithTuple = <T, Q>(param: T, param2: Q): [T, Q] => {
    return [param, param2];
  };

  const resTuple = createArrayWithTuple<string, number> ("Hello", 522) //
  const resTupleOBJ = createArrayWithTuple<{name: string}, number> ({name: "Mehedi"}, 522) //


//   
const addCourseToStudent= <T> (student : T) =>{
    const course = "Next Level Web Development"

    return {
        ...student,
        course
    }
}

const student1 = addCourseToStudent({name: "Mehedi", gmail: "m@gmail.com", devType: "NLWD"})
const student2 = addCourseToStudent({name: "Robin", gmail: "r@gmail.com", haWatch: "Apple Watch"})
console.log(student1);
console.log(student2);


}
