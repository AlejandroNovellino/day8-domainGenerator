let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = ['.com','.net','.us','.io']

// Just generating all the possibles urls
console.log("All the options:");
pronoun.forEach(element1 => 
        adj.forEach(element2 => 
            noun.forEach(element3 => 
                extension.forEach(element4 => 
                    console.log(`${element1}${element2}${element3}${element4}`)))));

// now with the url hack
console.log("\nWith the hack:");
// the arrays used, are "pronoun", "adj" and "noun"
let end = ['Us', 'car', 'eu'];
let hacks = ['us', 'eu'];

pronoun.forEach(element1 => 
        adj.forEach(element2 => 
            noun.forEach(element3 => 
                end.forEach(element4 => {
                    // verify if the last element is in hacks
                    let hackFound = false;
                    hacks.forEach(hack => {
                        if(`${element1}${element2}${element3}${element4}`.toLocaleLowerCase().endsWith(hack)) hackFound = true;
                    });
                    // now we print the line
                    (hackFound) ? console.log(`${element1}${element2}${element3}.${element4.toLocaleLowerCase()}`) : console.log(`${element1}${element2}${element3}${element4}.com`);
                }))));
