{
  //  Constraints in typescript
  const addCourseToStudent = <T extends {id: number, name: string, gmail: string} >(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };


  const student3 = addCourseToStudent({id: 10, name:"Imran", gmail:"i@gmail", leader: true  });


  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    gmail: string;
    devType: string;
}> ({
    id: 25,
    name: "Mehedi",
    gmail: "m@gmail.com",
    devType: "NLWD",
  });


  const student2 = addCourseToStudent({
    id: 36,
    name: "Robin",
    gmail: "r@gmail.com",
    haWatch: "Apple Watch",
  });
  console.log(student1);
  console.log(student2);
}
