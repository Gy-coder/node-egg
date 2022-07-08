module.exports = (app) => {
  const store = {};
  app.sessionStore = {
    async get(key) {
      console.log(`------ store ------`);
      console.log(store);
      return store[key];
    },
    async set(key, value) {
      store[key] = value;
    },
    async destroy(key) {
      store[key] = null;
    },
  };
};
