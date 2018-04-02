require('./index.js');
const obj = {
    name: 'mike',
    children: [{
            name: 'tom',
            age: 15,
            hobbies: [
                1, 2, 3
        ],
        a: {
            b: {
                c: 'hello'
            }
        }
        },
        {
            name: 'john',
            age: 23,
            hobbies: [
                2, 3, 4
            ]
        }
    ]
};

console.log('With infinite depth');
console.log(obj);

console.log('With depth of', 2);
console.log.depth = 2;
console.log(obj);