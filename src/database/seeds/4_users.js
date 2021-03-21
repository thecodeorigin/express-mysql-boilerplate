const faker = require('faker');
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      const users = [
        { email: 'superadmin@gmail.com', name: 'superadmin', password: '123456', role_id: 1 },
        { email: 'admin@gmail.com', name: 'admin', password: '123456', role_id: 2 },
        { email: 'moderator@gmail.com', name: 'moderator', password: '123456', role_id: 3 },
        { email: 'user@gmail.com', name: 'user', password: '123456', role_id: 4 },
      ];
      for (let i = 0; i < 100; i++) {
        const email = faker.internet.email();
        const name = faker.name.findName();
        const password = '123456';
        const role_id = faker.random.number({ min: 2, max: 4 });
        users.push({ email, name, password, role_id });
      }
      return knex('users').insert(users);
    });
};
