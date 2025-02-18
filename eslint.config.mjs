import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/ban-types': 'off'
    }
  })
  .override('nuxt/vue/rules', {
    rules: {
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 1,  // Un seul attribut en ligne unique
          multiline: 1,
        }
      ],
      'vue/html-indent': ['error', 2], // Indentation à 2 espaces
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'always'
        }
      ],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/multi-word-component-names': 'off',
    }
  })

