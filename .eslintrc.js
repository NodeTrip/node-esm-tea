module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "prettier",
        "mocha-no-only"
    ],
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "semi": false,
                "parser": "babylon",
                "printWidth": 100,
                "singleQuote": true,
                "trailingComma": "all",
                "bracketSpacing": false,
                "jsxBracketSameLine": true
            }
        ],
        "no-const-assign": "warn",
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-unreachable": "warn",
        "no-unused-vars": ["warn", {"varsIgnorePattern": "^_"}],
        "constructor-super": "warn",
        "valid-typeof": "warn",
        "mocha-no-only/mocha-no-only": "error"
    }
}