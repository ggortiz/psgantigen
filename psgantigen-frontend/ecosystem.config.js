module.exports = {
    apps: [{
      name: "psgantigen frontend",
      script: "./server.js",
      env: {
        NODE_ENV: "development",
        // MONGO_HOST: "192.168.43.254",
        MONGO_HOST: "localhost",
        MONGO_PORT: "27017",
        MONGO_DB: "kioskDB",
        MONGO_USERNAME: "",
        MONGO_PASSWORD: "",
        JWT_KEY: "secret_this_should_be_longer",
        PORT: 9990
      },
      env_test: {
        NODE_ENV: "test",
      },
      env_staging: {
        NODE_ENV: "staging",
      },
      env_production: {
        NODE_ENV: "production",
        MONGO_HOST: "localhost",
        MONGO_PORT: "27017",
        MONGO_DB: "kioskDB",
        MONGO_USERNAME: "",
        MONGO_PASSWORD: "",
        JWT_KEY: "secret_this_should_be_longer",
        PORT: 80
      }
    }]
  }