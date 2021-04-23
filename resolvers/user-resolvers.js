const { users } = require('../fixtures/users');

const getUser = ({ id: userId }) => {
  return users.filter(({ id }) => id === userId)[0];
};

const retrieveUsers = ({ plant }) => {
  if (plant) {
    return users.filter(user.plant === plant);
  } else {
    users;
  };
};

const updateUser = ({id, name, age}) => {
  users.map(user => {
    if (user.id === id) {
      user.name = name;
      user.age = age;
      return user;
    }
  });
  return users.filter(user => user.id === id)[0];
};

module.exports = { getUser, retrieveUsers, updateUser };
