# js-design-patterns
Examples for design patterns in javascript  

## Creational Patterns

#### Singleton

Ensures a class has only one instance and provides a global point of access to it.  

Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.  

A well known example for the Singleton Pattern is Redux ("Single Source of Truth")

[Example](/Singleton.js)

#### Factory

Defines an interface for creating an object, but lets subclasses decide which class to instantiate.  

A Factory Method creates new objects as instructed by the client. One way to create objects in JavaScript is by invoking a constructor function with the new operator. There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate.  

The key objective of the Factory Method is extensibility. Factory Methods are frequently used in applications that manage, maintain, or manipulate collections of objects that are different but at the same time have many characteristics (i.e. methods and properties) in common. An example would be a collection of documents with a mix of Xml documents, Pdf documents, and Rtf documents.  

[Example](/Factory.js)

#### Abstract Factory

Provides an interface for creating families of related or dependent objects without specifying their concrete classes.  

An Abstract Factory creates objects that are related by a common theme. In object-oriented programming a Factory is an object that creates other objects. An Abstract Factory abstracts out a theme which is shared by the newly created objects.  

Suppose we have two Abstract Factories whose task it is to create page controls, such as, buttons, textboxes, radio buttons, and listboxes. One is the Light Factory which creates controls that are white and the other the Dark Factory which creates controls that are black. Both Factories creates the same types of controls, but they differ in color, which is their common theme. This is an implementation of the Abstract Factory pattern.  

[Example](/AbstractFactory.js)

#### Builder

Seperates the construction of complex object from its representation so that the same construction process can create different processes.  
*Frequency of use in JS* - low  

The Builder pattern allows a client to construct a complex object by specifying the type and content only. Construction details are hidden from the client entirely.  

The AbstractBuilder is not used because JavaScript does not support abstract classes. However, the different Builders must implement the same multistep interface for the Director to be able to step through the assembly process  

[Example](/Builder.js)  

## Behavioral Patterns

#### State

Allows an object to alter its behavior when its internal state changes.  

[Example](/State.js)  

#### Observer

Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.  

The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript. The Observer pattern facilitates good object-oriented design and promotes loose coupling.  

[Example](/Observer.js)







 
