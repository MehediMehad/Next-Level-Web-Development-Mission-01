{
  // Class and object
  // OOP - Class

  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    // Parameter Properties
    constructor( public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }


  }

  const dog = new Animal ("Aatu", "dog", "Vau Vau");
  const cat = new Animal ("Aru", "cat", "meaw meaw");

  cat.makeSound()
  cat.species



}
