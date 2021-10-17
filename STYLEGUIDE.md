# Styleguide



## Why a styleguide?

### Why another styleguide?

Any styleguide is based on choices. Some are good today, and might be terrible in a few years. Others have a personal flavour. There
may be mistakes and good ones. Since the aim of this exercise was to justify the choice for a styleguide, I checked some styleguides
first before blindly going for one. My findings:

- There are lots of contradictory statements regarding style css guides. While some dedicate lines to id naming conventions, others 
abhor the idea of having id as a selector. We can extend this comment to css frameworks, patterns, whatever you name it. Therefore, 
there is space for filtering out the noise and making personal choices. 
- There has been clearly an evolution in the css and html landscape. If you see a styleguide from 2005... it is too old. It is 
strikingly clear for html semantic tags for instance. The opportunity to go further than legacy-based practices is out there.
- I am a junior developer, continuously learning. I tend to be optimist when it comes down to estimating. Otherwise, I would
probably not be writing these lines.

So the stage is set for creating this tiny custom styleguide.

### A pragmatic approach to fanatism

A lot of the rules we can enfore with linters are... irrelevant choices. Such as tab and white spaces, whether there is a whitespace
between a property and its value, etc. Of course these rules improve code readibility and consistency. That's why linters are great,
so that we don't have to worry about this bureaucracy. These rules are set up in the configuration files, in case you are interested,
you can check the rules out by opening these files. They are mostly self-explanatory so the focus in this document lies upon what is 
not evident.

So what is this document about? It is a custom style guide where some choices and preferences in css writing are expressed. You will
find expressions such as 'are to be avoided' instead of 'never use'. Rules are to be observed, but we do not pretend to define rules 
for every situation we might encounter. Linters cannot write a name for us, cannot decide when to create a new class or when to use
a library. In the important decisions we are on our own. This style guide aims to provide some guidance, more than a set-in-stone 
bunch of rules: fanatism remains by the linters.


## Architecture

We will organize our application styles in a modular way, taking advantage of the sass / scss features. We will use sass modules.

### Folder structure

- styles/ 
  - base/
    _mostly variables and mixins to use anywhere_
    - _breakpoints.sass
    - _colors.sass 
    - _typography.sass
    - _reset.sass
    _we `@foward` them in the index, so that they can be easily used in our code without having to import each single file_
    - _index.sass
  - components/
    _elements reusable anywhere_
    - Examples: button, dropdown,...
  - layouts/
    _There play a role organizing the layout, mostly match semanting html elements_
    - _body.sass
    - _header.sass
    - _footer.sass
    - _etc..._
  - pages/
    _where everything gets mixed to design a page layout_

### File and module imports

`@import` rule will be avoided as much as possible. There are some cases where it still will be necessary, but clearly not for our files. 
Instead, `@use` rule should be used.

Since all files in /base folder contain variables or basic definitions that may be used everywhere, a _index.sass file is to be created in 
the /base folder, where we `@forward` all base sass rules ready to be used in other files. For exemple, if we want to use any of the 
variables of colors or typography files we don't need to import these files, just `@use '../base/' as *` and they are ready to use. Since 
these are mostly intended as global variables for our site, we are not making use of namespaces here.



## Naming conventions

Names should be always meaningful.

### There is an argument to replace semantic html tags

`<header>` is clear enough. No .l-header, no #header and especially no `<div>` with any of these.



## Selectors

### No reason to use \# css ids

There is no reason to use css ids, except maybe for dynamic script generated DOM elements or similar cases.

### Name delimiters

Use hyphen `-` as name delimiter. CamelCase or underscore should be avoided as name delimiters for css selectors. 



## Legacy

### IE is not supported

Microsoft has decided IE should retire to the archives of internet. It was about time. We happily support this decision by not desigining 
for IE. Therefore, css such as `flex: 1 1 0px` is not needed. 0 without units is fine.

### --BEM-sorry

Having one class for each html tag is fastidious. Monolithic extremely specific classes should be used only in few cases not everywhere.
For this reason, we are not --BEM-supporters. Some further [reading](https://torazaburo.medium.com/css-anti-patterns-4f24bf933ab5).

### Legacy responsive

Once upon a time there was a need for bootstrap and JQuery to better solve responsive columns or layouts. Luckily, css and html have evolved.
When considering adding css libraries, it should be carefully assessed whether they can add value to our project or not. We don't want to 
reinvent the wheel, at the same time we don't want hundreds of additional useless css lines.



## Pure sass || css

### !(!important)

There is no reason to make `!important` important. It should not be used.

### Extends

The At-rule `@extends` will be avoided since it can create bloated css payloads.

### Shorthand properties

Shortand properties are preferred. Unless strictly necessary, combine properties in shortand definitions.

### Flex and Grid 

Always use flex and grid instead of floats.

### Third parties policy

Libraries should be preferred to frameworks.



## Units

In general, relative length units are preferred. Use `rem` units and `em` units only where you want to be relative to a parent element.
`vw` and `vh` are great relative units in relation to viewport. Sometimes `%` is also useful relative to a parent element.

`px`should not be used for html. However, it can be useful when designing printing layouts. Same goes for other units such as `mm` which
have no use case for html.


## Design conventions

### Responsive design: limited need for media-queries 

Media queries are useful when layout changes are forced upon certain device sizes. Otherwise are to be avoided, there are many resources sass
offers to make a design responsive. Some examples: 
- No need to use media queries to define container sizes. Use `max-width` or `min-height` where appropriate instead of fixed width and height 
parameters
- For font-sizes, use css `clamp()` functionality instead. `font-size: clamp( 1rem, 1rem + 8vw, 6rem )` There is a min, a max, and a responsive 
font size in between without using media queries. And there is no reason for breakpoint/pixel tables to be.

### Limit breakpoints

There is no need of so many breakpoints, limits between devices are getting blurrer. 

### Mobile first

The fallback will be always mobile, beware of the wearables though. For this reason, only following breakpoints are to be used in general:

| mixin name | min-width | mostly known as |
| ---------- | --------- | --------------- |
| smallDevices | 360 px | mobile phones |
| medium Devices | 780 px | tablets |
| standardDevices | 1024 px | computers |
| hugeDevices | 3840 px | smart TVs |

In addition, some fine-grained target breakpoints have been set which should be scarcely used, even though there might be a (rare) case for 
them. For example: the mixin `wearables` targets devices up to 359 px. 

### Typography

Fonts must have allways a standard fallback. We never know if the fridge or a car are going to access our site with strange fonts and browsers.
Some thoughts on accessibility regarding typography contrast are to be considered.



Go back to [README](https://github.com/fcesc-code/aboutme#README).