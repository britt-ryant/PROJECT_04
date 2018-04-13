//require all dependancies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const session = require(`express-session`);
const cors = require('cors');


//declare port

const PORT = process.env.PORT || 3001;

const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)


const mainRouter = require('./routes/mainRoutes/mainRouter');
const userRouter = require('./routes/userRoutes/userRouter');

app.use(cors());
app.use(methodOverride(`_method`));
app.use(logger(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(`public`));
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);

app.use('/user', userRouter)
app.use('/api', mainRouter)

io.on('connection', function(socket){
  socket.on('enter', (payload) => {
    console.log(` ${payload.stuff}`);
    io.emit('send message', {
      data: payload.stuff
    })
  })
})


http.listen(PORT, () => {
  console.log(`The server is up and running, listening on port 🍆  ${PORT}`);
})
