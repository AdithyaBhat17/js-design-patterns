# js-design-patterns
Examples for design patterns in javascript  

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

