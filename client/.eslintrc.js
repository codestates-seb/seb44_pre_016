module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react-hooks' // eslint-plugin-react-hooks 설치한 경우
    ],
    env: {
        browser: true
    },
    extends: [
        'airbnb-base', // or airbnb
        // 'prettier',
        'plugin:react/recommended', // eslint-plugin-react 설치한 경우
        'plugin:jsx-a11y/recommended', // eslint-plugin-jsx-a11y 설치한 경우
        'plugin:import/errors', // eslint-plugin-import 설치한 경우
        'plugin:import/warnings', // eslint-plugin-import 설치한 경우
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': 0,
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
         ]
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                ],
            },
        },
    },
};