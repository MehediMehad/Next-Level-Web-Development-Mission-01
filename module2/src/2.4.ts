{
  // Generic with Interface
  interface Developer<T, X= null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseDate: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Mehedi",
    computer: {
      brand: "Asus",
      model: "X-258",
      releaseDate: 2015,
    },
    smartWatch: {
      brand: "Emilab",
      model: "Kw66",
      display: "OLED",
    },
  };
  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  };

  type Bike ={
    model: string;
    price: number
  }
  const richDeveloper: Developer<AppleWatch, Bike> = {
    name: "Robin",
    computer: {
      brand: "HP",
      model: "A-258",
      releaseDate: 2024,
    },
    smartWatch: {
      brand: "Apple",
      model: "J-6",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      price: 150000,
    },
  };
}
