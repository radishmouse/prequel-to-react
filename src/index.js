// console.log('Hello? Does this work?');
// console.log('Live reaload really works.');

// #1 Accept arguments instead
// of using global variables.
// function greet({name}) {
    // console.log(typeof name);
    // const {name} = whom;
    // const name = whom.name;
    // console.log(person);
    // console.log(person2)
    // Nooooo!
    // Person is defined outside
    // the function.

function greet({
    name, 
    address, 
}) {    
    // #2 Always return a value!
    return `Hello, ${name} of ${address}`;
}
const person = {
    name: 'Greta',
    address: 'Alpha Centauri',
    occupation: 'Hero'
};
function fromEarth(originalObject) {
    // add an address property
    // whose value is Earth
    // originalObject.address = 'Earth'
    // const theAddress = originalObject.address || 'Earth';
    const modifedVersionOfObject = {
        // defaults go before the 
        // object spread operator (...)
        address: 'Earth',
        ...originalObject,  // object spread syntax
        // address: theAddress,
        // "take all the key value pairs from the original
        // and sprinkle them right HERE."
        // name: originalObject.name,
        // occupation: originalObject.occupation,
        // address: originalObject.address || 'Earth',
        age: 'infinity',
        // overwrites go after the
        // the object spread operator (...)
        name: 'Oakley'
    }

    // then return that object
    return modifedVersionOfObject;
}
// console.log(greet(fromEarth(person)));
// console.log(greet(person));
// const person2 = {
//     name: 'Travis'
// };
// console.log(greet(person2));

const persons = [
    { name: 'Alice', address: 'Atlanta' },
    { name: 'Bob', address: 'Atlanta' },
    { name: 'Cthulu', address: 'Pacific' },
];

const modifiedPersons = [
    'Daria',
    ...persons,
];

function addressIsNotPacfic(person) {
    return person.address !== 'Pacific';
}

// console.log(addressIsNotPacfic(persons[2]));

// const noPacifics = persons.filter((person) => {
//     return person.address !== 'Pacific';
// });

// const noPacifics = persons.filter(person => person.address !== 'Pacific');
const noPacifics = persons.filter(({address}) => address !== 'Pacific');

console.log(noPacifics);

// console.log(persons.map(greet));



// const newArray = [];
// for (let onePerson of persons) {
//     newArray.push(greet(onePerson));
// }
// console.log(newArray);

// console.log(modifiedPersons);



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
