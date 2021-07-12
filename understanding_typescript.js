1 GETTING STARTED
- ts is a js superset - builds on js but adds new features and advantages
- ts cannot be executed by the browser or node
- environments where we can execute js do not support ts
- ts is a programming language but also a tool - powerful compiler that runs over your code to compile ts code to js
- ts --> js
- ts adds new features via the compiler
- adds types to the js lanaguage that gives you the opportunity to type things.
- extra error checking
- any time you access the value of an input element in js, it is always a string.
- can convert a variable to a number by add + in front of the variable
- ! means the variable will never be null
- :type (example -- :number) typecasts to this type
- ts advantages:
    - types
    - next-gen js features (compiled down for older browsers)
    - non-js features like interfaces and generics
    - meta-programming features like decorators
    - rich configuration options
    - modern tooling that helps even in non-ts projects

- project setup
    - project folder
        - index.html
            - html:5 in vscode will give you boilerplate
            - add script tag in head
                `<script src="app.js" defer></script>`
        - app.ts
            - typescript file
            - to compile in vs code terminal
                    tsc app.js
                - kicks off the logic from app.ts in a new app.js file

    - can double click the html file in the finder window to open in the browser to see changers

    - installing lite-server to avoid manual reloads/recompiles:
        - install npm in the project
            npm init
            - setup config file (can just accept all defaults by hitting enter for each)
        - open package.json file created by npm init command
        - install lite-server
            npm install --save-dev lite-server
        - when install completes:
            - open package.json file
            - in the "scripts" object, add a comma at the end of the "test" line
            - add "start": "lite-server" to the object

    - using lite-server
        - in the terminal, start by using
            npm start

        - make changes
        - recompile
            tsc app.ts
        - see changes at http://localhost:3000/

    - stopping lite-server
        - in the terminal window, hit ctrl + c

    - lite-server
        - simple development server which always servers the index.html file on localhost:3000
        - can go to http://localhost:3000/ and see code
        - updates anytime any file in the directory updates
        - saves us from reloading to see changes (but still must recompile with tsc app.ts)


2 TYPESCRIPT BASICS & BASIC TYPES
- using types
    - can write own types
    - core types:
        - number
            - in both, there is only one number type (no special type for int or float)
                - exmples: 1, 5.3, 10
            - all numbers, no differentiation between integers and floats
        - string
            - '', "", ``
            - all text values
                - exmples:'hi', "hi", `hi`
        - boolean
            - true or false
            - just true or false, no truthy or falsy values (like 0 or 1)

    - don't have app.js and app.ts open at the same time, that may cause errors. just close the js file.

- ts types vs js types
    - js uses "dynamic types", resolved at runtime
    - ts uses "static types", set during development

- important: type casting
    - in ts, you work with types like string or number all the time
        - string, not String
        - number, not Number
    - core primitives in ts are all lowercase

- working with numbers, strings, & booleans

- type assignment & type inference
    - type inference: ts tries to understand what type you have in a variable / constant
    - seen in the function params definitions
        function add(n1: number, n2: number, showResult: boolean, phrase: string) {}

        const number = 5;
        // can also set this variable like this -- let number1: number = 5;
        // this is considered bad practice UNLESS you create the varaible without a value
        let number1: number; // eventually, i will store a number here
        number1 = 5;

        this is the same as:
        let number1 = 5;    // tells ts that this is a number variable

        this avoides this error:
        let number1;    // no type, i can store anything in this variable
        number1 = '5';

- object types
    - any js object, more specific types (types of objects) are possible
        { age: 30 }

    - typescript uses key, type pairs instead of key, value pairs

- nested objects & types
    - object types can also be created for nested objects:
        // js object
        const product = {
            id: 'abc1',
            price: 12.99,
            tags: ['great-offer', 'hot-and-new'],
            details: {
                title: 'red carpet',
                description: 'great carpet -- almost brand new!'
            }
        }

        // this would be the type of this object
        {
            id: string;
            price: number;
            tags: string[];
            details: {
                title: string;
                description: string;
            }
        }

- arrays types
    - any js array, type can be flexible or struct (regarding element types)
        [1,2,3]
    - ts: type[] --> string[]

- working with tuples
    - added by ts: fixed-length, fixed-type array
        [1,2]
    - use if you know you want a very specific, unchanged structure on an array

