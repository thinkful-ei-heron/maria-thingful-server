module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DB_URL || 'postgresql://thingful@localhost/thingful',
  TEST_DATABASE_URL: process.env.TEST_DB_URL || 'postgresql://dunder_mifflin@localhost/thingful-test',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
}
