

// ------------------------------------------------------------
// any type -- just becomes js

const person = {
    name: 'bt',
    age: 34,
    hobbies: ['sports', 'cooking'],
};

// ------------------------------------------------------------
// // enum
// enum Role { ADMIN, READ_ONLY, AUTHOR };
// // admin == 0, read_only == 1, author == 2

// // an assign any number, either just increment from the first element or set all of them individually
// // enum Role { ADMIN = 5, READ_ONLY = 24, AUTHOR = 0 };
// // admin == 5, read_only == 24, author == 0

// const person = {
//     name: 'bt',
//     age: 34,
//     hobbies: ['sports', 'cooking'],
//     role: Role.ADMIN    // 0
// };

// console.log(person.role);   // admin

// ------------------------------------------------------------
// tuples
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];// 2 elements, 1st - number, 2nd - str
// } = { 
//     name: 'bt',
//     age: 34,
//     hobbies: ['sports', 'cooking'],
//     // role: [2, 'author'] // as array
//     role: [2, 'author'] // as a tuple
// };

// person.role.push('admin'); // this would work if array
// person.role[1] = 10;    // this would also work if array

// person.role = [0, 'admin', 'user']; // won't work with tuple
// person.role.push('admin');  // will work with tuple, beware

// ------------------------------------------------------------

// const person = { // best way
//     name: "bt",
//     age: 34,
//     hobbies: ['sports', 'cooking']
// };

// // let favoriteActivies: string[];  // only if we will populate it later
// let favoriteActivies: any[]; // mixed

// // console.log('person: ', person); 

// for(const hobby of person.hobbies) {
//     console.log(hobby);  
//     // hobby.toLocaleUpperCase; // can use any string method on hobby now
// }

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