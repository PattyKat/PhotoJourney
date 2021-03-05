/* eslint-disable no-console */
const faker = require('faker');
const model = require('../Routes/user/model.js');

const usersArr = [];

const arrayBuilder = () => {
  let i = 0;
  while (i < 10) {
    usersArr.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: '$2b$10$3UtxEDLP/9/q5OaOPTbdDe/Hfjjx8taZqrTNC3Q2O/Atl5jPNRDy6',
      pictures: [{ url: 'https://source.unsplash.com/400x400/?cat', description: faker.lorem.paragraph() }, { url: 'https://source.unsplash.com/400x400/?cat', description: faker.lorem.paragraph() }, { url: 'https://source.unsplash.com/400x400/?cat', description: faker.lorem.paragraph() }, { url: 'https://source.unsplash.com/400x400/?cat', description: faker.lorem.paragraph() }, { url: 'https://source.unsplash.com/400x400/?cat', description: faker.lorem.paragraph() }, { url: 'https://source.unsplash.com/400x400/?cat', description: faker.lorem.paragraph() }],
    });
    i += 1;
  }
};

arrayBuilder();
console.log(usersArr[0]);

const insertUsers = () => {
  model.create(usersArr)
    .then(() => console.log('successfull'));
};

insertUsers();
