
// import the NPM dependancy package
const express     = require("express");
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");

// initialise express() inside of your app variable
const app = express();


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }))

app.use("/css", express.static("css"));

// parse body of incoming json requests
app.use(bodyParser.json());

// import route- and model modules and pass your app
// require("./models/Pet")(app);
// require("./routes/petRoutes")(app);
app.use("/api", require("./routes/api"));


// error middle ware

app.use((err, req, res, next)=>{
  res.status(422).send({error: err._message})
  // console.log(err);
})


// mongoose.connect("mongodb://username:123password@ds251902.mlab.com:51902/testerino");  THIS IS FOR ONLINE DATABASE

mongoose.connect("mongodb://localhost/quotes");
mongoose.Promise = global.Promise;


// choose what port on which to run the server
const PORT = 3000;

// use the app variable and listen on the port
app.listen(process.env.port || PORT, () => {
  console.log(`I'M RUNNING ON A SERVER!!! YEY!!!`);
});
