module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cevf3n02i3mntl1rvn10-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_9pc9'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'dX4tEsJq8FXa3JvjTo1ssh91RLbJIT5n'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
