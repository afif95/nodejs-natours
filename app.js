const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRouters');

const userRouter = require('./routes/userRouters');

const app = express();
//middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  // app.use(morgan('tiny'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  console.log('checking middleware');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

//route
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
