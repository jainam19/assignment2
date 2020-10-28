const PORT = process.env.PORT || 2585;
const express = require('express');
const morgan = require('morgan');
const EmpRoutes = require('./routes/EmpRoutes')
const mongoose = require('mongoose');


const app = express();

app.use(express.json())

app.use(morgan('dev'))


mongoose.connect('mongodb+srv://jainam19:mD09QLBmibe1PBsZ@cluster0.gq6ex.mongodb.net/Company?retryWrites=true&w=majority');

app.use(EmpRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is started on Port ${PORT}`);
})