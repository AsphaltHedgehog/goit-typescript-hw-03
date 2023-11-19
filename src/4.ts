class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random()
  }

  getSignature():number {
    return this.signature
  }
}

class Person {
  constructor(public key: number) {
    this.key = key;
  }

  getKey(): number {
    return this.key
  };
}

abstract class House {
  tenants: Person[] = [];
  constructor(protected door: boolean, protected key: Key) {
    this.door = door;
    this.key = key;
    this.tenants = [];
  } 
  
  comeIn(person: Person) {
    if (!this.door) {
      return console.log("door is closed");
    }
    this.tenants.push(person)
  }

  abstract openDoor(key: number):void
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key)
  }

  openDoor(key: number): void {
    if (key !== this.key.getSignature()) {
      return console.log('Invalid key');
    }
    this.door = true;
    console.log('Door is opened');
    
  }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key.getSignature());

house.openDoor(person.getKey());

house.comeIn(person);


export {};