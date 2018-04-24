StyleBox - Flexbox Grid system
========

React component grid system based on [Flexbox Grid](https://github.com/kristoferjoseph/flexboxgrid). Also inspired by [react-styled-flexboxgrid](https://github.com/LoicMahieu/react-styled-flexboxgrid).

Usage
------

Three components are used to make a layout: **`Grid`**, **`Row`** and **`Col`**. All of them are based on `Box`, so they accept all the props the Box does.

- [Setup](#setup)
- [Grid](#grid)
- [Row](#row)
- [Col](#col)


### Setup

In theme customize:
```js
{
  grid: {
    gridSize: 12, // number of columns in grid
    gutterWidth: 2, // gutter width [rem]
    outerMargin: 2, // grid outer margin [rem]
    container: { // grid static widths
      sm: 46, // [rem]
      md: 61, // [rem]
      lg: 76, // [rem]
      xl: 85, // [rem]
    },
  },
  breakpoints: {
    xs: 0, // [rem]
    sm: 48, // [rem]
    md: 64, // [rem]
    lg: 75, // [rem]
    xl: 87, // [rem]
  },
}
```


### Grid

The base page grid. Can be fluid full-width or responsive static width. Should sit either at the root of the tree to wrap the whole page or around the sections of the page.

```jsx
<Grid fluid>
  <Content />
</Grid>
```

default style:
```js
marginRight: "auto"
marginLeft: "auto"
```

#### props

- fluid (Boolean): Default: false

### Row
Row of columns

```jsx
<Row>
  <Col />
  <Col />
</Row>
```

default style:
```js
flexGrow: 0
flexShrink: 1
flexBasis: "auto"
flexDirection: "row"
flexWrap: "wrap"
marginRight: theme.grid.gutterWidth / 2 * -1 + 'rem'
marginLeft: theme.grid.gutterWidth / 2 * -1 + 'rem'
```

### Col
Column - base grid layouting block.

If grid rule is not specified for the dimension or a smaller one, `flex-grow: 1` is used, so Col grows to the available space.

```jsx
<Row>
  <Col grid={{xs: 6, sm: false, lg: true}} />
  <Col offset={{sm: 4, xl: 0}} />
</Row>
```

default style:
```js
display: 'flex'
flexGrow: 1
flexShrink: 0
flexBasis: 0
maxWidth: '100%'
```

#### props

- grid (Object): Specifies grid setup for different dimensions. Key is a dimension name ([from here](#todo)) and value can be a:
  - number: how many columns from grid should it spread
  - false: hide completely for this dimension
  - true: show with the default styles

- offset (Object): Offsets the column in the grid for different dimensions. Key is a dimension name and value is a number of columns to offset. 0 resets the offset.


TODO
-----

- Fallback styles based on compatibility setup
- Storybook examples
