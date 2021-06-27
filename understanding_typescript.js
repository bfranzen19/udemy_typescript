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
                <script src="app.js" defer></script>
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

            should now look like this:
            {
              "name": "project_setup",
              "version": "1.0.0",
              "description": "",
              "main": "app.js",
              "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "start": "lite-server"
              },
              "author": "",
              "license": "ISC",
              "devDependencies": {
                "lite-server": "^2.6.1"
              }
            }

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



3 THE TYPESCRIPT COMPILER (& ITS CONFIGURATION)



4 NEXT-GENERATION JAVASCRIPT & TYPESCRIPT



5 CLASSES & INTERFACES



6 ADVANCED TYPES



7 GENERICS



8 DECORATORS



9 BUILD A DRAG & DROP PROJECT



10 MODULES & NAMESPACES



11 USING WEBPACK WITH TYPESCRIPT



12 3RD PARTY LIBRARIES & TYPESCRIPT



13 SELECT & SHARE A PLACE PROJECT



14 REACT & TYPESCRIPT



15 NODE + EXPRESS & TYPESCRIPT



16 COURSE ROUNDUP
