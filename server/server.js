//require all dependancies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const session = require(`express-session`);
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const configAuth = require('./config/auth');

const User = require('./models/user');
//declare port

const PORT = process.env.PORT || 3001;

const app = express();


const mainRouter = require('./routes/mainRoutes/mainRouter');

app.use(cors());
app.use(methodOverride(`_method`));
app.use(logger(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(`public`));
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);
// passport.use(new FacebookStrategy({
//   clientID: '1525894984203482',
//   clientSecret: '3a91a036e31e428681c00521882f6667',
//   callbackURL: "http://localhost:3001/auth/facebook/callback"
// },
//   function(accessToken, refreshToken, profile, done){
//     User.findOrCreate(..., function(err, user){
//       if(err) { return done(err); }
//       done(null, user);
//     })
//   }
// ))

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/api',
                                      failureRedirect: '/login' }));

app.use('/api', mainRouter)


app.listen(PORT, () => {
  console.log(`The server is up and running, listening on port 🍆  ${PORT}`);
})
