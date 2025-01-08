export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-no-unsupported-browser-features'
  ],
  syntax: 'scss',
  rules: {
    'plugin/no-unsupported-browser-features': [true, {
      browsers: ['> 1%', 'Last 2 versions'],
      ignore: ['rem'],
      ignorePartialSupport: true,
      severity: 'warning'
    }]
  },
};
