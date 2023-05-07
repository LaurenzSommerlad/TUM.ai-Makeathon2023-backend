module.exports = ({ env }) => ({
  url: env('HEROKU_URL'),
  app: {
    keys: env.array('APP_KEYS')
  },
});
