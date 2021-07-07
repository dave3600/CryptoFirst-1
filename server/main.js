const express = require("express")
const cors = require("cors")

const app = express()

app.get("/jobs",function(req,res){
    
    
    res.send("welcome")
})

app.listen(3000)

class Animal{
    static _a()
    {
        console.log("_a() called")
    }
    a()
    {
        console.log("a() called")
    }
}


class Cat extends Animal{
    static _c(){
        console.log("_c() called")
    }
    c(){
        console.log("c() called")
    }
}
function done(){
    console.log("done");
}
var d =new done();
var animal = new Animal()
var cat = new Cat()

console.log(Animal._a())
console.log(animal.a())



console.log(animal.__proto__ === Animal.prototype)
console.log(Cat.__proto__ === Animal)
console.log(Cat.prototype.__proto__ === Animal.prototype)
console.log(cat.__proto__ === Cat.prototype)
console.debug(cat)
console.debug(done)
console.debug(d)
