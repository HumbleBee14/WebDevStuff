Install Redis

wget https://download.redis.io/releases/redis-6.0.9.tar.gz
tar xzf redis-6.0.9.tar.gz
cd redis-6.0.9
make
make install


For Windows: Install from here and run redis-server
https://github.com/microsoftarchive/redis/releases/tag/win-3.2.100
and set path 

and start the redis server using redis-server

npm install --save  express redis axios


then check the results on Postman -
 Testing above APi using: GET request to : http://localhost:3000/jobs?search=node.js

 My results:
 Before: Initial new request took - 1192 ms
 ![alt text](https://github.com/HumbleBee14/WebDevStuff/blob/main/RedisCacheNodejs/RedisDemo1/images/Before(first%20Request%20to%20server).png?raw=true)


 After: new request took - 5 ms

![alt text](https://github.com/HumbleBee14/WebDevStuff/blob/main/RedisCacheNodejs/RedisDemo1/images/After(with%20Redis).png?raw=true)

Indeed it's worth it !!