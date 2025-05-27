export default {
    source: ['src/design-tokens/**/*.json'],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'src/',
        files: [{
          destination: 'design-tokens.css',
          format: 'css/variables'
        }]
      },
      js: {
        transformGroup: 'js',
        buildPath: 'src/design-tokens/',
        files: [{
          destination: 'tokens.js',
          format: 'javascript/es6'
        }]
      }
    }
  };