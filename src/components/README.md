Components
----------

#### props

Basic style of components can be set through props. There can be some logic behind these props (e.g. width of Box as a number is calculated like `number * line-height`)
```jsx
<Box
  height={10}
/>
```

#### style

Every other style can be set with `style` prop. Style prop can be either basic object or a function having a theme asi 1. arg
```jsx
<Box
  style={{
    backgroundColor: 'red',
    ':hover': { backgroundColor: 'blue' },
  }}
/>

<Box
  style={theme => ({
    backgroundColor: thene.colors.primary
  })}
/>
```

#### responsive

It is also possible to set responsive styles directly based on basic dimensions through `media` props. It's just a shorthand to writing the full `@media only screen and (min-width: 64em)`.
You can also use a function with `theme` as 1. arg to declare media styles. Media styles have calculated rythm props.

```jsx
<Text
  media={{
    xs: { lineHeight: 1 },
    md: { lineHeight: 1.3 },
    xl: {
      lineHeight: 1.5,
      padding: 2 // will be calculated
    },
  }}
/>
```

#### hover

You can also set hover styles with a prop
```jsx
<Button
  hover={{
    borderWidth: '2px'
  }}
/>
```


### Box

Basic building block of the UI components. Every other component is composed of `<Box />`.

### Text

### Heading

### Paragraph

### Link

### Button

### Image

### Icon

### List + ListItem

### TextInput

### TextArea
