{
  // Spread and Rest Operator
  
  // Spread Operator Array
  const brother1: string[] = ["Sagor", "Miraz", "Sujan"];
  const brother2: string[] = ["Robin", "Sojol", "Rahat"];

  // brother1.push(brother2) ----> wrong way ['Sagor', 'Miraz', 'Sujan', ['Robin', 'Sojol', 'Rahat']]
  brother1.push(...brother2); // ['Sagor', 'Miraz', 'Sujan', 'Robin', 'Sojol', 'Rahat']

  // Spread Operator Object
  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    nextJs: "Tanmoy",
    cloud: "Nadid",
  };

  const mentorsList = {
    ...mentors1,
    ...mentors2,
  };

  /* output 
    {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
        prisma: "Firoz",
        nextJs: "Tanmoy",
        cloud: "Nadid",
    }
    */

  // Rest Operator

  // Example
  const greetFriendsExample = (
    friend1: string,
    friend2: string,
    friend3: string
  ) => {
    console.log(`Hi ${friend1} ${friend2} ${friend3} `);
  };
  greetFriendsExample("Robin", "Ratul", "Sojol");

  
  // Use Rest Operator 
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend : string) => console.log(`Hi ${friend}`))
  };

  greetFriends("Robin", "Ratul", "Sojol", "Rahat", "Nayem");

  //
}
