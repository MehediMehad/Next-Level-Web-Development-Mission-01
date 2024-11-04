{
  // Generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  // Manually define the keys of `Vehicle` type.
  type OwnerManually = "bike" | "car" | "ship";

  // Use `keyof` operator to automatically create a union of keys from `Vehicle`.
  type Owner = keyof Vehicle; // This will be equivalent to "bike" | "car" | "ship".

  // Example of using the `Owner` type.
  const person1: Owner = "ship"; // Valid, as "ship" is a key of `Vehicle`.

  // A generic function that retrieves a property value from an object.
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key]; // Accessing the property of the object using the key.
  };

  // Define an object `user` with different properties.
  const user = {
    name: "Mr. Persian",
    age: 26,
    address: "ctg",
  };

  // Example usage of the `getPropertyValue` function to get the user's name.
  const result1 = getPropertyValue(user, "name"); // This will return "Mr. Persian".

  // ! Define a type `Product` with specific properties.
  type Product = {
    id: number;
    title: string;
    price: number;
  };

  // Use `keyof` to create a type for the keys of `Product`.
  type ProductKey = keyof Product; // This will be equivalent to "id" | "title" | "price".

  // Example of using the `ProductKey` type.
  const productKey: ProductKey = "price"; // Valid, as "price" is a key of `Product`.

  // Generic function to get a property value from a product object.
  const getProductProperty = <P, K extends keyof P>(product: P, key: K) => {
    return product[key]; // Accessing the property of the product object using the key.
  };

  // Define a product object.
  const product = {
    id: 1,
    title: "Laptop",
    price: 999.99,
  };

  // Example usage of the `getProductProperty` function to get the product's title.
  const productTitle = getProductProperty(product, "title"); // This will return "Laptop".
}
