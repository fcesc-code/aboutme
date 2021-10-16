# Styleguide



## Why a styleguide?

### Whay another styleguide?



## Architecture

### Folder structure

styles/
  base/
    \/\/ mostly variables and mixins to use anywhere
    _breakpoints.sass
    _colors.sass 
    _typography.sass
    _reset.sass
    \/\/ we `@foward` them in the index, so that they can be easily used in our code without having to import each single file
    _index.sass
  components/
    \/\/ elements reusable anywhere
    _Examples: button, dropdown_
  layouts/
    \/\/ There play a role organizing the layout, mostly match semanting html elements
    _body.sass
    _header.sass
    _footer.sass
    _etc..._

### file and module imports

`@import` rule will be avoided as much as possible. There are some cases where it still will be necessary, but clearly not for our files. 
Instead, `@use` rule should be used.
\
Since all files in /base folder contain variables or basic definitions that may be used everywhere, a _index.sass file is to be created in 
the /base folder, where we `@forward` all base sass rules ready to be used in other files. For exemple, if we want to use any of the 
variables of colors or typography files we don't need to import these files, just `@use '../base/' as *` and they are ready to use. Since 
these are mostly intended as global variables for our site, we are not making use of namespaces here.



## Naming conventions

### There is an argument for semantic html

`<header>` is clear enough. No .l-header, no #header and especially no `<div>` with any of these.



## Selectors

### No reason to use \# css ids

There is no reason to use css ids, except maybe for dynamic script generated DOM elements or similar cases.



## Units

## Blacklisted units

`px`should not be used. In general, use `rem` units and `em` units where you want to be relative to a parent element.


## Design conventions

### Responsive design: limited need for media-queries 

Media queries are useful when layout changes are forced upon certain device sizes. Otherwise are to be avoided, there are many resources sass
offers to make a design responsive. Some examples: 
- No need to use media queries to define container sizes. Use `max-width` or `min-height` where appropriate instead of fixed width and height 
parameters
- For font-sizes, use css `clamp()` functionality instead. `font-size: clamp( 1rem, 1rem + 8vw, 6rem )` There is a min, a max, and a responsive 
font size in between without using media queries.

### Limit breakpoints

There is no need of so many breakpoints, limits between devices are getting blurrer. 

### Mobile first

The fallback will be always mobile. 
