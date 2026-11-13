---
id: "1"
title: "Create custom snippets in Visual Studio Code"
datePublished: "19 May 2022"
datePublishedISO: "2022-05-19"
slug: "how-to-create-your-own-custom-visual-studio-code-snippets"
image: "/assets/images/home/blog/code.jpg"
description: "Create reusable code snippets in VS Code, from a console.log shortcut to a TypeScript React component."
featuredPost: true
tech: ["VS Code"]
tags: ["Featured Post"]
---

## Introduction

Custom snippets save you from typing the same code patterns repeatedly. This guide walks through two examples in Visual Studio Code: a console.log shortcut and a TypeScript React component.

---

## How to create custom Visual Studio Code snippets

In the Visual Studio app/program on your computer click **Code** (top left of screen next to file) > Preferences > Configure User Snippets on macOS. On Windows you would click **Code** > Preferences > User Snippets. From here we can then select if we want the snippet to be global, for a specific file or a specific language. Once you have selected the type of snippet you will then be prompted to enter a file name for the snippet. After you enter your file name it will open and you will be greeted by a bunch of text explaining how to work with snippets. More information on how to work with snippets can be found on the official Visual Studio Code documentation [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

<br/>

### Snippet Structure

With your custom snippet file open you will notice an example of a snippet, if you un-comment the example snippet by deleting the forward slashes at the start of each new line, your snippet should look a lot like this:

```javascript
	// Example:
	"Print to console": {
	"scope": "javascript,typescript",
	    "prefix": "log",
 	    "body": [
	 	    "console.log('$1');",
 		    "$2"
	 	],
	 	"description": "Log output to console"
	 }
```

As you can see above, we have a snippet called **Print to console**, the **scope** is what language/file it can be used inside, **prefix** is the word/character we will use to call the snippet, **body** is the output of the snippet and **description** is an optional description of the snippet displayed by IntelliSense.

<br/>

### Basic snippet

As you can see below, I have created the most basic code snippet. This snippet will simply return a JavaScript/TypeScript `console.log()` statement with the sentence 'This is a test!'. To use this snippet, simply save the snippet file, open a new JavaScript or TypeScript file and type the word **log** and enter. This should return the body of the code snippet you just created in your file.

```typescript
{
    "Print to console": {
	"scope": "javascript,typescript",
	"prefix": "log",
	"body": [
		"console.log('This is a test!');",
	],
	"description": "Log output to console"
	}
}
```

<br/>

### Advanced snippet

Now that we have a basic understanding of the structure and syntax of a code snippet, we can now create more useful and advanced snippets which leverage variables and tabstops.

Located below I have created a brand new global snippet called **Typescript React Functional Component**, which can be used in any file and any language. This snippet will create a bare bones TypeScript/React functional component. If you take a closer look you can see that I am using the variable `$TM_FILENAME_BASE`, this will copy the filename of the current document without its extensions and insert the value into that variable. I am also using 3 tab stops, the number specificed is the order in which tabstops will be visited, meaning that once you click enter on your snippet it will first place the cursor at `$1` then if you hit tab it will move the cursor to `$2` and then `$3` etc etc.

```typescript
{
    "Typescript React Functional Component": {
    "prefix": "trfc",
    "body": [
		"import React from 'react';",
		"",
		"interface ${TM_FILENAME_BASE}Props {",
		"\t$1",
		"}",
		"",
		"export const $TM_FILENAME_BASE: React.FC<${TM_FILENAME_BASE}Props> = ({$2}) => {",
		"  return (",
		"\t  $3",
		"  );",
		"}"
    ],
    "description": "Typescript React Functional Component"
  }
}
```
