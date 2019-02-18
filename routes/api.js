const express = require("express");
const router = express.Router();
const Quote = require("../models/quotes");


router.get("/quotes", (req, res, next) =>{
  Quote.find({}).then((quote)=>{
    let randomQuote = Math.floor(Math.random()*quote.length);
    // res.send(quote[randomQuote]);
    // res.render("index", {ranQuotePers: quote[randomQuote].autor, ranQuote: quote[randomQuote].quote, ranQuoteLive: quote[randomQuote].autorLife, ranQuoteID: quote[randomQuote]._id});
    res.render("makeQ", {});
  })
});

router.post("/quotes", (req, res, next) =>{
  Quote.create(req.body).then((quote)=>{
    res.send(quote);
  }).catch(next);
});

router.put("/quotes/:id", (req, res, next) =>{
  Quote.findByIdAndUpdate({_id: req.params.id}, req.body).then(()=>{
    Quote.findOne({_id: req.params.id}).then((quote)=>{
      res.send(quote);
    }).catch(next);
  });
});

router.delete("/quotes/:id", (req, res, next) =>{
  Quote.findByIdAndRemove({_id: req.params.id}).then((quote)=>{
    res.send(quote);
  });
});



module.exports = router;
