
<div align="center">

<div align="center">
  <a href="https://ticker-ui.github.com" target="_blank">
    <img alt="orbit-components" src="ticker-ui.png" srcset="https://ticker.ui" height="150px" />
  </a>
</div>

<strong>Ticker-UI is a React component library basd on theme-ui which provides developers with the easiest possible way of building React apps.</strong>

</div>

---

## Installation

`ticker-ui` are served as an [npm package](https://www.npmjs.com/package/@xteam/ticker-ui).

Add them to your project by running:

```bash
// with npm
npm install @kiwicom/orbit-components

// with yarn
yarn add @kiwicom/orbit-components
```

Don't forget to install the [styled-components](https://github.com/styled-components/styled-components/) `^4.0.0` also.

## Usage

1. Import fonts that are used in orbit-components:

```html
<link
  href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
  rel="stylesheet"
/>
```

Or via CSS:

```css
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700");
```

2. Include any of our components in your project and use it:

```jsx
import Alert from "@kiwicom/orbit-components/lib/Alert";

<Alert>Hello World!</Alert>;
```

If you want to use custom theme or dictionary inside your project, it's necessary to wrap your app into `<ThemeProvider>`. See [this document](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/ThemeProvider/README.md) for more information.

For live preview check out [Storybook](https://kiwicom.github.io/ticker/) or [orbit.kiwi](https://ticker-ui.ui).

You can also try `orbit-components` live on [CodeSandbox](https://codesandbox.io/s/github/designkiwicom/orbit-sandbox).

## Types

Ticker-ui comes with both Flow and Typescript definitions files, so you can choose what fits your project. However, if you work with Typescript, you need to add type for `styled-components`.

```
// with npm
npm install @types/styled-components --save-dev

// with yarn
yarn add @types/styled-components -D
```

