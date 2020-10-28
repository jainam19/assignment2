const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let EmpSchema = Schema({
    name:{
        type:String,
        default:'somename'
    },
    gender:{
        type:String,
        default:'-'
    },
    phone: {
        type:Number,
        unique:true,
        default:10000
    },
    age: Number,
    email: {
        type:String,
        unique:true
    },
    address: String,
    salary: Number,

})

const Employee = mongoose.model('Employee', EmpSchema);
module.exports = Employee;