// Soldier
class Soldier {
  constructor(health=0, strength=0){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength
  }
  
  receiveDamage(damage){
    this.health -= damage 
  }
}


class Viking extends Soldier {
  constructor(name, health, strength,){
  super(health, strength)
    this.name = name;
  }
 
  receiveDamage(damage){
    super.receiveDamage(damage)
    if( this.health > 0){
      return `${this.name} has received ${damage} points and has ${this.health} left`;
    } else{
     return  `${this.name} has died in act of the combat`;
       }
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}

let pim = new Viking ("Pim", 9, 5);
console.log(pim.health);
console.log(pim.receiveDamage(10));
console.log(pim.health);

// Saxon
class Saxon extends Soldier {
constructor(health, strength){
super(health, strength)}


receiveDamage(damage){
  if( this.health > 0){
    return`A Saxon has received ${damage} points of damage`;
  } else{
   return `A Saxon has died in combat`;
     }
} 
}

let alex = new Saxon (25,28)
console.log("Alex", alex.health);
[0, 1, 5, 8, 11].forEach(damage=>(console.log(new Saxon(5, 28).receiveDamage(damage))));
  //for(let damage of [0, 1, 5, 8 , 11]) alex.receiveDamage(damage)
console.log(alex.health);

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
