# js-design-patterns
Examples for design patterns in javascript  

#### Singleton

Ensures a class has only one instance and provide a global point of access to it.  

Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.  

A well known example for the Singleton Pattern is Redux ("Single Source of Truth")

[Example](/Singleton.js)

