// @ts-check

// Formatting, Linting, Type Checking
// Fromatting: Prettier
// Linting: ESLint
// Type Checking: TypeScript(node는 typescript 외에 @types/node 도 설치)

/**
 * VSCode JavaScript Development Setup
 *
 *              |   Frmatting   |   Listing                   |   Type checking
 * ----------------------------------------------------------------------------
 * Package      |   prettier    |   eslint                    |   typescript
 * ----------------------------------------------------------------------------
 *              |               |   eslint-config-airbnb-base |   @types/node
 * Additional   |               |   eslint-config-prettier    |
 * dependencies |               |   eslint-plugin-import      |
 *              |               |   eslint-plugin-node        |
 * ----------------------------------------------------------------------------
 *              |               |                             |
 * Config file  |   .prettierrc |   .eslintrc.js              | jsconfig.json
 *              |               |                             |
 * ----------------------------------------------------------------------------
 * VSCode       |       O       |               O             |        X
 * extentions   |               |                             |
 * ----------------------------------------------------------------------------
 */
