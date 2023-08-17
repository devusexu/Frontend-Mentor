# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/desktop.png)
![](./images/mobile.png)

### Links

- [Solution URL](https://github.com/devusexu/Frontend-Mentor/tree/main/intro-component-with-signup-form-master)
- [Live Site URL](https://devusexu.github.io/Frontend-Mentor/intro-component-with-signup-form-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

Estimated time: 150 mins  
Result: far more by not being focused

In this challenge, I used these attribute about a11y
- aria-label
- aria-live
- aria-describedby  

label for interactive elements; live for constant changing area; describedby is just like labeledby but more detailed.

I suddenly realize the way I organize CSS is kinda hard to maintain.  
A MDN's article advise to split logical regions like general styles, utility classes, site-wide styles like layout, components, etc. but I don't write like that either so I don't benefit from the concepts actually. 

I also want to care less about pixel-perfection so that I won't spend that much time. I really want to reach the js/framework challenges more quickly, that's what matters to me.

## Acknowledgments

Thanks for advice from @IryDev about CSS organization and grid position properties.