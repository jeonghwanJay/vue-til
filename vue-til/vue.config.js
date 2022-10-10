const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    clinet: {
      overlay: false,
    },
  },
});
module.exports = {
  devServer: {
    client: {
      overlay: false,
    },
  },
};
