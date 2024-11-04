{
  // Destructuring

  const user = {
    id: 72,
    name: {
      firstName: "Mehedi",
      middleName: "Hasan",
      lastName: "Mehad",
    },
    phoneNo: "0102525505",
    address: "Dhaka",
  };

  // Object Destructuring
  const {
    phoneNo,
    name: { middleName }, // Object থেকে middleName এর মান নেয়
    name: { lastName: nickName }, // Object থেকে lastName এর মান নিয়ে সেটিকে nickName নামে একটি নতুন ভ্যারিয়েবলে সংরক্ষণ করে।
  } = user;


  const myFriends = ["Rahat", "Ratul", "Sojol", "Robin", "Nayem", "Sagor"]; 
  // Array Destructuring
  const [, , good, best, ...bros] = myFriends;

  // "Rahat" এবং "Ratul") বাদ দিচ্ছে good ভ্যারিয়েবলটি তৃতীয় উপাদান ("Sojol") ধারণ করছে 
  // best ভ্যারিয়েবলটি চতুর্থ উপাদান ("Robin") ধারণ করছে।
  // ..bros: তিনটি ডটের মাধ্যমে বাকি উপাদানগুলোকে একটি নতুন অ্যারে হিসেবে bros ভ্যারিয়েবলে সংরক্ষণ করা হচ্ছে।

}
