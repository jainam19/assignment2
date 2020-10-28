const PORT = process.env.PORT || 2585;
const express = require('express');
const morgan = require('morgan');
const EmpRoutes = require('./routes/EmpRoutes')
const mongoose = require('mongoose');


const app = express();

app.use(express.json())

app.use(morgan('dev'))


mongoose
    .connect('mongodb+srv://jainam:fxUfqPilroHHZYLq@cluster0.usvwf.mongodb.net/Company?retryWrites=true&w=majority',{
    useNewUrlParse: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Database Connected with user \'url-admin\'');
}).then(()=>{
    connsole.log('Failed to connect to database with error:', err);
});


app.use(EmpRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is started on Port ${PORT}`);
})