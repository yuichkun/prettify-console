module.exports = {
  name: 'Mike',
  children: [{
      name: 'Tom',
      age: 15,
      hobbies: [
        'Soccer', 'Tennis'
      ],
      some: {
        stupid: {
          nested: {
            object: ['hello', 'world', 3.1415, true]
          }
        }
      }
    },
    {
      name: 'John',
      age: 23
    }
  ]

}