- working with enums
    - specific identifiers, global constants, that will be represented as numbers but with a human-readable label
    -  added by ts: automatically enumerated global constant identifiers
        enum {NEW, OLD}

- the "any" type
    - can store anything
    - *
    - any kind of value, no specific type assignment

- union types

- literal types

- type aliases / custom types

- function return types & void

- functions as types

- function types & callbacks

- the "unknown" type

- the "never" type


3 THE TYPESCRIPT COMPILER (& ITS CONFIGURATION)
- using "watch mode"

- compiling the entire project / multiple files

- including & excluding files

- setting a compilation target

- understanding ts core libs

- more configuration & compilation options

- working with source maps

- rootDir & outDir

- stop emitting files on compilation errors

- strict compilation

- code quality options

- debugging with vscode


4 NEXT-GENERATION JAVASCRIPT & TYPESCRIPT
- let and const

- arrow functions

- default function params

- the spread operator ( ... )

- rest params

- array & object destructuring

- how code gets compiled


5 CLASSES & INTERFACES
- what are classes

- create a class

- compiling to js

- constructor functions & the "this" keyword

- "private" & "public" access modifiers

- shorthand initialization

- "readonly" properties

- inheritance

- overriding properties & the "protected" modifier

- getters & setters

- static methods & properties

- abstract classes

- singleton & private constructors

- classes -- a summary

- first interface

- using interfaces wiwth classes

- why interfaces

- readonly interface properties

- extending interfaces

- interfaces as function types

- optional parameters & properties

- compiling intercaes to js


6 ADVANCED TYPES
- intersection types

- more on type guards

- discriminated unions

- type casting

- index properties

- function overloads

- optional chaining

- nullish coalescing


7 GENERICS
- built-in generics & what are generics

- creating a generic function

- working with constraints

- another generic function

- the "keyof" constraint

- generic classes

- a first summary

- generic utility types

- generic types vs union types


8 DECORATORS
- a first class decorator

- working with decorator factories

- building more useful decorators

- adding multiple decorators

- diving into property decorators

- access & parameter decorators

- when do decorators execute?

- returning (& changing) a class in a class decorator

- other decorator return types

- example: creating an "autobind" decorator

- validation with decorators -- first steps

- validation with decorators -- finished

- fixing a validator bug


9 BUILD A DRAG & DROP PROJECT
- getting started

- DOM element selection & OOP

- interacting with DOM elements

- creating & using an "autobind" decorator

- fetching user input

- creating a re-usable validtion functionality

- rednering project lists

- managing application state with singletons

- more classes & custom types

- filtering projects with enums

- adding inheritance & generics

- rendering project items with a Class

- using a getter

- utilizing interfaces to implement drag & drop

- drag events & reflecting the current state in the UI

- adding a droppable area

- finishing drag & drop


10 MODULES & NAMESPACES
- writing modules -- your options

- working with namespaces

- organizing files & folders

- a problem with namespace imports

- inportant: use chrome or firefox

- using ES modules

- understanding various import & export syntaxes

- how does code in modules execute?


11 USING WEBPACK WITH TYPESCRIPT
- what is webpack & why do we need it?

- installing webpack & important dependencies

- adding entry & output configuration

- adding ts support with the ts-loader package

- finishing the setup & adding webpack-dev-server

- adding a production workflow


12 3RD PARTY LIBRARIES & TYPESCRIPT
- using js libraries with ts

- using "declare" as a last resort

- no types needed: class-transformer

- ts-embracing class-validator


13 SELECT & SHARE A PLACE PROJECT
- project setup

- getting user input

- setting up a google api key

- using axios to fetch coordinates for an entered address

- rendering a map with google  maps (including types)

- working with maps without a credit card


14 REACT & TYPESCRIPT
- setting up a react + ts project

- how do react & ts work together?

- getting user input with "refs"

- cross-component communication

- working with state & typescript

- managing state better

- more props & state work

- adding styling

- types for other react features (redux or routing)


15 NODE + EXPRESS & TYPESCRIPT
- executing ts code with node.js

- setting up a project

- finished setup & working with types (in node + express app)

- adding middleware & types

- working with controllers & parsing request bodies

- more CRUD operations


16 COURSE ROUNDUP
