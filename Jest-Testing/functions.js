const axios = require('axios');


const { default: axios } = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Vyom' } 
        user['lastName'] = 'Sharma';
        return user
    },
    fetchUser: () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.data)
        .catch(err => 'There is an error')
    }
}

module.exports = functions;