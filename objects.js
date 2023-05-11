const object = {
  firstName: 'Roman',
  lastName: 'Bashtovyi',
  introduce: function () {
    return 'Hello, Im ' + object.firstName + ' ' + object.lastName + '!'
  },
}
module.exports = object
