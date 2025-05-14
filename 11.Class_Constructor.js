//class constructor

class car{
    constructor(brand,price,speed,capacity,color){
        this.brand = brand
        this.price = price
        this.speed = speed
        this.capacity = capacity
        this.color = color
    }
    result(){
        console.log(`I prefer ${this.brand} car\nIts price minimum ${this.price}\nIt should run ${this.speed}\nThe maximum of ${this.capacity} capacity\nAnd I would like ${this.color} color`);
    }
}
const output = new car("BMW","25 lakhs","200 kmph","5 seater","white")
output.result()