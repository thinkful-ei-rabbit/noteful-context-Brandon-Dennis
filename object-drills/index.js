'use strict';

// part 1
const loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return this.water / this.flour * 100;
    },
}

console.log(loaf.hydration());

// part 2
const quack = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5,
}

for(const prop in quack) {
    console.log(quack)
}

// part 3
const menu = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
}

console.log(menu.meals[3]);

// part 4
const people = [
    {
        name: 'Bill',
        jobTitle: 'accountant',
    },
    {
        name: 'Sam',
        jobTitle: 'manager',
    },
    {
        name: 'Tom',
        jobTitle: 'teacher',
    },
    {
        name: 'Cory',
        jobTitle: 'hearder',
    },
]

people.forEach(obj => console.log(obj))

// step 5

const workers = [
    {
        name: 'Bill',
        jobTitle: 'accountant',
        boss: 'Sam',
    },
    {
        name: 'Sam',
        jobTitle: 'manager',
    },
    {
        name: 'Tom',
        jobTitle: 'teacher',
        boss: 'Sam',
    },
    {
        name: 'Cory',
        jobTitle: 'hearder',
        boss: 'Sam',
    },
]

workers.forEach(workers => {
    if(workers.boss) {
        console.log(`${workers.jobTitle} ${workers.name} reports to ${workers.boss}`);
    } else {
        console.log(`${workers.jobTitle} ${workers.name} doesn't report to anybody`)
    }
})

// step 6
const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
}

let word = 'ca';

function decode(word) {
    if(typeof(word[cipher[word[0]]-1]) === 'undefined') {
        return ' '
    } 
    return word[cipher[word[0]]-1]
}

console.log(decode(word));

let string = 'apples beans cats doors have nothing but'

function decodeWords(string) {
    let results = ''
    const array = string.split(' ')
    for(let i = 0; i < array.length; i++) {
        results += decode(array[i])
    }
    return results
}

// part 7

function createCharacter(name, nickName, race, origin, attack, defense) {
    return {
        name,
        nickName,
        race,
        origin,
        attack,
        defense,
        describe() {
            console.log(`${this.name} is a ${this.race} from ${this.origin}`)
        },
        evaluateFight(character) {
            let damageGiven = 0
            let damageTaken = 0
            (this.attack - character.defense) > 0 ? damageGiven = (this.attack - character.defense) : damageGive = 0;
            (character.attack - this.defense) > 0 ? damageTaken = (character.attack - this.defense) : damageTaken = 0;
            console.log(`Your opponent takes ${damageGiven} and you receive ${damageTaken} damage`)
        }
    } 
}

const characterArray = [
    createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
    createCharacter('Frodo Baggins', 'fordo', 'Hobbit', 'The Shire', 3, 2),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
]

console.log(characterArray.find(search => search.nickName === 'aragorn'))

const hobbits = characterArray.filter(hobbits => hobbits.race === 'Hobbit')
console.log(hobbits)

const attack = characterArray.filter(attack => attack.attack > 5)
console.log(attack)

// step 8a
const Database = {
    store: {
        HEROES: [
            {id: 1, name: 'Captain America', squad: 'Avengers'},
            {id: 2, name: 'Iron Man', squad: 'Avengers'},
            {id: 3, name: 'Spiderman', squad: 'Avengers'},
            {id: 4, name: 'Superman', squad: 'Justice League'},
            {id: 5, name: 'Wonder Woman', squad: 'Justice League'},
            {id: 6, name: 'Aquaman', squad: 'Justice League'},
            {id: 7, name: 'Hulk', squad: 'Avengers'},
        ]
    },
    findOne(query) {
        return this.store.HEROES.find(x => x.id === query.id);
    },
};       

let query = {id: 3}
console.log(Database.findOne(query))