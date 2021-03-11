module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'sonarjs',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:sonarjs/recommended',
        'prettier',
        'prettier/@typescript-eslint'
    ],
};
