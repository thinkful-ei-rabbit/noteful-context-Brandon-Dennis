'use strict';
/*
function decode(encoded) {
    const cipher = {
        a: 2,
        b: 3,
        c: 4,
        d: 5
    };

    let results ='';
    for(let key in cipher) {
        if(encoded[0] === key) {
            results = encoded[cipher.key];
        } else {
            results = ' ';
        }
    }

    console.log(results);

}


decode('apple');
*/

function createCharacter(att1, att2, att3, att4, att5, att6) {

    return {
        name: att1,
        nickname: att2,
        race: att3,
        origin: att4,
        attack: att5,
        defense: att6,
        describe: function() {
            return console.log(`${this.name1} is a ${this.race} from ${this.origin}`)
        },
        evaluateFight: function(character) {
            let damageGiven = (this.attack - character.defense > 0 ? this.attack - character.defense: 0); 
            let damageTaken = (this.defense - character.attack > 0 ? this.attack - character.defense: 0); 

            return (console.log(`Your oppenent takes ${damageGiven} and you recieve ${damageTaken}`)

        }

    }

} 

const charactersArray = []
charactersArray.push(createCharacter('Gandalf the White','gandalf', 'Wizard', 'Middle Earth', 10, 6));
charactersArray.push(createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1));
charactersArray.push(createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2));
charactersArray.push(createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 10, 6));
charactersArray.push(createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5));
charactersArray.push(createCharacter('Brandon', 'Brando', 'Man', 'Cave', 2, 3));

charactersArray.find(x => )