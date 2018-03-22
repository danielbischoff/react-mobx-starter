# react-mobx-starter project

Want to have a quickstart with react, mobx and typescript?

Check out this project to spent time implementing your features and not setting up your build config.
To help you while developing, it reloads components and stylesheets on the fly. No full page reload required.

Supported features:
- [x] Typescript
- [x] React
- [x] Mobx
- [x] SASS and CSS modules
- [x] Generates type definitions for your stylesheets
- [x] HMR of components
- [x] HMR of styles
- [x] Autoprefixing of css vendor prefixes
- [x] Minifies/obfuscates your javascript in production
- [x] Uses jest for unit testing
- [x] Use VS Code to debug your code and tests

## Prerequisite
To debug your unit tests, please make sure you are using node version >= 8.9.4

## Install
Checkout the project and run in your terminal:

```
npm install
```

## Run development mode
```
npm run dev
```

## Run test
```
npm run test
```

## Build for production
```
npm run build
```
The output will be under */dist*

## Debug active unit test file
To debug the active unit test file, go to the debug section in VS Code and select the "Jest Test Current File" launch config.
Then open your unit test file, set breakpoints wherever you want and press "F5".

## How to use images

### Use images from ts
To use images, you can import them in your current file and webpack will give you the image as a base64 encoded string or as a path to the image.

```javascript
import * as image from './image.jpg';

const ImageComponent = () => <img src={image} />;
```

### Use images from scss
Just import them via the url syntax. The path is relative to the scss file.

```scss
.container {
  background-image: url('./image.jpg');
}
```