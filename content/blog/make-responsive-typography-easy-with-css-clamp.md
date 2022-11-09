---
id: "6"
title: "Responsive typography made simple"
datePublished: "19th May, 2022"
slug: "make-responsive-typography-easy-with-css-clamp"
image: "/assets/images/blog/responsive-typography-made-simple-with-css.jpg"
description: "Increase your programming efficiency by learning how to create your own custom Visual Studio Code snippets."
featuredPost: false
tech: ["CSS"]
tags: ["Featured Post"]
---

## Introduction

Are you sick and tired of having to write multiple media queries just for the Typography on your websites? Are you sick and tired of having to check each screen size just to make sure the text on your website is not overflowing or causing the layout to change? Well, look no further, today I am going to show you a much easier way of creating responsive Typography using the CSS `clamp` funtion.

## What is CSS clamp and how does it work?

The `clamp` function in CSS allows us to constrain a specifed element between an upper and lower value. You can think of this function just like the practical tool used for woodwork/carpentry/welding etc. Just like the real world clamp would hold a piece of material in place, the `clamp` function will keep an element from moving from it's specified bounds.

Clamp takes three values, minimum, preferred and maximum, and the browser will try to apply the preferred value as long as the calculated size doesn't go below the minimum or above the maximum value. A typical use of clamp is to set the preferred value to some factor of the viewport width. That way, as the viewport gets wider, the font gets bigger. The minimum and maximum values literally clamp the font size so if the calculated preferred size goes below the minimum threshold, the size is fixed to that minimum threshold, and if it goes above the maximum threshold, it is also fixed to that maximum threshold. The syntax for clamp is as follows: `clamp(MIN, VAL, MAX)` and is resoved as `max(MIN, min(VAL, MAX)).`

## CSS clamp in practise

So, let's say we have a hero section with a `h1` element in the center. We want the `h1` element to have a minimum font size of 32px, preferred font size of 6vw and a maximum font-size of 64px. This will result in the following CSS syntax:

```css
.hero h1 {
  text-align: center;
  font-size: clamp(32px, 6vw, 64px);
}
```

Once applied to our `h1` element, and as we resize the window to make it smaller the `h1` should scale down and not go below our minimum font-size value of 32px. On the other hand, as we scale the window up the font-size should increase and not go above our maximum font-size value of 64px. The magic behind this working is contained in our middle value (preferred value) of 6vw. As this value is a relative value, it means that the font-size will be set at 32px, until the computed value of 6vw becomes greater than that of 32px. At this point, the font-size will be set at 6vw, until 6vw's computed value reaches our maximum value of 64px. At this point, the font-size will be stay at 64px, until the viewport width gets smaller again.

## Bonus Tip

Not only can you use the clamp() function with text elements, you can also use it with images, videos, or any element for that matter with a set value. For example, let's say we have an image on our page and we want to make it's width responsive. We can use the `clamp` function to help us out here. Take a look at the following CSS code:

```css
img {
  width: clamp(700px, 100%, 1280px);
}
```

Using clamp on the image width above we're setting a minimum width of 700px, preffered width of 100% and a maximum width of 1280px on the image. Once applied to your element, and as you resize the window to make it smaller, the image should scale down and not go below our minimum width of 700px. On the other hand, as we scale the window up the width should increase and not go above our maximum width value of 1280px. The explination behind this one is the following, the width will be set at 700px until the width of 100% scales up to our maximun value of 1280px. At this point, the width will stay at 1280px, until the viewport width gets smaller again.
