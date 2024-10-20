# Shared / Foundation

## Notes
- tsconfig.browser.json is used to compile the library for the browser
  - `"module": "esnext"` is used to keep the ES6 module syntax
- tsconfig.node.json is used to compile the library for Node.js
  - `"module": "commonjs"` is used to keep the CommonJS module syntax

## Resources
- https://www.tsmean.com/articles/how-to-write-a-typescript-library/
- https://medium.com/collaborne-engineering/typescript-create-library-for-nodejs-and-browser-fece291d517f