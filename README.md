# Voila! Eslint, Prettier, and Typescript Setup for Node.js

My settings for ESLint, Prettier, and Typescript in a Node.js project.

Need, to change things? You can easily do that as well.

**Pro-Tip**: Check out my [eslint-config-jsb]() for React and Typescript projects.

# How it works

- It lints all of your `js` and `ts` code in any project subdirectories
- It uses eslint-config-airbnb-typescript for it's underyling lint rules
- It fixes issues and formatting errors with Prettier
- It provides all the necessary packages, like `typescript` and `@types/node`, to run typescript in Node.js

# Local setup

To set this up in your project:

1. Ensure you are in the root project directory and that you have a `package.json`, then install all necessary dependencies:

```bash
npx install-peerdeps -D eslint-config-jsb-node
```

2. You should now notice that your `package.json` is popuplated with several new dependencies.

3. Now, create an `.eslintrc.json` file in your root project directory, and provide the following json:

```json
{
  "extends": ["eslint-config-jsb-node"]
}
```

This will actually allow your project to leverage this config.

4. Next, add some scripts to your `package.json` so you can run eslint:

```json
"scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint '**/*.{ts,js}' --quiet --fix"
}
```

5. If you run `npm run lint` from your terminal, it will expose any issues. If you run `npm run lint:fix` it will quietly fix all of your javascript and typescript files in any project subdirectories.

6. Now, you need to create a `tsconfig.json` file in your root project directory. This is where your typescript configuration will live. It's also how eslint will be able to work with typescript. I recommend the following as a start, but feel free to customize where needed:

```js
{
  "compilerOptions": {
    "target": "es6", // compiles to es6
    "module": "commonjs", // compiles to commonjs modules
    "rootDir": "src", // uses all files in src for compilation
    "outDir": "dist", // outputs all files to dist
    "sourceMap": true,
    "resolveJsonModule": true,
    "lib": ["es6", "dom"], // includes these libraries at compile time
    "esModuleInterop": true // allows es6 import syntax
  },
  "include": ["**/*.ts"], // which files typescript should include in compilation, it will expect files here immediately
  "exclude": ["node_modules", "dist/*"] // dist is where your files are built
}
```

7. Typescript will now expect `ts` files to exist in your `src` directory. Go ahead and create a sample file in `src` called `index.ts`:

```ts
const getFood: () => string = () => {
  return 'yummy tacos!';
};

getFood();
```

# Working with VS Code

VS Code can be tricky with linting, especially if you have global formatting tools installed like Prettier. Let's fix that.

1. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin in VS Code.

2. Now, let's update some of the settings for ESLint in VS Code's `settings.json` file. Pull up the [command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette), which is `cmd shift p` on mac. Then type `settings json` and click on `Open Settings (JSON)`. In this file, provide the following settings:

```js
  "editor.formatOnSave": true,
  // turn auto-save off for javascript, react, typescript and typescript react
  // these will be done through eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  },
  // eslint to run on save
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.disableLanguages": ["js", "tsx"],
```

3. Now you are all set up to auto-fix all linting errors on save in VS Code.

4. Finally, you'll need to restart VS Code for all of the changes to take place and work effectively.

**Pro-Tip**: You can either quit VS Code and reopen it, or pull up the command palette and type "reload" then select "Developer: Reload Window."

# Customize the settings

Want to customize the ESLint and Prettier settings even further? You can add the rules in your `.eslintrc.json` file. [ESLint Rules](https://eslint.org/docs/rules/) go under the `"rules"` option. [Prettier options](https://prettier.io/docs/en/options.html) should be nested in `"prettier/prettier"`. Any prettier rules will overwrite the existing ones in my config, so if you want to keep the existing ones, be sure to include them. Here's an example of what you could do:

```json
{
  "extends": ["eslint-config-jsb-node"],
  "rules": {
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        "arrowParens": "avoid",
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80
      }
    ]
  }
}
```

This would turn all console lint errors off (so you can use `console.log`). It would also add a prettier rule for omitting parens in arrow functions when possible.

# Where to go from here

From here, I'd recommend installing [ts-node](https://www.npmjs.com/package/ts-node). With this package, you can execute typescript in node with no compilation necessary.
