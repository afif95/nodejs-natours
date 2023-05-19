const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRouters');
const userRouter = require('./routes/userRouters');
const reviewRouter = require('./routes/reviewRouters');

const app = express();

app.set('view engine', 'pug');
// path is used to prevent bugs, automatically takes care of slashes etc.
app.set('views', path.join(__dirname, 'views'));

// GLOBAL MIDDLEWARES

// serving static files
// app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, 'public')));

// set security HTTP headers
app.use(helmet());

// development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  // app.use(morgan('tiny'));
}

// limit requests from the same API
// allow 100 requests from a fixed IP per hour
// crashing or saving will reset the limit
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'too many requests from this IP, try again in an hour',
});
app.use('/api', limiter);

// body parser, reading data from the body to req.body
app.use(express.json({ limit: '10kb' }));

// data sanitization against NoSQL query injection
// {
//   "email": {"$gt": ""},
//   "password": "12345678"
// }
// without sanitization, simple query injection will result in a successful login
app.use(mongoSanitize());

// data sanitization against XSS
// {
//   "name": "<div id='bad-code'>Node</div>",
//   "email": "tester@gmail.com",
//   "password": "12345678",
//   "passwordConfirm": "12345678"
// }
// prevents from malicious html code
app.use(xss());

// prevent parameter pollution
// {{URL}}/api/v1/tours?sort=price&sort=duration
// will result in an error on this.queryString.sort inside APIFeatures.js as split() only works on strings but not on arrays
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

// test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  // console.log(x);
  // this middleware is called when there's a request. the error will be processed by global error handling middleware named errorController instead of uncaughtexception in server.js
  next();
});

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

//route
app.get('/', (req, res) => {
  res.status(200).render('base');
});
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

app.all('*', (req, res, next) => {
  // passing arg: express skips all the other middlewares as it knows there's error and moves to error handling middleware
  next(new AppError(`can't find ${req.originalUrl} on this server.`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
