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
      password: '$2b$10$e.No4FZ3EpkD1yXMugG8JuZWUi/1Iz5kByocfspqbLYvZS2.sSKVy',
      pictures: [{ url: 'https://source.unsplash.com/400x400/?cat', description: faker.lorem.paragraph() }, { url: 'https://source.unsplash.com/400x400/?puppy', description: faker.lorem.paragraph() }, { url: 'https://source.unsplash.com/400x400/?corgi', description: faker.lorem.paragraph() }, { url: 'https://source.unsplash.com/400x400/?sloth', description: faker.lorem.paragraph() }, { url: 'https://source.unsplash.com/400x400/?pug', description: faker.lorem.paragraph() }, { url: 'https://source.unsplash.com/400x400/?kitten', description: faker.lorem.paragraph() }],
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
