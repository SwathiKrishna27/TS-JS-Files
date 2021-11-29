class Cycle {
    Cname: string;
    Specifications: string;
    RentPHr: number;
    SubPM: number;

    constructor(Cname: string, Specifications: string, RentPHr: number, SubPM: number) {
        this.Cname = Cname;
        this.Specifications = Specifications;
        this.RentPHr = RentPHr;
        this.SubPM = SubPM;
    }
    print() {
        console.log("Cycle Name:", this.Cname);
        console.log("Specification is:", this.Specifications);
        console.log("Rent cost per Hour:", this.RentPHr);
        console.log("Sub Cost Per Months:", this.SubPM);
    }
}
class Rent extends Cycle {
    NoOfHr: number;
    constructor(NoOfHr: number, RentPHr: number) {
        super("Hero", "7 Gear Cycle", 5, 300);

        this.NoOfHr = NoOfHr;
        this.RentPHr = RentPHr;
    }

    addRent(value: Rent): void {
        this.NoOfHr += value.NoOfHr;
        this.RentPHr += value.RentPHr;
    }
    display(): void {
        console.log(" No Of Hours:", this.NoOfHr);
        console.log("Rent Cost Per Hour:", this.RentPHr);
    }
}

class Sub extends Cycle {
    term: number;

    constructor(term: number, SubPM: number) {
        super("Hero", "7 Gear Cycle", 5, 300);

        this.term = term;
        this.SubPM = SubPM;
    }
    add(value: Sub): void {
        this.term *= value.term;
        this.SubPM *= value.SubPM;
    }
    displayData(): void {
        console.log("No of Months:", this.term);
        console.log("Sub Price per Month:", this.SubPM);
    }
}
class Order {
    items: Cycle[];
    constructor() {
        this.items = [];
    }
    addItem(item: Cycle) {
        this.items.push(item);
    }
    print() {
        console.log("Available Models");
        this.items.forEach(cycle => {
            console.log("---------------------Start-----------------------");
            cycle.print();
            console.log("-----------------------END------------------------");
        });
    }
}
//Cycle Models
var c = new Cycle("Hero Cycle", "7 Gears", 5, 300);
c.print();
//var c2 = new Cycle(" Hero Pro Cycle", "RED", 7, 349);
//c2.print();

const order = new Order();
order.addItem(c);
//order.addItem(c2);
console.log(order);

// RENTAL calculation
var R = new Rent(2, 5);
R.display();
const rental = new Rent(2, 5);
console.log("No of Hours: " + rental.NoOfHr + " | RentTotal: " + rental.RentPHr);
const rental2 = new Rent(1, 5);
rental.addRent(rental2);
console.log("Total: " + rental.RentPHr);


// Subcription part
var s = new Sub(2, 300);
s.displayData();
//plan1
const plan = new Sub(1, 300);
console.log("term: " + plan.term + " | price: " + plan.SubPM);
//Plan 2
const plan2 = new Sub(2, 2);
plan.add(plan2);
console.log("term: " + plan.term + " | price: " + plan.SubPM);

//Cycle 2
var c2 = new Cycle(" Hero Pro Cycle", "RED", 7, 349);
c2.print();
order.addItem(c2);
console.log(order);

//sub calculation
var s = new Sub(3, 349);
s.displayData();
//plan1
const plano = new Sub(1, 349);
console.log("term: " + plano.term + " | price: " + plano.SubPM);
//Plan 2
const plano2 = new Sub(3, 3);
plano.add(plano2);
console.log("term: " + plano.term + " | price: " + plano.SubPM);