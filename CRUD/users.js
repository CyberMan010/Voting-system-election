const knex = require('./db');

// CREATE
async function createUser(user) {
  return await knex('users').insert(user).returning('*');
}

// READ
async function getAllUsers() {
  return await knex('users').select('*');
}

async function getUserById(id) {
  return await knex('users').where('id', id).first();
}

// UPDATE
async function updateUser(id, updates) {
  return await knex('users').where('id', id).update(updates).returning('*');
}

// DELETE
async function deleteUser(id) {
  return await knex('users').where('id', id).del();
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};