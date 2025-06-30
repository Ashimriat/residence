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
      browsers: ['last 2 Chrome versions'],//, 'Last 2 versions'],
      ignorePartialSupport: true,
      severity: 'warning'
    }],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [/include/]
    }],
    'selector-class-pattern': null,
  },
};