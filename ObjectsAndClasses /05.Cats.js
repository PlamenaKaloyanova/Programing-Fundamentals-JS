function demo(input) {
class Cat{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`)
    }
}
for (const element of input) {
    let line=element.split(" ")
    let name,age;
    [name,age]=[line[0],line[1]]
    
    let cat=new Cat(name,age);
    cat.meow()

}
}
