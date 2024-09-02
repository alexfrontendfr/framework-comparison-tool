module.exports = {
  apps: [
    {
      name: "framework-comparison-tool",
      script: "./server/app.js",
      instances: "max",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
