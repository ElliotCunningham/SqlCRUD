import express from 'express';
// import path from 'path';
const app = express.Router({mergeParams: true});

// middleware to use for all requests
app.use((req, res, next) => {
  console.log('Request Made');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

export default app;