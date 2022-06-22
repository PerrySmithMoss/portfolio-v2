---
id: "6"
title: "How To Create Custom Visual Studio Code Snippets"
datePublished: "19th May, 2022"
slug: "how-to-create-custom-visual-studio-code-snippets"
image: "/assets/images/home/blog/code.jpg"
description: "Increase your programming efficiency by learning how to create your own custom Visual Studio Code snippets."
featuredPost: true
tech: ["VS Code"]
tags: ["Featured Post"]
---

## Introduction

There are **two kinds of types** in Swift, which are Value and Reference Types. These types and their characteristics sometimes can be hard to remember and understand. Through this post, I'll try to explain it using a mental model and analogy which will help you easily master swift types.

## Primitives

If you use common programming languages (Java, JavaScript, etc) before, you must be familiar with **primitives and non-primitives data types**. I'm not going to jump into the details of primitives, but here are some illustrations I got from google.


Usually, primitives conclude specific data types such as boolean, char, integer, and float.

### Does Swift have primitive types?

No, **Swift doesn't have primitive types.** In a sense. Swift **still provides 'primitive-like' data** types such as Int, Bool, Double, etc. However, they are made with **struct**.

If you look into Swift's `Int` type definition, you can see that it is made with a `struct`

Interesting right?

---

## Quick Intro to Mental Model

> A mental model is an explanation of someone's **thought process** about how something works in the real world. It is a **representation of the surrounding world**. - [Wikipedia](https://en.wikipedia.org/wiki/Mental_model)

You might be familiar with this variable box analogy:

> We think of variables as containers that hold information and allow us to access them later. We will think of this as a **box** that has a **label** on it. - [StudeApps](https://studeappsblog.medium.com/what-is-a-variable-dd7e539bf388)

This works wonders when you are trying to understand what a variable does.

**That is a mental model.** You create a certain type of analogy to help you understand a concept.

The prior analogy is not a one-size-fits-all, I won't be using it to explain value & reference type. So prepare for some changes 💪

---

## Value and Reference Types

There are two kinds of types in Swift which are **Value Types**, and **Reference Types.** Value types are usually defined as `struct`, `enum`, and `tuple`. Whereas the latter is usually defined as a `class`

### Wire Analogy

I'm going to use a new mental model for variables, which uses a wire to **point** to the value it holds.

Therefore each variable can point to a single value according to its data type.

---

## Value Types

> A value type is a type whose value is **copied** when it's assigned to a variable or constant, or when it's passed to a function - [Swift Docs](https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html)

Remember that 'primitive' data types like Int, Double, String, etc. are made with **struct.** So they follow the value type mental model.

### Mental Model

Let's say we have a struct of Animal (the behavior is also the same with enum, tuple, also Int, String because they're made with struct)

```swift
struct Animal {
    var legs = 4
}

var sheep = Animal()
```

Then, we are assigning the `cow` variables with the value of `sheep`

```swift
var cow = sheep
```

Key point: **the value will be copied**.

### Effect of Copying

After we copy, the `sheep` and `cow` variables now points to **two different struct.** Therefore if we mutate the `cow`, the `sheep` **won't get affected**, and vice versa.

```swift {8,9,11,12}
struct Animal {
    var legs = 4
}

var sheep = Animal()
var cow = sheep

// mutating cow's property
cow.legs = 3

print(sheep.legs) // 4
print(cow.legs) // 3
```

## Reference Types

> A reference types is where instances **share a single copy** of the data when they're assigned to a variable or constant, or when they're passed to a function.

In the wire analogy, **it will point to the same value**. We're using a class that behaves as a reference type.

### Mental Model

```swift
class Animal {
    var legs = 4
}

var sheep = Animal()
var cow = sheep
```

Key Point: **It will share a single copy**

### Effect of Sharing A Single Copy

I believe you already guessed correctly how it will behave. If we **mutate** one variable, **both will be affected**.

```swift {8,9,11,12}
class Animal {
    var legs = 4
}

var sheep = Animal()
var cow = sheep

// mutating cow's property
cow.legs = 3

print(sheep.legs) // 3
print(cow.legs) // 3
```

### Proof

To prove that it is sharing a single copy, we can use `===` ([identity equality](https://developer.apple.com/documentation/swift/1538988)). It will return true if two reference point to the same object instance.

Let's throw in a new instance called `pig`

```swift
var sheep = Animal()
var cow = sheep

// created a new instance
var pig = Animal()
```

Here's the wire

Then we can compare them using identity equality

```swift
print(sheep === cow) // true
print(sheep === pig) // false
```

When in doubt, draw the wire analogy to help you. I'm using [excalidraw](https://excalidraw.com/) for the illustration

## Reference Types Inside of Value Types

Important thing to note is: If you are referencing a class inside of a struct, then **that variable will still behave like the reference type**

```swift
class Leg {
    var count = 4
}

struct Animal {
    var name: String
    var legs = Leg()
}

var sheep = Animal(name: "Sheep")
var cow = sheep

sheep.legs.count = 3

print(sheep.legs.count) // 3
print(cow.legs.count) // 3

// referencing the same class
print("\(sheep.legs === sheep.legs)") // true
```

## Additional Emphasis

I need to emphasize this in case you're coming from **a JavaScript** background.

In Swift, **Array and Dictionary are all value types**.

It is still made with struct 😬

## How to Choose?

I don't have much experience with this yet, so I'll [quote an article](https://developer.apple.com/swift/blog/?id=10) instead

Use a value type when:

- Comparing instance data with `==` makes sense
- You want copies to have an independent state
- The data will be used in code across multiple threads

Use a reference type (e.g. use a class) when:

- Comparing instance identity with `===` makes sense
- You want to create a shared, mutable state

I believe that using value type for overall use will be sufficient. We can trust that when we change one variable/property, it won't affect the others. Thus, creating **a sense of safety and reliability**.

Keep a note that this difference only happens when you mutate. **In absence of mutation, values and references act exactly the same way.**

## Functions & In-Out

Function parameter follows **value types.** This means you can't mutate the parameter and change the value.

**Swift won't even let you mutate them.** Because what is passed in the parameter will be converted into a `let` variable.

You can **imitate reference types** on function parameter by using `inout`

```swift
var numbers = [1,2,3]

func foo(_ arr: inout Array<Int>)  {
    arr.removeLast()
}

foo(&numbers)
print(numbers) // [1,2]
```

Notice the `&`(ampersand) which is an explicit recognition that you're aware it is being used as `inout`.

Under the hood, the In-Out parameter **doesn't use reference types.**

> This behavior is known as _copy-in copy-out_ or _call by value result_. For example, when a computed property or a property with observers is passed as an in-out parameter, its getter is called as part of the function call and its setter is called as part of the function return. - [Swift Docs](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID545)

## Conclusion

You now understand that:

- Swift 'primitive-like' variables are made with a struct
- Value types will copy the value if assigned to a variable or passed into a function
- Reference types will share a single instance if assigned to a variable or passed into a function
- Mutating value types won't affect the other copy, on the other hand, mutating reference types will affect the single instance
- Function parameters follows value types, but can imitate reference types by using the in-out parameter
