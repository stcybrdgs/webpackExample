# Basic WebPack setup

## in the terminal:

```bash
# in terminal:
mkdir myProject
cd myProject
git init
touch .gitignore
npm init -y
npm install @tiptap/core @tiptap/pm @tiptap/starter-kit
npm i chart.js
npm install --save-dev webpack
npm install --save-dev webpack-cli
npm install webpack-dev-server --save-dev
npm install
```

## in package.json:

```json
{
  "scripts": {
    "start": "webpack serve --config webpack.config.js",
    "build": "webpack build --config webpack.config.js",
    "build:watch": "webpack build --watch --config webpack.config.js"
  }
}
```

## in webpack.config.js

```javascript
// webpack.config.js
const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
  },
}

module.exports = config
```

## index.js

Make sure the entry point (`index.js`) imports all of the
scripts that should be included in the `dist/index.js` bundle

```javascript
// index.js
import { myChart } from './charts'
import { myEditor } from './tiptap'
```

## back in the terminal:

```bash
# back in terminal after doing the following:
#    updating package.json with build script (see above)
#    creating webpack.config.js (see above)
npm run build
```

## index.html

Be sure to import the `index.js` file from `dist` as a `module`

```html
<script src="dist/index.js" type="module"></script>
```

## Live Server

Use the VSCode `Live Server` extension to run the front end (`index.html`)

