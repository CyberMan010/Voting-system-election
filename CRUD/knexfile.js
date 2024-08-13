module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        database: 'Rami',
        user: 'postgres',
        password: 'Mes%3alnas'
      },
      migrations: {
        directory: './migrations'
      }
    }
  };