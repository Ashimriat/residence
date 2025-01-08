import path from 'node:path';
import url from 'node:url';
import jsEslint from '@eslint/js';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import stylisticPlugin from '@stylistic/eslint-plugin'
import nodePlugin from 'eslint-plugin-n';
import tsEslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import typescriptParser from '@typescript-eslint/parser';
import pluginVue from 'eslint-plugin-vue';


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname
});


export default [
  jsEslint.configs.recommended,
  ...tsEslint.configs.recommended,
  nodePlugin.configs['flat/recommended-script'],
  stylisticPlugin.configs['disable-legacy'],
  ...pluginVue.configs['flat/recommended'],
  ...fixupConfigRules(compat.config({
    extends: [
      'plugin:compat/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:vue-pug/vue3-recommended',
    ],
    plugins: ['compat', 'import'],
    env: {
      es2021: true,
      browser: true,
      'vue/setup-compiler-macros': true,
    },
  })),
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        project: path.resolve(__dirname, './tsconfig.json'),
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['~assets', './assets/'],
            ['@/interfaces', './src/tools/interfaces.ts'],
            ['@/utils', './src/tools/utils.ts'],
            ['@', './src/'],
          ],
          extensions: ['.vue', '.ts', '.svg'],
        },
      },
    },
    rules: {
      // eslint
      'accessor-pairs': 'off',
      'array-callback-return': ['error', {
        allowImplicit: true,
      }],
      'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
      'block-scoped-var': 'error',
      camelcase: [
        'error',
        {
          properties: 'never',
          ignoreDestructuring: false
        }
      ],
      'capitalized-comments': ['off', 'never', {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true
        }
      }],
      'class-methods-use-this': ['error', { exceptMethods: [] }],
      complexity: ['off', 20],
      'consistent-return': 'error',
      'consistent-this': 'off',
      'constructor-super': 'off',
      curly: ['error', 'multi-line'],
      'default-case': ['error', {
        commentPattern: '^no default$',
      }],
      'default-case-last': 'warn',
      'default-param-last': 'warn',
      'dot-notation': ['off', {
        allowKeywords: true,
      }],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'for-direction': 'error',
      'func-name-matching': ['off', 'always', {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      }],
      'func-names': 'warn',
      'func-style': ['off', 'expression'],
      'getter-return': ['error', {
        allowImplicit: true,
      }],
      'grouped-accessor-pairs': 'error',
      'guard-for-in': 'error',
      'id-denylist': 'off',
      'id-length': 'off',
      'id-match': 'off',
      'init-declarations': 'off',
      'logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],
      'max-classes-per-file': ['error', 1],
      'max-depth': ['off', 4],
      'max-lines': ['off', {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      }],
      'max-lines-per-function': ['off', {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      }],
      'max-nested-callbacks': 'off',
      'max-params': ['off', 3],
      'max-statements': ['off', 10],
      'new-cap': ['error', {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
      }],
      'no-alert': 'warn',
      'no-array-constructor': 'error',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-console': 'warn',
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'error',
      'no-constant-condition': 'warn',
      'no-constructor-return': 'error',
      'no-continue': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-div-regex': 'off',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'off',
      'no-else-return': ['error', {
        allowElseIf: false,
      }],
      'no-empty': 'error',
      'no-empty-character-class': 'error',
      'no-empty-function': ['error', {
        allow: [
          'arrowFunctions',
          'functions',
          'methods',
        ],
      }],
      'no-empty-pattern': 'error',
      'no-empty-static-block': 'error',
      'no-eq-null': 'off',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-label': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': ['error', {
        exceptions: [],
      }],
      'no-implicit-coercion': 'off',
      'no-implicit-globals': 'off',
      'no-implied-eval': 'error',
      'no-import-assign': 'error',
      'no-inline-comments': 'off',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-invalid-this': 'off',
      'no-irregular-whitespace': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': ['error', {
        allowLoop: false,
        allowSwitch: false,
      }],
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-loss-of-precision': 'error',
      'no-magic-numbers': ['off', {
        ignore: [],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true,
        enforceConst: true,
        detectObjects: false,
      }],
      'no-misleading-character-class': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-negated-condition': 'off',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-new-wrappers': 'error',
      'no-nonoctal-decimal-escape': 'error',
      'no-obj-calls': 'error',
      'no-object-constructor': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': ['error', {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
        ],
      }],
      'no-plusplus': 'error',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': 'off',
      'no-regex-spaces': 'error',
      'no-restricted-exports': ['error', {
        restrictedNamedExports: [
          'default',
          'then',
        ],
      }],
      'no-restricted-globals': 'error',
      'no-restricted-imports': ['off', {
        paths: [],
        patterns: [],
      }],
      'no-restricted-properties': [
        'error',
        {
          object: 'arguments',
          property: 'callee',
          message: 'arguments.callee is deprecated',
        },
        {
          object: 'global',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'self',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'window',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'global',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          object: 'self',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          object: 'window',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          property: '__defineGetter__',
          message: 'Please use Object.defineProperty instead.',
        },
        {
          property: '__defineSetter__',
          message: 'Please use Object.defineProperty instead.',
        },
        {
          object: 'Math',
          property: 'pow',
          message: 'Use the exponentiation operator (**) instead.',
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
          selector: 'ForOfStatement',
          message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
        },
        {
          selector: 'LabeledStatement',
          message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],
      'no-return-assign': ['error', 'always'],
      'no-script-url': 'error',
      'no-self-assign': ['error', {
        props: true,
      }],
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-setter-return': 'off',
      'no-shadow': 'off',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-ternary': 'off',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-undef': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'off',
      'no-underscore-dangle': ['error', {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      }],
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'off',
      'no-unneeded-ternary': ['error', {
        defaultAssignment: false,
      }],
      'no-unreachable': 'error',
      'no-unreachable-loop': ['error', {
        ignore: [],
      }],
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': ['error', {
        disallowArithmeticOperators: true,
      }],
      'no-unused-expressions': 'off',
      'no-unused-labels': 'warn',
      'no-unused-private-class-members': 'warn',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-useless-assignment': 'off', // кроется правилом @typescript-eslint/no-unused-vars
      'no-useless-backreference': 'error',
      'no-useless-call': 'off',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'off',
      'no-useless-escape': 'error',
      'no-useless-rename': ['error', {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      }],
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'no-warning-comments': ['off', {
        terms: [
          'todo',
          'fixme',
          'xxx',
        ],
        location: 'start',
      }],
      'no-with': 'error',
      'object-shorthand': ['error', 'always', {
        ignoreConstructors: false,
        avoidQuotes: true,
      }],
      'one-var': ['error', 'never'],
      'operator-assignment': ['error', 'always'],
      'prefer-arrow-callback': ['error', {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      }],
      'prefer-const': ['error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      }],
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false
        },
      ],
      'prefer-exponentiation-operator': 'error',
      'prefer-named-capture-group': 'off',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error', // ||
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': ['error', {
        allowEmptyReject: true
      }],
      'prefer-regex-literals': ['error', {
        disallowRedundantWrapping: true,
      }],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: 'error',
      'require-atomic-updates': 'off',
      'require-await': 'off', 
      'require-unicode-regexp': 'off',
      'require-yield': 'error',
      'sort-imports': ['off', {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'none',
          'all',
          'multiple',
          'single',
        ],
      }],
      'sort-keys': ['off', {
        caseSensitive: false,
        natural: true,
      }],
      'sort-vars': 'off',
      strict: ['error', 'never'],
      'symbol-description': 'error',
      'unicode-bom': ['error', 'never'],
      'use-isnan': 'error',
      'valid-typeof': ['error', {
        requireStringLiterals: true,
      }],
      'vars-on-top': 'error',
      yoda: 'error',
      // typescript
      '@typescript-eslint/adjacent-overload-signatures': 'off', // ||
      '@typescript-eslint/array-type': 'off', // ||
      '@typescript-eslint/await-thenable': 'off', // ||
      '@typescript-eslint/ban-ts-comment': 'error', // ||
      '@typescript-eslint/ban-tslint-comment': 'off', // ||
      '@typescript-eslint/ban-types': 'off', // ||
      '@typescript-eslint/class-literal-property-style': 'off', // ||
      '@typescript-eslint/class-methods-use-this': 'off', // ||
      '@typescript-eslint/consistent-generic-constructors': 'off', // ||
      '@typescript-eslint/consistent-indexed-object-style': 'off', // ||
      '@typescript-eslint/consistent-return': 'off', // ||
      '@typescript-eslint/consistent-type-assertions': 'off', // ||
      '@typescript-eslint/consistent-type-definitions': 'off', // ||
      '@typescript-eslint/consistent-type-exports': 'off', // ||
      '@typescript-eslint/consistent-type-imports': 'off', // ||
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/dot-notation': ['error', {
        allowKeywords: true,
      }],
      '@typescript-eslint/explicit-function-return-type': 'off', // ||
      '@typescript-eslint/explicit-member-accessibility': 'off', // ||
      '@typescript-eslint/explicit-module-boundary-types': 'off', // ||
      '@typescript-eslint/init-declarations': 'off', // ||
      '@typescript-eslint/max-params': 'off', // ||
      '@typescript-eslint/member-ordering': 'off', // ||
      '@typescript-eslint/method-signature-style': 'off', // ||
      '@typescript-eslint/naming-convention': ['error',
        {
          selector: 'variable',
          format: [
            'camelCase',
            'PascalCase',
            'UPPER_CASE',
          ],
        },
        {
          selector: 'function',
          format: [
            'camelCase',
            'PascalCase',
          ],
        },
        {
          selector: 'typeLike',
          format: [
            'PascalCase',
          ],
        },
      ],
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-array-delete': 'off', // ||
      '@typescript-eslint/no-base-to-string': 'off', // ||
      '@typescript-eslint/no-confusing-non-null-assertion': 'off', // ||
      '@typescript-eslint/no-confusing-void-expression': 'off', // ||
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'off', // ||
      '@typescript-eslint/no-duplicate-type-constituents': 'off', // ||
      '@typescript-eslint/no-dynamic-delete': 'off', // ||
      '@typescript-eslint/no-empty-function': ['error', {
        allow: [
          'arrowFunctions',
          'functions',
          'methods',
        ],
      }],
      '@typescript-eslint/no-empty-interface': 'off', // ||
      '@typescript-eslint/no-explicit-any': 'off', // ||
      '@typescript-eslint/no-extra-non-null-assertion': 'off', // ||
      '@typescript-eslint/no-extraneous-class': 'off', // ||
      '@typescript-eslint/no-floating-promises': 'off', // ||
      '@typescript-eslint/no-for-in-array': 'off', // ||
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'off', // ||
      '@typescript-eslint/no-inferrable-types': 'off', // ||
      '@typescript-eslint/no-invalid-this': 'off', // ||
      '@typescript-eslint/no-invalid-void-type': 'off', // ||
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-loss-of-precision': 'error',
      '@typescript-eslint/no-magic-numbers': ['off', {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      }],
      '@typescript-eslint/no-meaningless-void-operator': 'off', // ||
      '@typescript-eslint/no-misused-new': 'off', // ||cript-eslint/no-misused-promises': 'off', // ||
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-mixed-enums': 'off', // ||
      '@typescript-eslint/no-namespace': 'off', // ||
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off', // ||
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off', // ||
      '@typescript-eslint/no-non-null-assertion': 'off', // ||
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'off', // ||
      '@typescript-eslint/no-require-imports': 'off', // ||
      '@typescript-eslint/no-restricted-imports': 'off', // ||
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-this-alias': 'off', // ||
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off', // ||
      '@typescript-eslint/no-unnecessary-condition': 'off', // ||
      '@typescript-eslint/no-unnecessary-qualifier': 'off', // ||
      '@typescript-eslint/no-unnecessary-type-arguments': 'off', // ||
      '@typescript-eslint/no-unnecessary-type-assertion': 'off', // ||
      '@typescript-eslint/no-unnecessary-type-constraint': 'off', // ||
      '@typescript-eslint/no-unsafe-argument': 'off', // ||
      '@typescript-eslint/no-unsafe-assignment': 'off', // ||
      '@typescript-eslint/no-unsafe-call': 'off', // ||
      '@typescript-eslint/no-unsafe-declaration-merging': 'off', // ||
      '@typescript-eslint/no-unsafe-enum-comparison': 'off', // ||
      '@typescript-eslint/no-unsafe-member-access': 'off', // ||
      '@typescript-eslint/no-unsafe-return': 'off', // ||
      '@typescript-eslint/no-unsafe-unary-minus': 'off', // ||
      '@typescript-eslint/no-unused-expressions': ['warn', {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      }],
      '@typescript-eslint/no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      }],
      '@typescript-eslint/no-use-before-define': ['error', {
        functions: true,
        classes: true,
        variables: true,
      }],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-useless-empty-export': 'off', // ||
      '@typescript-eslint/no-useless-template-literals': 'off', // ||
      '@typescript-eslint/no-var-requires': 'off', // ||
      '@typescript-eslint/non-nullable-type-assertion-style': 'off', // ||
      '@typescript-eslint/only-throw-error': 'off', // ||
      '@typescript-eslint/parameter-properties': 'off', // ||
      '@typescript-eslint/prefer-destructuring': 'off', // ||
      '@typescript-eslint/prefer-enum-initializers': 'off', // ||
      '@typescript-eslint/prefer-find': 'off', // ||
      '@typescript-eslint/prefer-for-of': 'off', // ||
      '@typescript-eslint/prefer-function-type': 'off', // ||
      '@typescript-eslint/prefer-includes': 'off', // ||
      '@typescript-eslint/prefer-literal-enum-member': 'off', // ||
      '@typescript-eslint/prefer-namespace-keyword': 'off', // ||
      '@typescript-eslint/prefer-nullish-coalescing': 'off', // ||
      '@typescript-eslint/prefer-optional-chain': 'off', // ||
      '@typescript-eslint/prefer-promise-reject-errors': 'off', // ||
      '@typescript-eslint/prefer-readonly': 'off', // ||
      '@typescript-eslint/prefer-readonly-parameter-types': 'off', // ||
      '@typescript-eslint/prefer-reduce-type-parameter': 'off', // ||
      '@typescript-eslint/prefer-regexp-exec': 'off', // ||
      '@typescript-eslint/prefer-return-this-type': 'off', // ||
      '@typescript-eslint/prefer-string-starts-ends-with': 'off', // ||
      '@typescript-eslint/prefer-ts-expect-error': 'off', // ||
      '@typescript-eslint/promise-function-async': 'off', // ||
      '@typescript-eslint/require-array-sort-compare': 'off', // ||
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off', // ||
      '@typescript-eslint/restrict-template-expressions': 'off', // ||
      '@typescript-eslint/return-await': ['error', 'in-try-catch'],
      '@typescript-eslint/sort-type-constituents': 'off', // ||
      '@typescript-eslint/strict-boolean-expressions': 'off', // ||
      '@typescript-eslint/switch-exhaustiveness-check': 'off', // ||
      '@typescript-eslint/triple-slash-reference': 'off', // ||
      '@typescript-eslint/typedef': 'off', // ||
      '@typescript-eslint/unbound-method': 'off', // ||
      '@typescript-eslint/unified-signatures': 'off', // ||
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off', // ||
      // stylistic
      '@stylistic/array-bracket-newline': ['off', 'consistent'],
      '@stylistic/array-bracket-spacing': ['warn', 'never'],
      '@stylistic/array-element-newline': ['off', {
        multiline: true,
        minItems: 3,
      }],
      '@stylistic/arrow-parens': ['warn', 'always'],
      '@stylistic/arrow-spacing': ['warn', {
        before: true,
        after: true,
      }],
      '@stylistic/block-spacing': ['warn', 'always'],
      '@stylistic/brace-style': ['warn', '1tbs', {
        allowSingleLine: true,
      }],
      '@stylistic/comma-dangle': ['warn', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      }],
      '@stylistic/comma-spacing': ['warn', {
        before: false,
        after: true,
      }],
      '@stylistic/comma-style': ['warn', 'last', {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      }],
      '@stylistic/computed-property-spacing': ['warn', 'never'],
      '@stylistic/dot-location': ['warn', 'property'],
      '@stylistic/eol-last': ['warn', 'always'],
      '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
      '@stylistic/function-call-spacing': ['warn', 'never'],
      '@stylistic/function-paren-newline': ['warn', 'multiline-arguments'],
      '@stylistic/generator-star-spacing': ['warn', {
        before: false,
        after: true,
      }],
      '@stylistic/implicit-arrow-linebreak': ['warn', 'beside'],
      '@stylistic/indent': ['warn', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      }],
      '@stylistic/indent-binary-ops': ['warn', 2],
      '@stylistic/key-spacing': ['warn', {
        beforeColon: false,
        afterColon: true,
      }],
      '@stylistic/keyword-spacing': ['warn', {
        before: true,
        after: true,
        overrides: {
          return: {
            after: true,
          },
          throw: {
            after: true,
          },
          case: {
            after: true,
          },
        },
      }],
      '@stylistic/line-comment-position': ['off', {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      }],
      '@stylistic/linebreak-style': ['warn', 'unix'],
      '@stylistic/lines-around-comment': 'off',
      '@stylistic/lines-between-class-members': ['warn', 'always', {
        exceptAfterSingleLine: false,
      }],
      '@stylistic/max-len': ['warn', {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      '@stylistic/max-statements-per-line': ['off', { max: 1 }],
      '@stylistic/member-delimiter-style': 'off',
      '@stylistic/multiline-comment-style': ['off', 'starred-block'],
      '@stylistic/multiline-ternary': ['off', 'never'],
      '@stylistic/new-parens': 'warn',
      '@stylistic/newline-per-chained-call': ['warn', {
        ignoreChainWithDepth: 4,
      }],
      '@stylistic/no-confusing-arrow': ['warn', {
        allowParens: true,
      }],
      '@stylistic/no-extra-parens': ['off', 'all', {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
      }],
      '@stylistic/no-extra-semi': 'warn',
      '@stylistic/no-floating-decimal': 'warn',
      '@stylistic/no-mixed-operators': ['warn', {
        groups: [
          [
            '%',
            '**',
          ],
          [
            '%',
            '+',
          ],
          [
            '%',
            '-',
          ],
          [
            '%',
            '*',
          ],
          [
            '%',
            '/',
          ],
          [
            '/',
            '*',
          ],
          [
            '&',
            '|',
            '<<',
            '>>',
            '>>>',
          ],
          [
            '==',
            '!=',
            '===',
            '!==',
          ],
          [
            '&&',
            '||',
          ],
        ],
        allowSamePrecedence: false,
      }],
      '@stylistic/no-mixed-spaces-and-tabs': 'warn',
      '@stylistic/no-multi-spaces': ['warn', {
        ignoreEOLComments: false,
      }],
      '@stylistic/no-multiple-empty-lines': ['warn', {
        max: 2,
        maxBOF: 0,
        maxEOF: 1,
      }],
      '@stylistic/no-tabs': 'warn',
      '@stylistic/no-trailing-spaces': ['warn', {
        skipBlankLines: false,
        ignoreComments: false,
      }],
      '@stylistic/no-whitespace-before-property': 'warn',
      '@stylistic/nonblock-statement-body-position': ['warn', 'beside', {
        overrides: {},
      }],
      '@stylistic/object-curly-newline': ['warn', {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      }],
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      '@stylistic/object-property-newline': ['warn', {
        allowAllPropertiesOnSameLine: true
      }],
      '@stylistic/one-var-declaration-per-line': ['warn', 'always'],
      '@stylistic/operator-linebreak': ['warn', 'before', {
        overrides: {
          '=': 'none',
        },
      }],
      '@stylistic/padded-blocks': [
        'warn',
        {
          blocks: 'never',
          classes: 'never',
          switches: 'never',
        },
        {
          allowSingleLineBlocks: true,
        },
      ],
      '@stylistic/padding-line-between-statements': ['off', {
        blankLine: 'always',
        prev: 'var',
        next: 'var',
      }],
      '@stylistic/quote-props': ['warn', 'as-needed', {
        keywords: false,
        unnecessary: true,
        numbers: false,
      }],
      '@stylistic/quotes': ['warn', 'single', { avoidEscape: true }],
      '@stylistic/rest-spread-spacing': ['warn', 'never'],
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/semi-spacing': ['warn', {
        before: false,
        after: true,
      }],
      '@stylistic/semi-style': ['warn', 'last'],
      '@stylistic/space-before-blocks': 'warn', 
      '@stylistic/space-before-function-paren': ['warn', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }],
      '@stylistic/space-in-parens': ['warn', 'never'],
      '@stylistic/space-infix-ops': 'warn',
      '@stylistic/space-unary-ops': ['warn', {
        words: true,
        nonwords: false,
        overrides: {},
      }],
      '@stylistic/spaced-comment': ['warn', 'always', {
        line: {
          exceptions: [
            '-',
            '+',
          ],
          markers: [
            '=',
            '!',
            '/',
          ],
        },
        block: {
          exceptions: [
            '-',
            '+',
          ],
          markers: [
            '=',
            '!',
            ':',
            '::',
          ],
          balanced: true,
        },
      }],
      '@stylistic/switch-colon-spacing': ['warn', {
        after: true,
        before: false,
      }],
      '@stylistic/template-curly-spacing': 'warn',
      '@stylistic/template-tag-spacing': ['warn', 'never'],
      '@stylistic/type-annotation-spacing': 'off',
      '@stylistic/type-generic-spacing': 'off',
      '@stylistic/type-named-tuple-spacing': 'off',
      '@stylistic/wrap-iife': ['warn', 'outside', {
        functionPrototypeMethods: false,
      }],
      '@stylistic/wrap-regex': 'off',
      '@stylistic/yield-star-spacing': ['warn', 'after'],
      // node
      'n/callback-return': 'off',
      'n/global-require': 'error',
      'n/handle-callback-err': 'off',
      'n/no-mixed-requireds': ['off', false],
      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
      'n/no-process-env': 'off',
      'n/no-process-exit': 'off',
      'n/no-restricted-modules': 'off',
      // not needed node
      'n/no-unpublished-import': 'off',
      'n/no-missing-import': 'off',
      'n/no-unsupported-features/node-builtins': 'off',
      // import
      'import/consistent-type-specifier-style': 'off',
      'import/default': 'error',
      'import/dynamic-import-chunkname': ['off', {
        importFunctions: [],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
      }],
      'import/export': 'error',
      'import/exports-last': 'off',
      'import/extensions': ['off', 'ignorePackages', {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }],
      'import/first': 'error',
      'import/group-exports': 'off',
      'import/max-dependencies': ['off', {
        max: 10,
      }],
      'import/named': 'off',
      'import/namespace': 'off',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-amd': 'error',
      'import/no-anonymous-default-export': ['off', {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      }],
      'import/no-commonjs': 'off',
      'import/no-cycle': ['error', {
        maxDepth: '∞',
      }],
      'import/no-default-export': 'off',
      'import/no-deprecated': 'off',
      'import/no-duplicates': 'warn',
      'import/no-dynamic-require': 'error',
      'import/no-empty-named-blocks': 'off',
      'import/no-extraneous-dependencies': ['error',
        {
          devDependencies: [
            'test/**',
            'tests/**',
            'spec/**',
            '**/__tests__/**',
            '**/__mocks__/**',
            'test.{js,jsx}',
            'test.{ts,tsx}',
            'test-*.{js,jsx}',
            'test-*.{ts,tsx}',
            '**/*{.,_}{test,spec}.{js,jsx}',
            '**/*{.,_}{test,spec}.{ts,tsx}',
            '**/jest.config.js',
            '**/jest.config.ts',
            '**/jest.setup.js',
            '**/jest.setup.ts',
            '**/vue.config.js',
            '**/vue.config.ts',
            '**/webpack.config.js',
            '**/webpack.config.ts',
            '**/webpack.config.*.js',
            '**/webpack.config.*.ts',
            '**/rollup.config.js',
            '**/rollup.config.ts',
            '**/rollup.config.*.js',
            '**/rollup.config.*.ts',
            '**/gulpfile.js',
            '**/gulpfile.ts',
            '**/gulpfile.*.js',
            '**/gulpfile.*.ts',
            '**/Gruntfile{,.js}',
            '**/Gruntfile{,.ts}',
            '**/protractor.conf.js',
            '**/protractor.conf.ts',
            '**/protractor.conf.*.js',
            '**/protractor.conf.*.ts',
            '**/karma.conf.js',
            '**/karma.conf.ts',
            '**/.eslintrc.js',
            '**/.eslintrc.ts',
          ],
          optionalDependencies: false,
        },
      ],
      'import/no-import-module-exports': ['error', {
        exceptions: [],
      }],
      'import/no-internal-modules': ['off', {
        allow: [],
      }],
      'import/no-mutable-exports': 'error',
      'import/no-named-as-default': 'warn',
      'import/no-named-as-default-member': 'warn',
      'import/no-named-export': 'off',
      'import/no-namespace': 'off',
      'import/no-nodejs-modules': 'off',
      'import/no-relative-packages': 'error',
      'import/no-relative-parent-imports': 'off',
      'import/no-restricted-paths': 'off',
      'import/no-self-import': 'error',
      'import/no-unassigned-import': 'off',
      'import/no-unresolved': ['off', {
        commonjs: true,
        caseSensitive: true,
      }],
      'import/no-unused-modules': ['off', {
        ignoreExports: [],
        missingExports: true,
        unusedExports: true,
      }],
      'import/no-useless-path-segments': ['error', {
        commonjs: true,
      }],
      'import/no-webpack-loader-syntax': 'error',
      'import/order': ['error', {
        groups: [
          [
            'type',
            'builtin',
            'external',
            'internal',
          ],
        ],
      }],
      'import/prefer-default-export': 'off',
      'import/unambiguous': 'off',
      // vue
      'vue/component-tags-order': 'off',
      'vue/block-order': ['warn', {
        order: ['script', 'template', 'style'],
      }],
      'vue/multi-word-component-names': 'warn',
    },
  },
];
