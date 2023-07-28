const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'hakaton2023',
    manifestCrossorigin: 'use-credentials',
  },
});
