// test-data/users.js

const users = {
  demoUser: {
    username: 'demouser',
    password: 'testingisfun99',
    description: 'Standard user with clean state',
  },
  imageNotLoadingUser: {
    username: 'image_not_loading_user',
    password: 'testingisfun99',
    description: 'Homepage loads with broken images',
  },
  existingOrdersUser: {
    username: 'existing_orders_user',
    password: 'testingisfun99',
    description: 'User with pre-populated orders in cart',
  },
  favUser: {
    username: 'fav_user',
    password: 'testingisfun99',
    description: 'User with 5 favourite products',
  },
  lockedUser: {
    username: 'locked_user',
    password: 'testingisfun99',
    description: 'Locked account - cannot log in',
  },
};

module.exports = { users };
