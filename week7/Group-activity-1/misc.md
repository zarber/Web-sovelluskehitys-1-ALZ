# Background

## The LocalLibrary website

_LocalLibrary_ is the name of the website that we'll create and evolve over the course of this series of tutorials. As you'd expect, the purpose of the website is to provide an online catalog for a small local library, where users can browse available books and manage their accounts.

This example has been carefully chosen because it can scale to show as much or little detail as we need, and can be used to show off almost any Express feature. More importantly, it allows us to provide a _guided_ path through the functionality you'll need in any website:

- In the first few tutorial articles we will define a simple _browse-only_ library that library members can use to find out what books are available. This allows us to explore the operations that are common to almost every website: reading and displaying content from a database.
- As we progress, the library example naturally extends to demonstrate more advanced website features. For example we can extend the library to allow new books to be created, and use this to demonstrate how to use forms and support user authentication.

Even though this is a very extensible example, it's called _**Local**Library_ for a reason — we're hoping to show the minimum information that will help you get up and running with Express quickly. As a result we'll store information about books, copies of books, authors and other key information. We won't however be storing information about other items a library might lend, or provide the infrastructure needed to support multiple library sites or other "big library" features.

As you work through the tutorial we'll provide the appropriate code snippets for you to copy and paste at each point, and there will be other code that we hope you'll extend yourself (with some guidance).

Instead of copying and pasting all the code snippets, try typing them out, It'll benefit you in the long run as you'll be more familiar with the code next time you come to write something similar.

## What view engine should I use?

The _Express Application Generator_ allows you to configure a number of popular view/templating engines, including [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig), and [Vash](https://www.npmjs.com/package/vash), although it chooses Jade by default if you don't specify a view option. Express itself can also support a large number of other templating languages [out of the box](https://github.com/expressjs/express/wiki#template-engines).

> **Note:** If you want to use a template engine that isn't supported by the generator then see [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express docs) and the documentation for your target view engine.

Generally speaking, you should select a templating engine that delivers all the functionality you need and allows you to be productive sooner — or in other words, in the same way that you choose any other component! Some of the things to consider when comparing template engines:

- Time to productivity — If your team already has experience with a templating language then it is likely they will be productive faster using that language. If not, then you should consider the relative learning curve for candidate templating engines.
- Popularity and activity — Review the popularity of the engine and whether it has an active community. It is important to be able to get support when problems arise throughout the lifetime of the website.
- Style — Some template engines use specific markup to indicate inserted content within "ordinary" HTML, while others construct the HTML using a different syntax (for example, using indentation and block names).
- Performance/rendering time.
- Features — you should consider whether the engines you look at have the following features available:

  - Layout inheritance: Allows you to define a base template and then "inherit" just the parts of it that you want to be different for a particular page. This is typically a better approach than building templates by including a number of required components or building a template from scratch each time.
  - "Include" support: Allows you to build up templates by including other templates.
  - Concise variable and loop control syntax.
  - Ability to filter variable values at template level (e.g. making variables upper-case, or formatting a date value).
  - Ability to generate output formats other than HTML (e.g. JSON or XML).
  - Support for asynchronous operations and streaming.
  - Client-side features. If a templating engine can be used on the client this allows the possibility of having all or most of the rendering done client-side.

> **Note:** There are many resources on the Internet to help you compare the different options!

For this project, we'll use the [Pug](https://pugjs.org/api/getting-started.html) templating engine (this is the recently-renamed Jade engine), as this is one of the most popular Express/JavaScript templating languages and is supported out of the box by the generator.
