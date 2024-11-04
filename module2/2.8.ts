{
  //* Asynchronous typescript

//   Get Data 

type Todo = {
    id: number,
    userId: number,
    title: string;
    completed: boolean;
}
const getTodo = async () : Promise<Todo> =>  {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = response.json()
    return data
}

getTodo()



  // ! A function that returns a promise resolving to a string
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // An async function to handle the promise from createPromise
  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    return data; 
  };

  //! Interface to define the shape of the object
  interface Something {
    something: string;
  }

  //! A function that returns a promise resolving to an object of type Something
  const createPromiseO = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // An async function to handle the promise from createPromiseO
  const showDataO = async (): Promise<Something> => {
    const data: Something = await createPromiseO();
    return data; 
  };

  //! A function that returns a promise resolving to a boolean
  const createPromiseB = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      const data: boolean = true; 
      if (data) {
        resolve(data); 
      } else {
        reject("Failed to load data"); 
      }
    });
  };

  // An async function to handle the promise from createPromiseB
  const showDataB = async (): Promise<boolean> => {
    const data: boolean = await createPromiseB(); 
    return data;
  };

  showData();
  showDataB();
  showDataO();
}
