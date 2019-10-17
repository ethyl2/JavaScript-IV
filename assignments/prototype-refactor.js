class GameObject {
    constructor(gameObjAttrs) {
        this.createdAt = gameObjAttrs.createdAt;
        this.name = gameObjAttrs.name;
        this.dimensions = gameObjAttrs.dimensions;  
    }
    destroy = function() {
        return `${this.name} was removed from the game. ☠️`;
    }
}
 
class CharacterStats extends GameObject {
    constructor(charStatsAttrs) {
        super(charStatsAttrs);
        this.healthPoints = charStatsAttrs.healthPoints;
    }
    takeDamage = function() {
        return `${this.name} took damage. 🤕`;
    }
}
  
class Humanoid extends CharacterStats {
    constructor(humanoidAttrs) {
        super(humanoidAttrs);
        this.team = humanoidAttrs.team;
        this.weapons = humanoidAttrs.weapons;
        this.language = humanoidAttrs.language;
    }
    greet = function() {
        return `${this.name} offers a greeting 👋 in ${this.language}.`;
    }
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 1,
    height: 1,
    },
    healthPoints: 5,
    name: '⚗✨ Bruce',
    team: '👬✨ Mage Guild',
    weapons: [
    '⚚ Staff of Shamalama',
    ],
    language: '👅 Common Tongue',
});
  
const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 15,
    name: '⚔️ Sir Mustachio',
    team: '🏰 The Round Table',
    weapons: [
    '🗡️ Giant Sword',
    '🛡️ Shield',
    ],
    language: '👅 Common Tongue',
});
  
const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 10,
    name: '🏹 Lilith',
    team: '🌲🌲🌲 Forest Kingdom',
    weapons: [
    '🏹 Bow',
    '🗡️ Dagger',
    ],
    language: '🎶 Elvish',
});
  
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
  
class Villain extends Humanoid {
    constructor(villainAttrs) {
        super(villainAttrs);
        this.superpower = villainAttrs.superpower;
    }
    attack(opponent) {
        opponent.healthPoints--;
        if (opponent.healthPoints < 1) {
            opponent.destroy();
            return `${this.name} has eliminated ${opponent.name}!`;
        }
        else {
            return `${this.name} has reduced ${opponent.name}'s health points to ${opponent.healthPoints}`;
        }
    }
}
  
const bozo = new Villain( {
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 3,
    name: '🃏 Bozo the Court Jester',
    team: '👑 Inner Court',
    weapons: [
    '😜 Bad Jokes',
    '🍭 Marotte',
    ],
    language: '🇬🇧 Olde English',
    superpower: 'cleverness',
});
  
console.log(bozo.name);
  
class Hero extends Humanoid {
    constructor(heroAttrs) {
        super(heroAttrs);
        this.costume = heroAttrs.costume;
    }
    defend = function(opponent) {
        opponent.healthPoints--;
        if (opponent.healthPoints < 1) {
        opponent.destroy();
        return `${this.name} has fought bravely and eliminated ${opponent.name}!`;
        } else {
        return `${this.name} used a ${this.weapons[0]} and has reduced ${opponent.name}'s health points to ${opponent.healthPoints}.`;
        }
    }
}

const paulBunyan = new Hero({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 8,
    },
    healthPoints: 15,
    name: '👨‍ Paul Bunyan',
    team: 'The Green Giants',
    weapons: [
    '🏌️ Club',
    '💪 Brute Force',
    ],
    language: '🗣️ Shouting',
    costume: '👕 plaid',
});

console.log(paulBunyan.costume);

console.log(bozo.attack(paulBunyan));
for (let i=0; i<3; i++) {
    console.log(paulBunyan.defend(bozo));
}