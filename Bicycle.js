var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cycle = /** @class */ (function () {
    function Cycle(Cname, Specifications, RentPHr, SubPM) {
        this.Cname = Cname;
        this.Specifications = Specifications;
        this.RentPHr = RentPHr;
        this.SubPM = SubPM;
    }
    Cycle.prototype.print = function () {
        console.log("Cycle Name:", this.Cname);
        console.log("Specification is:", this.Specifications);
        console.log("Rent cost per Hour:", this.RentPHr);
        console.log("Sub Cost Per Months:", this.SubPM);
    };
    return Cycle;
}());
var Rent = /** @class */ (function (_super) {
    __extends(Rent, _super);
    function Rent(NoOfHr, RentPHr) {
        var _this = _super.call(this, "Hero", "7 Gear Cycle", 5, 300) || this;
        _this.NoOfHr = NoOfHr;
        _this.RentPHr = RentPHr;
        return _this;
    }
    Rent.prototype.addRent = function (value) {
        this.NoOfHr += value.NoOfHr;
        this.RentPHr += value.RentPHr;
    };
    Rent.prototype.display = function () {
        console.log(" No Of Hours:", this.NoOfHr);
        console.log("Rent Cost Per Hour:", this.RentPHr);
    };
    return Rent;
}(Cycle));
var Sub = /** @class */ (function (_super) {
    __extends(Sub, _super);
    function Sub(term, SubPM) {
        var _this = _super.call(this, "Hero", "7 Gear Cycle", 5, 300) || this;
        _this.term = term;
        _this.SubPM = SubPM;
        return _this;
    }
    Sub.prototype.add = function (value) {
        this.term *= value.term;
        this.SubPM *= value.SubPM;
    };
    Sub.prototype.displayData = function () {
        console.log("No of Months:", this.term);
        console.log("Sub Price per Month:", this.SubPM);
    };
    return Sub;
}(Cycle));
var Order = /** @class */ (function () {
    function Order() {
        this.items = [];
    }
    Order.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Order.prototype.print = function () {
        console.log("Available Models");
        this.items.forEach(function (cycle) {
            console.log("---------------------Start-----------------------");
            cycle.print();
            console.log("-----------------------END------------------------");
        });
    };
    return Order;
}());
//Cycle Models
var c = new Cycle("Hero Cycle", "7 Gears", 5, 300);
c.print();
//var c2 = new Cycle(" Hero Pro Cycle", "RED", 7, 349);
//c2.print();
var order = new Order();
order.addItem(c);
//order.addItem(c2);
console.log(order);
// RENTAL calculation
var R = new Rent(2, 5);
R.display();
var rental = new Rent(2, 5);
console.log("No of Hours: " + rental.NoOfHr + " | RentTotal: " + rental.RentPHr);
var rental2 = new Rent(1, 5);
rental.addRent(rental2);
console.log("Total: " + rental.RentPHr);
// Subcription part
var s = new Sub(2, 300);
s.displayData();
//plan1
var plan = new Sub(1, 300);
console.log("term: " + plan.term + " | price: " + plan.SubPM);
//Plan 2
var plan2 = new Sub(2, 2);
plan.add(plan2);
console.log("term: " + plan.term + " | price: " + plan.SubPM);
//order 2
var c2 = new Cycle(" Hero Pro Cycle", "RED", 7, 349);
c2.print();
order.addItem(c2);
console.log(order);
//sub calculation
var s = new Sub(3, 349);
s.displayData();
//plan1
var plano = new Sub(1, 349);
console.log("term: " + plano.term + " | price: " + plano.SubPM);
//Plan 2
var plano2 = new Sub(3, 3);
plano.add(plano2);
console.log("term: " + plano.term + " | price: " + plano.SubPM);
