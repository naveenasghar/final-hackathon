// For mongodb compass
// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require("cors")
// const UsersModel = require('./models/users')
// const ShowcaseFormScheme = require('./models/showcaseForm')

// const app = express();
// app.use(express.json())
// app.use(cors())


// mongoose.connect("mongodb://127.0.0.1:27017/Application")

// app.post('/register', (req, res) => {
//     UsersModel.create(req.body)
//         .then(users => res.json(users))
//         .catch(err => res.json(err))
// })

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     UsersModel.findOne({ email: email })
//         .then(user => {
//            if(user){
//             if (user.password === password) {
//                 res.json(user)
//             } else {
//                 res.json("password is incorrect")
//             }
//            }else{
//             res.json("user not found")
//            }
//         })
// })


// app.post('/project-submit', (req, res) => {
//     ShowcaseFormScheme.create(req.body)
//         .then(showcaseform => res.json(showcaseform))
//         .catch(err => res.json(err))
// })

// app.get('/projects', (req, res) => {
//     ShowcaseFormScheme.find({})
//         .then(projects => res.json(projects))
//         .catch(err => res.json(err));
// });



// app.listen(3001, () => {
//     console.log("Serve is running")
// })


// For mongodb atlas
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./models/users');
const ShowcaseFormScheme = require('./models/showcaseForm');

const app = express();
app.use(express.json());
app.use(cors());

// Replace the connection string with your MongoDB Atlas connection string
// const atlasConnectionString = "mongodb+srv://userName:password@cluster0.kqrs16y.mongodb.net/?retryWrites=true&w=majority";
const atlasConnectionString = "mongodb+srv://NaeenAsghar:Vqp56KtczPXHgBcB@cluster0.kqrs16y.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(atlasConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/register', (req, res) => {
    UsersModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UsersModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json(user);
                } else {
                    res.json("password is incorrect");
                }
            } else {
                res.json("user not found");
            }
        });
});

app.post('/project-submit', (req, res) => {
    ShowcaseFormScheme.create(req.body)
        .then(showcaseform => res.json(showcaseform))
        .catch(err => res.json(err));
});

app.get('/projects', (req, res) => {
    ShowcaseFormScheme.find({})
        .then(projects => res.json(projects))
        .catch(err => res.json(err));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
