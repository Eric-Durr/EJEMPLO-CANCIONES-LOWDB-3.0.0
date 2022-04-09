# Steps to work with lowdb 3.0.0 and TypeScript

1. install lowdb 3.0.0: `npm i lowdb@3.0.0`
2. install lowdb types for TypeScript: `npm i @types/lowdb`
3. write tsconfig.json to deal with ES modules from TS to JS:

    ```JSON
      {
        "compilerOptions": {
          "target": "es2020",
          "module": "es2020",
          "rootDir": "./src",
          "moduleResolution": "node",
          "outDir": "./dist",
        }
      }
    ```

4. Add type option to package.json file: `"type": "module",`
5. Migrate lowdb code to [new syntax](https://github.com/typicode/lowdb/releases/tag/v2.0.0)
6. Run code with node es module specifier resolution directive: `node --es-module-specifier-resolution=node .\dist\index.js`
