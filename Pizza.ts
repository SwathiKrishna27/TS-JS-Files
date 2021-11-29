class Pizza {
    name: string;
    price: number;
    toppings: Topping[];

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        this.toppings = [];
    }
    print() {
        console.log("Pizza Name:", this.name);
        console.log("Pizza Price:", this.price);

        this.toppings.forEach(topping => {
            topping.print();
        });
    }
    finalPizzaCost() {
        let price = this.price;
        this.toppings.forEach(topping => {
            price = price + topping.price;
        })
        return price;
    }


    addTopping(topping: Topping) {
        this.toppings.push(topping);
    }
}
class Topping {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log("Topping name:", this.name, ", price:", this.price);
    } 
}
class Order {
    items: Pizza[];

    constructor() {
        this.items = [];
    }
    addItem(item: Pizza) {
        this.items.push(item);
    }
    calculateTotalPrice() {
        let price = 0;
        this.items.forEach(item => {
            price = price + item.finalPizzaCost();
        })

        return price;
    }
    print() {
        console.log("Displaying Order");
        this.items.forEach(pizza => {
            console.log("----START------");
            pizza.print();
            console.log("-----END-----");
        });

        console.log("Total cost:", this.calculateTotalPrice());
    }
}
const extraCheese = new Topping("extraCheese", 30);
//extraCheese.print();
const extraSpicy = new Topping("extraSpicy", 10);
const vegPizza = new Pizza("Veg", 120);
vegPizza.addTopping(extraCheese);
vegPizza.addTopping(extraSpicy);
console.log("Final Pizza price:", vegPizza.finalPizzaCost());
//vegPizza.print();
const vegPizza1 = new Pizza("Veg", 120);
vegPizza1.addTopping(extraCheese);
const chickenPizza = new Pizza("Chicken", 230);
chickenPizza.addTopping(extraSpicy);
const order = new Order();
order.addItem(vegPizza);
order.addItem(vegPizza);
order.addItem(chickenPizza);
order.addItem(vegPizza1);
order.print(); 
