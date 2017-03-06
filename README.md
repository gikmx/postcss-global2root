# postcss-global2root
As the name indicates, moves all rules found inside a `:global` declaration to the root.

### Example:

before:
```css
:global {
    .foo {
        color: black;
    }
}
:local .bar {
    color: red;
}
```

after:
```css
.foo {
    color: black;
}
:local .bar {
    color: red;
}
```
