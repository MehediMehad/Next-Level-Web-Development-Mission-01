// Learning Function

// Normal Function
function add(num1: number, num2: number = 10): number[] {
    return [num1 + num2];
}

// Arrow Function
const addArrow= (num1: number, num2: number):string => `${num1 + num2}`

// 
const poorUser = {
    name: "Mehad",
    balance: 0,
    addBlanc(balance:number): string{
        return `My new Balance is: ${this.balance+ balance}`
    }
}


// 
const array = [10, 20, 30]
const newArray: number[] = array.map((item: number): number => item* item)