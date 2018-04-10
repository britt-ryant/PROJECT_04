//require all dependancies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const session = require(`express-session`);
const cors = require('cors');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');




//declare port

const PORT = process.env.PORT || 3001;

const app = express();


const mainRouter = require('./routes/mainRoutes/mainRouter');

app.use(cors());
app.use(cookieParser());
app.use(methodOverride(`_method`));
app.use(logger(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(`public`));
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);


app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

// app.use('/', userRouter)

const userRouter = require('./routes/userRoutes')(app, passport)
const pport = require('./config/passport')(passport)

app.use('/api', mainRouter)


app.listen(PORT, () => {
  console.log(`The server is up and running, listening on port 🍆  ${PORT}`);
})
