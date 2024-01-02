class Animal{
    constructor(name,age)
    {
        this.name = name;
        this.age=age;
    }
    eat()
    {
        return `${this.name} is eating`
    }
    isSuperCute()
    {
        return this.age<=1;
    }
    isCute()
    {
        return true;
    }

}
class Dog extends Animal{
    constructor(name,age,speed)
    {
        super(name,age) //yesle name ra age chai animal class battai linxa
        this.speed = speed // speed class declare garnu parxa

    }
    run(){
        return `${this.name } is running at speed ${this.speed}`
    }
    eat()
    {
        return ` Modified Eat : ${this.name} is eating`
    }
}

const tommy = new Dog("tommy",3,45)
console.log(tommy.isCute());
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());