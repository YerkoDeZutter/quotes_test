const express = require("express");
const router = express.Router();
const Quote = require("../models/quotes");


router.get("/quotes", (req, res, next) =>{
  Quote.find({}).then((quote)=>{
    let randomQuote = Math.floor(Math.random()*quote.length);
    // res.send(quote[randomQuote]);
    res.render("index", {ranQuote: quote[randomQuote]});
    // res.render("makeQ", {});
  })
});

router.get("/quotes/makeQuote", (req, res, next) =>{
  res.render("makeQ", {});
});

router.get("/quotes/list", (req, res, next) =>{
  Quote.find({}).then(quote=>{
    res.render("Qlist", {thisQuote: quote});

  });
  // console.log(allQuotes.schema);
  // res.render("Qlist", {Quotes: allQuotes[0]});
});

router.post("/quotes/makeQuote", (req, res, next) =>{
  console.log(req.body);

  Quote.create(req.body).then((quote)=>{
    res.render("index", {ranQuote: quote});
  });
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
