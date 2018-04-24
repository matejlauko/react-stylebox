StyleBox
========

StyleBox is a React component system for styling your app. Uses custom components which can be composed easily and easy styling through props. Based mostly on UI component system from [Danie Steigerwald](https://github.com/steida) => https://medium.com/@steida/css-in-js-the-argument-refined-471c7eb83955

**VWIP** = Very Work In Progress

**Not ready for production use**


Usage
------

Stylebox has 3 parts:
- Components to style the page generally
- Grid system components
- Fela renderer

Stylebox is originally based on [fela](http://fela.js.org/), but isn't dependent on it. You can supply your own renderer to `<Styler />` and components will use it.

- [Basic Setup](#basic-setup)
- [Fela Setup](#fela-setup)
- [Custom renderer Setup](#custom-renderer-setup)

- [Grid system](grid/README.md)
- [Style components](components/README.md)


### Basic Setup

1. Styler
2. reset and global styles
2. renderer
4. theme
5. commponents
6. guidelines
7. storybook
8. dev

#### Styler

Use `<Styler />` to supply renderer, theme and icons to context of components.


```jsx
<Styler renderer={renderer} theme={theme} icons={icons}>
  <App />
</Styler>
```

#### props

- renderer (Renderer) - Renderer to render styles to classNames. Recommended is [fela renderer](#fela-setup)
- theme (UserTheme) - Theme declarations for styling
- Icons (Icons)

### Fela Setup

Get fela renderer:
```js
import { getRenderer } from 'react-stylebox/felaRenderer';
```
and use supply it to `Styler`
```js
<Styler renderer={getRenderer(theme, fonts)}>
```


### Custom renderer setup

// TODO
