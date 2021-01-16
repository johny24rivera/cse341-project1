const express = require('express');
const router = express.Router();
const gis = require('g-i-s');

router.get('/', (req, res, next) => {
  res.render('pages/pr02', {
    title: 'Prove Assignment 02',
    path: '/pr02', // For pug, EJS 
  });
});


router.post('/addBook', (req, res, next) => {
  let bookURL = "";
  gis(req.body.title + ' cover page', logResults);

  function logResults(error, results) {
    if (error) {
      console.log(error);
    }
    else {
      bookURL = results[0].url

      res.render('pages/bookView', {
        title: 'Book View',
        path: '/bookView', // For pug, EJS
        bookTitle: req.body.title,
        bookSummary: req.body.summary,
        url: bookURL,
      });
    }
  }
});



module.exports = router;




