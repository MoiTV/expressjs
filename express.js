const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const moment = require('moment');
const members = require('./Members');



const app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// home page route
app.get('/', function(req, res) {
    res.render('index', {
        title: 'member app',
        members
    });
});



// // middleware
// const logger = (req, res, next) => {
//     console.log(
//         `${req.protocol}://${req.get('host')}${
//             req.originalUrl
//         }: ${moment().format()}`
//     );
//     next();
// };

// // init middleware
// app.use(logger);

// 


// Set static pages
// app.use(express.static(path.join(__dirname, 'public')));

// gets all members
// app.get('/api/members', (req, res) => {
//     res.json(members);
// });

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

// Members API Routes
app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Listing on port 5000'));