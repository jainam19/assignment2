const express = require("express");
const multer = require('multer');
const Employee = require("../models/EmpSchema");
const router = express.Router();

router.post('/emp1', (req, res)=>{
    const body = req.body;
    console.log(body);
    let emp1 = Employee(req.body)
    emp1.save().then(()=>{
        res.status(202).send();
    })
})


/*router.get('/emp1', (req,res)=>{
        console.log(req.body);
        res.send();
     })*/


router.get('/emp1', (req,res)=>{
    Employee.find().then(result=>{
       console.log(result);
     })
})

let storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'profile-images/')    
    },
    filename:(req, file, cb)=>{
        cb(null, (Date.now() + file.originalname))
    }
})

const profile = multer({storage});


router.post('/uploadimages', profile.array('profile1',1),(req,res)=>{
    console.log(req.files);
    res.send('OK');
})


module.exports = router;