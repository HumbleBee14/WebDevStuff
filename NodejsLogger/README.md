# Node Logging with winston

Practice to learn how to use the winston logging library in Node [winston logging library](https://github.com/winstonjs/winston) to create custom loggers in Node.js application.

It also demonstrates how to customize transports and what you need to pay attention to when you **prepare your application for production use**.

# How to run this application

Run

```
npm install
```

to install all dependencies

To see the output of the development logger run

```
npm run dev
```

Add this in package.json after confugring .config file

/*
"scripts": {
    `"dev": "NODE_ENV=development nodemon index.js",`
    "test": "echo \"Error: no test specified\" && exit 1"
  },
*/  

The `dev` script automatically sets the `NODE_ENV` environment variable to `development`.

If the `NODE_ENV` environment variable is set to a different value than `development` (or not set at all), the production logger will be used.



To see the output of the production logger, just run

```
node index.js
```
