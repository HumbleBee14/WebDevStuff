## Implementing caching in Node.js using Redis.

- Install the dependencies:

```bash
npm install
```

- Open a different tab in your terminal, shift to your home directory by:

```bash
cd
```

- Start the redis server by running the 

```bash
redis-server
```

from the redis installation directory

- Start the development server

```bash
npm run dev
```

- Experiment the API from Postman.


# --------------------------------------------------------------------------------
### To test the above code:

- Ensure that the development server is up and running.

- Head over to Postman and send a request similar to: http://localhost:3000/food/coffee. Feel free to replace coffee with your preference.

- Wait for the response and observe the amount of time it has taken to get the response. In the process, it has saved the data in the cache since it was not saved.

- Send the same request again. This time the time taken to get the response will have significantly be reduced. This is because the response was accessed from the cache. The network bandwidth used is also reduced.

# --------------------------------------------------------------------------------

## Considerations while implementing caching

The following are important considerations you need to take when implementing caching:

- How often is data being updated.: If the data is not being updated regularly then you are safe using the prior implementation. Otherwise if the data is frequently updated, you will need to set the time with which the data that will be available in the cache.

- Uniqueness of the key: When the keys are similar, the cache will store inappropriate data. In order to ensure that you do not get similar keys, you have to hash them.

- Caching on every query: In some instances such as authorization, caching may not be advisable since the data is rapidly updated. Real-time communication mechanisms do not also require caching.

 ... many more.
