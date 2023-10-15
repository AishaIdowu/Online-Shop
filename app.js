const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const errorController = require('./controllers/error')


app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.use('/', require('./routes/shop'))
app.use('/admin', require('./routes/admin'));
app.use(errorController.get404);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`)
})