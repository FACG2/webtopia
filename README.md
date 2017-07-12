# Accessibility Research

### How to write an accessible navbar?

### How to write an accessible modal?


### What are Semantic Elements?
**A semantic** element clearly describes its meaning to both the _browser_ and the _developer_.

**Examples of non-semantic elements:** ```<div>``` and ```<span>``` - Tells nothing about its content.

**Examples of semantic elements:** ```<form>, <table>```, and ```<article> ```- Clearly defines its content.

The HTML tabindex attribute is used to manage keyboard focus.
 keyboard user will typically move through web content using the tab key, moving from one focusable element to the next in sequential order.
 
 The aria-describedby attribute is used to indicate the IDs of the elements that describe the object. 
 
 Example: 
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta author="Nick Field" />
  <meta description="A site to indicate a love for cats, with signup form" />
  <meta name="viewport" content="initial-scale=1">
  <title>My Messy Site</title>
  <link href="style.css" rel="stylesheet" />
</head>

<body>
  <header tabindex="0">
    <h1 tabindex="0">I Love Coding</h1>
    <img tabindex="0" src="./catonkeyboard.jpeg" title="Can on a keyboard" alt="Picture of a cat typing on a keybaord" />
  </header>


  <section tabindex="0">
    <article>
      <header>
        <h2 tabindex="0">First Section Header</h2>
      </header>
      <p tabindex="0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </article>
  </section>

  <section tabindex="0">
    <article>
      <header>
        <h2 tabindex="0">Second Section Header</h2>
      </header>
      <p tabindex="0">
        Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </article>
  </section>

  <form tabindex="0" action="/" method="post">
    <label for="firstname">First Name</label>
    <input name="First Name" tabindex="0" id="firstname" type="text" />

    <label for="lastname">Last Name</label>
    <input id="lastname" tabindex="0" name="Last Name" type="text" />

    <label for="email">Email</label>
    <input id="email" tabindex="0" name="Email" type="email" />

    <label for="password">Password</label>
    <input id="password" tabindex="0" name="Password" type="password" />

    <label for="submit">Submit</label>
    <button id="submit" tabindex="0" name="Submit" type="submit" />Submit
    </button>
  </form>

  <footer tabindex="0">
    <quote tabindex="0">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      <cite id="John" tabindex="-1">by John Smith, 2017</cite>
    </quote>
    <p tabindex="0" role="button" id="quote" class="quote">Copyright John 2015. All rights reserved</p>
  </footer>
  <script type="text/javascript" src="./script.js">
  </script>
</body>
```
 
 
 Further reading:
 * HTML definition of [Interactive content](http://w3c.github.io/html/dom.html#interactive-content), is content that is specifically intended for user interaction.
 * HTML [tabindex](http://w3c.github.io/html/editing.html#attr-tabindex) definition.
 * ARIA – [providing keyboard focus](https://www.w3.org/WAI/PF/aria-practices/#kbd_focus).
