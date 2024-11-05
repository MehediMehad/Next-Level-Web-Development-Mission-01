{
    // instance of Guard
    class Animal {
        name: string;
        species: string;
        constructor(name: string, species: string) {
            this.name = name;
            this.species= species;
        }
        makeSound(){
            console.log("I am making Sound");
        }
    }

    class Dog extends Animal {
        constructor(name : string, species: string){
            super(name, species)
        }
        makeBark() {
            console.log("I am Bhaou Bhaou");
        }
    }
    class Cat extends Animal {
        constructor(name : string, species: string){
            super(name, species)
        }
        makeMeaw() {
            console.log("I am Bhaou Meaw");
        }
    }

    const getAnimal = (animal : Animal) => {
        if ( animal instanceof Dog) {
            animal.makeBark()
        }else if (animal instanceof Cat) {
            animal.makeMeaw()
        }else{
            animal.makeSound()
        }
    }

    // Smart way teh handle korar jonno amra function bebohar korte pari
    const isDog = (animal : Animal) : animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat
    }
    const getAnimalSmartWay = (animal : Animal) => {
        if (isDog(animal)) {
            animal.makeBark()
        }else if (isCat(animal)) {
            animal.makeMeaw()
        }else{
            animal.makeSound()
        }
    }
    const dog = new Dog ("Aatu", "dog")
    const cat = new Cat ("Aru", "cat")
    
    getAnimal(cat)
    getAnimal(dog)
    getAnimalSmartWay(cat)
    getAnimalSmartWay(dog)


 // ​module3/3.4.ts:34:5​
}