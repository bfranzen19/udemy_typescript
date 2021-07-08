// ------------------------------------------------------------





// ------------------------------------------------------------

const person = { // best way
    name: "bt",
    age: 34,
    hobbies: ['sports', 'cooking']
}

// let favoriteActivies: string[];  // only if we will populate it later
let favoriteActivies: any[]; // mixed

// console.log('person: ', person); 

for(const hobby of person.hobbies) {
    console.log(hobby);  
    // hobby.toLocaleUpperCase; // can use any string method on hobby now
}

// ------------------------------------------------------------

// const person: object = { // : object is more generic but cannot grab keys

// const person: {
//     name: string; // tells ts the types. not necessary. 
//     age: number;
// } = { // {} ts notation of specialized obj type

//  const person: {} = { // {} ts notation of specialized obj type

// const person = { // best way
//     name: "bt",
//     age: 34
// }

// console.log('person: ', person.nickname); // throws error
// console.log('person: ', person); // semi colon after each line when hovered


// ------------------------------------------------------------

// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//     const result = n1+n2;

//     if(showResult) {
//         console.log(phrase + result);
//     } else {
//         return result;
//     }
// }

// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = `result is: `;

// add(number1, number2, printResult, resultPhrase);

// ------------------------------------------------------------

// function add(n1: number, n2: number) {
//     /* js check for type */
//     if(typeof n1 !== 'number' || typeof n2 !== 'number') {
//         throw new Error('incorect input!');
//     }

//     return n1 + n2;
// }

// const number1 = 5; /* "5" */
// const number2 = 2.8;

// const result = add(number1, number2);
// console.log('result: ', result);