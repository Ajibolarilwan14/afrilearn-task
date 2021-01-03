const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const Student = mongoose.model("Student");
const { JWT_SECRET } = require('../config/keys')
const requireLogin = require('../middleware/requireLogin');


router.post('/signup', (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      mobileNo,
      state,
      examCategory
    } = req.body;
    if (!email || !password || !firstName || !lastName || !mobileNo || !state || !examCategory) {
        return res.status(422).json({error: "Please fill all the fields"})
    }

    Student.findOne({ email: req.body.email })
    .then(savedStudent => {
        if (savedStudent) {
            return res.status(422).json({error: "eeek, user already exist!"})
        }else{
            const avatar = gravatar.url(req.body.email, {
                s: 200,
                r: "pg",
                d: "mm"
            });

            bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    return res.status(422).json({error: err})
                }

                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) {
                        throw err;
                    }

                    const newStudent = new Student({
                        firstName: req.body.firstName,
                        email: req.body.email,
                        lastName: req.body.lastName,
                        password: hash,
                        state: req.body.state,
                        examCategory: req.body.examCategory,
                        mobileNo: req.body.mobileNo,
                        avatar
                    })

                    newStudent
                        .save()
                        .then(student => {
                            res.json({message: "signup successfully, please login to continue!"})
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/signin", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({error: "Please fill all fields"})
    }

    Student.findOne({email: email})
    .then(savedStudent => {
        if (!savedStudent) {
            return res.status(422).json({error: "eek, Invalid email address or password!"})
        }
        bcrypt.compare(password, savedStudent.password)
        .then(doMatch => {
            if (doMatch) {
                const token = jwt.sign({_id: savedStudent._id}, JWT_SECRET)
                const {_id, email, firstName, lastName} = savedStudent;
                res.json({token, user:{_id, firstName, lastName, email}})
            }else{
                return res.status(422).json({error: "Eeek, Invalid email address or password!"})
            }
        })
        .catch(err => {
            console.log(err);
        })
    })
})

module.exports = router;