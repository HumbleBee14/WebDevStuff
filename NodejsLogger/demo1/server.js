const express = require('express');
const {logger} = require("./logger/index");
const app = express();


app.use(function(error, req, res, next) {
  console.log("MiddleWare running...")
  res.json({ message: error.message });
}); 

app.listen(5000, () =>{
  logger.info('Express server is running on localhost:5000')
  logger.error('Something went wrong starting server!')
  console.log("Express server is running on localhost:5000")
});
