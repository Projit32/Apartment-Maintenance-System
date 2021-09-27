const express = require('express')
require('./db/mongoose')
const path = require('path');
const monthlyRouter = require('./routers/months')
const statsRouter = require('./routers/stats')
const mailRouter = require('./routers/mail')
const userRouter = require('./routers/user')
const frontendRouter = require('./routers/frontend')
const session = require('express-session')
const MongoDBSessionStore = require('connect-mongodb-session')(session)


const app = express()
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
const port = process.env.PORT

app.use(express.static(path.join(__dirname, 'public')));

const store = new MongoDBSessionStore({
    uri: process.env.MONGODB_URL,
    collection: 'sessions',
    maxAge: Date.now() + (3600 * 1000)
})

app.use(
    session({
        secret:process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized:false,
        store: store
    })
)

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(frontendRouter)
app.use(monthlyRouter)
app.use(statsRouter)
app.use(mailRouter)
app.use(userRouter)

app.use((req, res, next) => {
    res.status(404).send()//.render('404', { pageTitle: 'Page Not Found' });
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})