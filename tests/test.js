
class ourSuperClass {

  oneRandomFunction() {
    console.log("our randomFunction from Super printed something");
  }
}

class ourChildClass extends ourSuperClass {

  constructor(){
    super()
    this.oneRandomFunction()
  }
  
  randomFunction() {
    this.oneRandomFunction()
    console.log("our randomFunction from Child printed something");
  }

}


let myObject = new ourChildClass();

