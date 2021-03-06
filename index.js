/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling. 
 * They're for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session')
const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000

const app = express();

// Route setup. You can implement more in the future!
//prove activities
const prove01Routes = require('./routes/prove01');
const pr02Routes = require('./routes/pr02');
const pr08Routes = require('./routes/pr08');
const pr09Routes = require('./routes/pr09');
const pr10Routes = require('./routes/pr10');
const pr11Routes = require('./routes/pr11');
const pr12Routes = require('./routes/liveChat.js');

//team activities
const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03');
const ta04Routes = require('./routes/ta04');


app.use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // For view engine as Pug
    //.set('view engine', 'pug') // For view engine as PUG. 
    // For view engine as hbs (Handlebars)
    //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
    //.set('view engine', 'hbs')
    .use(bodyParser({ extended: false })) // For parsing the body of a POST
    .use(
        session({
            // Simple and not very secure session
            secret: 'random_text',
            cookie: {
                httpOnly: false // Permit access to client session
            }
        })
    )
    .use('/ta01', ta01Routes)
    .use('/prove01', prove01Routes)
    .use('/ta02', ta02Routes)
    .use('/pr02', pr02Routes)
    .use('/ta03', ta03Routes)
    .use('/ta04', ta04Routes)
    .use('/pr08', pr08Routes)
    .use('/pr09', pr09Routes)
    .use('/pr10', pr10Routes)
    .use('/pr11', pr11Routes)
    .use('/pr12', pr12Routes)
    .get('/', (req, res, next) => {
        // This is the primary index, always handled last. 
        res.render('pages/index', { title: 'Welcome to my CSE341 repo', path: '/' });
    })
    .use((req, res, next) => {
        // 404 page
        res.render('pages/404', { title: '404 - Page Not Found', path: req.url })
    });

const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));
const io = require('socket.io')(server)

// added comment
io.on('connection', socket => {
    console.log('Client connected')
    socket.on('new-name', update => {
            if (update) {
                socket.broadcast.emit('update-list')
            } else {
                console.log('Looks like something went wrong')
            }
        })
        .on('disconnect', () => {
            console.log('A client disconnected!')
        })
        .on('newUser', (username, time) => {
            // A new user logs in.
            const message = `${username} has logged on.`
            socket.broadcast.emit('newMessage', {
                message,
                from: 'admin'
            })
        })
        .on('message', data => {
            // Receive a new message
            console.log('Message received')
            console.log(data)
            socket.broadcast.emit('newMessage', {
                ...data
            })
        })
})