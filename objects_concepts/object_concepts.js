// JavaScript (JS) classes provide a way to create objects
// with shared methods and properties. 
// They serve as a blueprint for creating objects with similar characteristics.

class Contact {
  firstName;
  lastName;

  constructor() {
    console.log(
      `Hello, here I am a definition
      I can only get called 
      When initializing a new object
      with new new new`
    );
  }
}

// Out of this template new objects can be created. 
// let myContact = new Contact();


// Constructor: 
// Constructor is a function inside a class
// It gets called everytime a new Object is initialized. 

class Material {
  firstMaterial;
  secondMaterial;
  constructor(firstM, secondM){
    this.firstMaterial = firstM
    this.secondMaterial = secondM
  }
}


let materialInstance = new Material("wood","plastic")


// Test out if you can have a class and a superclass. 
// What happens if both the superClass and the class have a constructor
// and an object gets initiated?

class TheSuperClass{
  constructor(){
   console.log("Hello toooo I am printing from SuperClass");
  }
}

class NormalClass extends TheSuperClass {
  constructor(){
    super()
    console.log("Hello I am printing from NormalClass");
  }
}

let theNormal = new NormalClass()