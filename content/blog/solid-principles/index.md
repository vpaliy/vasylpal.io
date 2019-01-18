---
title: Make your code S.O.L.I.D again!
date: '2019-01-18T06:29:08.651Z'
tags: ['Kotlin', 'Android', 'Software Design']
---

This post is about the S.O.L.I.D design principles.
In general, they advise us how to arrange data structures and functions into classes and how those classes should interact with each other.

## Abstract

- **Single Responsibility** - having high cohesion of methods and data.
- **Open-Closed** - the ability to change the functionality of a software system with little or no modifications.
- **Liskov Substitution** - building a software system from interchangeable parts.
- **Interface Segregation** - disposing of generic interfaces.
- **Dependency Inversion** - high-level policies do not depend on the code that implements low-level details. To put it simply, your classes should depend on interfaces rather than on the concrete implementations of those interfaces.


## Single Responsibility Principle

> Single Responsibility - a class should have only one reason to change.

Your classes and functions should have high cohesion. Now, cohesion in software engineering is a concept by which to measure the functional relatedness between the methods and the data of a class.

There are two types of cohesion:

- **Low cohesion** - describes a class where its methods and data are grouped arbitrarily; they have little or no functional relatedness. For example, a `Utilities` class is usually considered to have low cohesion of methods; therefore it has more than one responsibility.
- **High cohesion** - is found in a class where its methods contribute to a single well-defined task. This class would have only one reason to change. For instance, collection classes in Java, `POJO` classes, the `Number` class and its hierarchy, `String`, `Thread` have high-cohesion.
